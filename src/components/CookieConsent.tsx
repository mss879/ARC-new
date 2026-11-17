"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

import {
  CONSENT_EVENT,
  CONSENT_OPEN_EVENT,
  GA_MEASUREMENT_ID,
  META_PIXEL_ID,
  clearTrackingData,
  readConsent,
  saveConsent,
  type ConsentCategory,
  type ConsentChoice,
} from "@/lib/consent";

const NONE: ConsentChoice = { analytics: false, marketing: false };
const ALL: ConsentChoice = { analytics: true, marketing: true };

// "Accept all" and "Reject all" are the same size and weight, side by side:
// refusing must be as easy as agreeing.
const BTN = "cut-btn [--cut:10px] px-4 py-3 text-sm font-semibold transition-colors";
const BTN_EMBER = `${BTN} [--cut-focus:#1B1A17] bg-ember text-ink hover:bg-[#FF5C3A]`;
const BTN_OUTLINE = `${BTN} [--cut-line:#1B1A17] text-ink hover:bg-ink/5`;
const BTN_INK = `${BTN} bg-ink text-paper-white hover:bg-[#2A2823]`;
const LINK = "text-sm font-medium text-ink underline underline-offset-4 transition-colors hover:text-ember-deep";

/**
 * The cookie banner, and the only place Google Analytics and the Meta pixel
 * are loaded: each script is rendered only once the visitor has agreed to
 * its category (see src/lib/consent.ts). The site's own visitor statistics
 * check the same choice in AnalyticsTracker.
 *
 * The banner does not block the page. It waits for the home page's
 * preloader to finish, and the footer's "Cookie settings" reopens it.
 */
export default function CookieConsent() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [manage, setManage] = useState(false);
  const [draft, setDraft] = useState<ConsentChoice>(NONE);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const titleId = useId();

  useEffect(() => {
    const sync = () => setChoice(readConsent());
    sync();
    setLoaded(true);
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  // First visit: ask once the page is showing. On the home page that is
  // after the preloader's doors open, not behind them.
  useEffect(() => {
    if (!loaded || isAdmin || choice) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const show = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setVisible(true), 400);
    };
    const w = window as unknown as { __arcPreloaderDone?: boolean };
    if (pathname === "/" && !w.__arcPreloaderDone) {
      window.addEventListener("arc:preloader-done", show, { once: true });
      const failsafe = setTimeout(show, 16_000);
      return () => {
        window.removeEventListener("arc:preloader-done", show);
        clearTimeout(failsafe);
        clearTimeout(timer);
      };
    }
    show();
    return () => clearTimeout(timer);
  }, [loaded, isAdmin, choice, pathname]);

  // "Cookie settings" in the footer.
  useEffect(() => {
    const open = () => {
      setDraft(readConsent() ?? NONE);
      setManage(true);
      setVisible(true);
      requestAnimationFrame(() => headingRef.current?.focus());
    };
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  // Google's own consent signals follow the marketing choice, so Google Ads
  // features only use what the visitor agreed to.
  useEffect(() => {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (!choice?.analytics || typeof gtag !== "function") return;
    const ads = choice.marketing ? "granted" : "denied";
    gtag("consent", "update", { ad_storage: ads, ad_user_data: ads, ad_personalization: ads });
  }, [choice?.analytics, choice?.marketing]);

  const decide = useCallback((next: ConsentChoice) => {
    const previous = readConsent();
    saveConsent(next);
    setVisible(false);
    setManage(false);
    // Clear what is stored for every category that is now off: cookies from
    // this visit, and ones left by an earlier visit (the site used to set
    // them before asking). A script cannot be unloaded, so if consent was
    // withdrawn after the trackers ran, the page also reloads without them.
    const denied = (["analytics", "marketing"] as ConsentCategory[]).filter((c) => !next[c]);
    if (denied.length) clearTrackingData(denied);
    if (denied.some((c) => previous?.[c])) window.location.reload();
  }, []);

  const ads = choice?.marketing ? "granted" : "denied";
  const scripts = (
    <>
      {choice?.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: '${ads}',
                ad_user_data: '${ads}',
                ad_personalization: '${ads}'
              });
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
      {choice?.marketing && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );

  if (!visible || isAdmin) return scripts;

  return (
    <>
      {scripts}
      {/* The drop shadow sits on this wrapper because the card's clip-path
          would cut a box-shadow off. */}
      <div className="fixed inset-x-3 bottom-3 z-[80] [filter:drop-shadow(0_18px_40px_rgba(27,26,23,0.22))] motion-safe:animate-fade-in sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[420px]">
        <section
          aria-labelledby={titleId}
          className="cut-btn [--cut:16px] [--cut-line:rgba(27,26,23,0.12)] bg-paper-white p-5 text-ink sm:p-6"
        >
          <h2
            id={titleId}
            ref={headingRef}
            tabIndex={-1}
            className="text-lg font-medium tracking-[-0.03em] outline-none"
          >
            {manage ? "Cookie settings" : "Cookies on this site"}
          </h2>

          {!manage ? (
            <>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                We&apos;d like to use cookies to see how the site is used and to measure our advertising.
                They stay off unless you accept, and you can change your mind at any time.{" "}
                <a href="/cookie-policy" className="font-medium text-ember-deep underline underline-offset-2">
                  Cookie policy
                </a>
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <button type="button" onClick={() => decide(ALL)} className={BTN_EMBER}>
                  Accept all
                </button>
                <button type="button" onClick={() => decide(NONE)} className={BTN_OUTLINE}>
                  Reject all
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  setDraft(choice ?? NONE);
                  setManage(true);
                }}
                className={`mt-4 ${LINK}`}
              >
                Choose which cookies
              </button>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Pick what you&apos;re happy with. You can come back here from &ldquo;Cookie settings&rdquo; at the
                bottom of any page.
              </p>
              <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                <ConsentRow
                  title="Essential"
                  description="Remembers the choice you make here."
                />
                <ConsentRow
                  title="Analytics"
                  description="Google Analytics and our own visitor statistics: which pages are visited, how people find us and how long they stay."
                  checked={draft.analytics}
                  onChange={(on) => setDraft((d) => ({ ...d, analytics: on }))}
                />
                <ConsentRow
                  title="Marketing"
                  description="The Meta (Facebook and Instagram) pixel, which shows us whether our ads bring people to the site."
                  checked={draft.marketing}
                  onChange={(on) => setDraft((d) => ({ ...d, marketing: on }))}
                />
              </ul>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <button type="button" onClick={() => decide(draft)} className={BTN_INK}>
                  Save choices
                </button>
                <button type="button" onClick={() => decide(ALL)} className={BTN_EMBER}>
                  Accept all
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <a href="/cookie-policy" className={LINK}>
                  Cookie policy
                </a>
                {choice ? (
                  <button type="button" onClick={() => setVisible(false)} className={LINK}>
                    Close
                  </button>
                ) : (
                  <button type="button" onClick={() => setManage(false)} className={LINK}>
                    Back
                  </button>
                )}
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}

function ConsentRow({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked?: boolean;
  onChange?: (on: boolean) => void;
}) {
  const labelId = useId();
  const locked = !onChange;
  return (
    <li className="flex items-start justify-between gap-4 py-3">
      <div className="min-w-0">
        <p id={labelId} className="text-sm font-semibold text-ink">
          {title}
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-ink-mute">{description}</p>
      </div>
      {locked ? (
        <span className="shrink-0 pt-0.5 text-xs font-semibold text-ink-soft">Always on</span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-labelledby={labelId}
          onClick={() => onChange(!checked)}
          className={`cut-btn [--cut:4px] [--cut-focus:#1B1A17] mt-0.5 h-6 w-11 shrink-0 transition-colors ${
            checked ? "bg-ember" : "bg-ink/20"
          }`}
        >
          <span
            aria-hidden="true"
            className={`absolute left-0 top-1 h-4 w-4 bg-paper-white transition-transform motion-reduce:transition-none ${
              checked ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      )}
    </li>
  );
}
