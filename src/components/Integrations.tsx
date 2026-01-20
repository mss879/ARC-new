"use client";

import { Package } from "lucide-react";
import { Button } from "./ui/button";

interface Integration {
  name: string;
  description: string;
  icon: JSX.Element;
  url: string;
}

// Social Media Icons as SVG components
const RedditIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-5 h-5">
    <path d="M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM184,24a8,8,0,1,1-8,8A8,8,0,0,1,184,24Zm40.13,93.78a8,8,0,0,0-3.29,10A43.58,43.58,0,0,1,224,144c0,16.53-9.59,32.27-27,44.33C178.67,201,154.17,208,128,208s-50.67-7-69-19.67C41.59,176.27,32,160.53,32,144a43.75,43.75,0,0,1,3.14-16.17,8,8,0,0,0-3.27-10A16,16,0,1,1,52.94,94.59a8,8,0,0,0,10.45,2.23l.36-.22C81.45,85.9,104.25,80,128,80h0c23.73,0,46.53,5.9,64.23,16.6l.42.25a8,8,0,0,0,10.39-2.26,16,16,0,1,1,21.07,23.19ZM88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm96-16a16,16,0,1,1-16-16A16,16,0,0,1,184,128Zm-16.93,44.25a8,8,0,0,1-3.32,10.82,76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0A8,8,0,0,1,167.07,172.25Z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-5 h-5">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-5 h-5">
    <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-5 h-5">
    <path d="M247.83,182.28a8,8,0,0,0-5.13-5.9c-.39-.14-28.95-10.88-43-49.23l19.3-7.72A8,8,0,1,0,213,104.57l-17.82,7.13A149,149,0,0,1,192,80,64,64,0,0,0,64,80a151.24,151.24,0,0,1-3.18,31.75L43,104.57A8,8,0,1,0,37,119.43l19.37,7.75a94,94,0,0,1-17.74,30.2c-12.52,14.14-25.27,19-25.36,19a8,8,0,0,0-2.77,13.36c7.1,6.67,17.67,7.71,27.88,8.72,6.31.62,12.83,1.27,16.39,3.23,3.37,1.86,6.85,6.62,10.21,11.22,5.4,7.41,11.53,15.8,21.24,18.28,9.07,2.33,18.35-.83,26.54-3.62,5.55-1.89,10.8-3.68,15.21-3.68s9.66,1.79,15.21,3.68c6.2,2.11,13,4.43,19.9,4.43a26.35,26.35,0,0,0,6.64-.81h0c9.7-2.48,15.83-10.87,21.23-18.28,3.36-4.6,6.84-9.36,10.21-11.22,3.56-2,10.08-2.61,16.39-3.23,10.21-1,20.78-2.05,27.88-8.72A8,8,0,0,0,247.83,182.28Z"></path>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-5 h-5">
    <path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-5 h-5">
    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-5 h-5">
    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" className="w-5 h-5">
    <path d="M224,112c0,22.57-7.9,43.2-22.23,58.11C188.39,184,170.25,192,152,192c-17.88,0-29.82-5.86-37.43-12l-10.78,45.82A8,8,0,0,1,96,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C122,166,131.3,176,152,176c27.53,0,56-23.94,56-64A72,72,0,1,0,73.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,224,112Z"></path>
  </svg>
);

const integrationsRow1: Integration[] = [
  {
    name: "X / Twitter",
    description: "Simplify your X (Twitter) posts with powerful automation.",
    icon: <TwitterIcon />,
    url: "https://x.com/home",
  },
  {
    name: "Facebook",
    description: "Handle your Facebook posts and updates with ease.",
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/",
  },
  {
    name: "Reddit",
    description: "Seamless social media management with Reddit integration.",
    icon: <RedditIcon />,
    url: "https://www.reddit.com/",
  },
];

const integrationsRow2: Integration[] = [
  {
    name: "TikTok",
    description: "Boost your TikTok presence with streamlined management.",
    icon: <TikTokIcon />,
    url: "https://www.tiktok.com/",
  },
  {
    name: "Instagram",
    description: "Schedule and manage Instagram content in one place.",
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/",
  },
  {
    name: "LinkedIn",
    description: "Professional LinkedIn management at your fingertips.",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/feed/",
  },
  {
    name: "Pinterest",
    description: "Organize and post to Pinterest with simple integration.",
    icon: <PinterestIcon />,
    url: "https://www.pinterest.com/",
  },
  {
    name: "Snapchat",
    description: "Manage your Snapchat account effortlessly with our tools.",
    icon: <SnapchatIcon />,
    url: "https://www.snapchat.com/",
  },
];

const IntegrationCard = ({ integration }: { integration: Integration }) => {
  return (
    <a
      href={integration.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-shrink-0 w-[220px] h-[190px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50"
    >
      <div className="absolute inset-0 p-4 flex flex-col">
        {/* Top right arrow */}
        <div className="absolute top-3 right-3 w-4 h-4 opacity-30 text-gray-500 group-hover:opacity-50 transition-opacity">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Icon */}
        <div className="mb-auto">
          <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-white">
            {integration.icon}
          </div>
        </div>

        {/* Text content */}
        <div className="mt-3">
          <h3 className="text-base font-semibold mb-1.5 text-white">{integration.name}</h3>
          <p className="text-xs text-gray-400 leading-relaxed">{integration.description}</p>
        </div>
      </div>
    </a>
  );
};

const Integrations = () => {
  return (
    <section className="relative w-full py-12 lg:py-10 overflow-hidden bg-black" id="integrations-section">
      <div className="container mx-auto px-12">
        {/* Header */}
        <div className="mb-12">
          {/* Text content */}
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            {/* Badge */}
            

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              AI Integration with the tools that You Love using everyday
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
              Easily connect all your favorite apps and tools to seamlessly streamline your workflow without any hassle or extra work.
            </p>
          </div>
        </div>

        {/* Integration cards - Row 1 */}
        <div className="relative mb-4">
          <div
            className="flex gap-4 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <div className="flex gap-4 animate-scroll-left">
              {[...integrationsRow1, ...integrationsRow1, ...integrationsRow1].map((integration, index) => (
                <IntegrationCard key={`row1-${index}`} integration={integration} />
              ))}
            </div>
          </div>
        </div>

        {/* Integration cards - Row 2 */}
        <div className="relative">
          <div
            className="flex gap-4 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <div className="flex gap-4 animate-scroll-right">
              {[...integrationsRow2, ...integrationsRow2, ...integrationsRow2].map((integration, index) => (
                <IntegrationCard key={`row2-${index}`} integration={integration} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

