"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import dynamic from "next/dynamic";

// Heavy Three.js preloader — client-only chunk that mounts on top of the
// server-rendered shell below, so the page is never uncovered while it loads
const loadLoadingScreen = () => import("./LoadingScreen");
const LoadingScreen = dynamic(loadLoadingScreen, { ssr: false });

// Start fetching the 3D chunk the moment this module evaluates in the
// browser — in parallel with hydration — instead of when the component
// first renders, which is after it. Same chunk, same import; webpack hands
// `dynamic` the module that is already on its way. The spinner shell is
// on screen for the download either way; this just makes it shorter.
if (typeof window !== "undefined") void loadLoadingScreen().catch(() => undefined);

// How long assets (hero video, images) get before the preloader opens anyway.
// The finale used to wait up to 20 seconds for a 3.7 MB hero video, which on
// a slow mobile connection meant twenty seconds of a pulsing logo. Seven is
// still longer than the build itself; the video starts the moment it can
// behind the opened doors (Hero plays on canplaythrough).
const ASSET_TIMEOUT_MS = 7000;
// Absolute cap — if the 3D chunk or WebGL ever fails, never strand users on black
const FAILSAFE_MS = 15000;

interface PreloaderContextValue {
  /** True while the preloader covers the page */
  isLoading: boolean;
  /** Called by Hero when its background video can play through */
  markVideoReady: () => void;
}

const PreloaderContext = createContext<PreloaderContextValue>({
  isLoading: false,
  markVideoReady: () => { },
});

export const usePreloader = () => useContext(PreloaderContext);

const PreloaderProvider = ({ children }: { children: React.ReactNode }) => {
  // Preloader runs on every homepage load — server and client both start
  // with the shell visible so hydration matches
  const [show, setShow] = useState(true);
  // The 3D overlay (door panels) has mounted and covers the screen
  const [overlayMounted, setOverlayMounted] = useState(false);
  // Doors have started splitting — homepage behind them comes alive
  const [revealing, setRevealing] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  const ready = (videoReady && pageLoaded) || timedOut;

  const finish = useCallback(() => {
    setRevealing(true);
    setShow(false);
  }, []);

  const markOverlayMounted = useCallback(() => setOverlayMounted(true), []);
  const markRevealing = useCallback(() => setRevealing(true), []);
  const markVideoReady = useCallback(() => setVideoReady(true), []);

  useEffect(() => {
    if (!show) return;

    // Everything the browser tracks: images, stylesheets, fonts
    const onLoad = () => setPageLoaded(true);
    if (document.readyState === "complete") setPageLoaded(true);
    else window.addEventListener("load", onLoad);

    const assetTimer = setTimeout(() => setTimedOut(true), ASSET_TIMEOUT_MS);
    const failsafeTimer = setTimeout(finish, FAILSAFE_MS);

    // Freeze scrolling behind the preloader
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(assetTimer);
      clearTimeout(failsafeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [show, finish]);

  return (
    <PreloaderContext.Provider value={{ isLoading: show && !revealing, markVideoReady }}>
      {show && (
        <>
          {/* Server-rendered shell: covers the page from the very first paint,
              before any JavaScript runs, so the homepage never flashes in or
              animates behind the preloader. Removed as soon as the 3D overlay's
              door panels take over, so the door split reveals the homepage —
              not this spinner. */}
          {!overlayMounted && (
            <div
              id="arc-preloader-shell"
              className="fixed inset-0 z-[70] bg-[#020202] flex items-center justify-center pointer-events-auto"
            >
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2 border-orange-500/10" />
                <div className="absolute inset-0 rounded-full border-t-2 border-orange-500 animate-spin shadow-[0_0_15px_rgba(249,115,22,0.2)]" />
              </div>
            </div>
          )}
          <LoadingScreen
            ready={ready}
            onMounted={markOverlayMounted}
            onExitStart={markRevealing}
            onLoadComplete={finish}
          />
        </>
      )}
      {children}
    </PreloaderContext.Provider>
  );
};

export default PreloaderProvider;
