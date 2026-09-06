"use client";

import Link from "next/link";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Sidebar */}
      <div
        id="main-menu"
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] lg:w-[600px] xl:w-[700px] bg-[rgb(10,10,10)] z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto scrollbar-hide ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation menu"
        aria-hidden={!isOpen}
      >
        <nav className="min-h-full flex flex-col" aria-label="Main menu navigation">
          {/* Menu Container with Border */}
          <div className="flex-1 flex flex-col border-l border-[rgb(51,51,51)]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 lg:px-12 py-6 border-b border-[rgb(88,88,88)]">
              {/* Menu Title */}
              <div className="flex items-center gap-2">
                <div className="relative w-2 h-2">
                  <div className="w-2 h-2 rounded-full bg-[rgb(255,73,37)]"></div>
                </div>
                <span className="text-sm font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                  MENU
                </span>
              </div>
            </div>

          {/* Body - Navigation Links */}
          <div className="flex-1 px-6 lg:px-12 py-12">
            <div className="space-y-0">
              {/* Home Link - Active */}
              <Link
                href="/"
                onClick={onClose}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Home
                  </h3>
                  <div className="w-2.5 h-2.5 rounded-full bg-[rgb(255,73,37)] opacity-100"></div>
                </div>
              </Link>

              {/* Portfolio Link */}
              <Link
                href="/portfolio"
                onClick={onClose}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Portfolio
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>

              {/* Services Link */}
              <Link
                href="/services"
                onClick={onClose}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Services
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>

              {/* About Link */}
              <Link
                href="/about"
                onClick={onClose}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    About
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>

              {/* Success Stories Link */}
              <Link
                href="/success-stories"
                onClick={onClose}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Success Stories
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>

              {/* Blog Link */}
              <Link
                href="/blog"
                onClick={onClose}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Blog
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>

              {/* Careers Link */}
              <Link
                href="/careers"
                onClick={onClose}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Careers
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                onClick={onClose}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Contact
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 lg:px-12 py-8 space-y-8">
            {/* Email Section */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                (EMAIL)
              </p>
              <h3 className="text-2xl lg:text-3xl font-medium">
                <a
                  href="mailto:support@arcai.agency"
                  className="text-[rgb(255,73,37)] hover:text-[rgb(255,93,57)] transition-colors"
                  target="_blank"
                  rel="noopener"
                >
                  support@arcai.agency
                </a>
              </h3>
            </div>

            {/* WhatsApp AI Agent */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                (WHATSAPP AI AGENT)
              </p>
              <h3 className="text-2xl lg:text-3xl font-medium">
                <a
                  href="https://wa.me/94764662384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors"
                >
                  +94 76 466 2384
                </a>
              </h3>
              <p className="text-sm text-[rgb(119,119,119)]">
                Want to speak to our AI agent on WhatsApp?
              </p>
            </div>

            {/* Socials Section */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                (SOCIALS)
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-3">
                  <a
                    href="https://x.com/arc_ai_agency"
                    target="_blank"
                    rel="noopener"
                    className="group block"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-base lg:text-lg text-[rgb(202,202,202)] group-hover:text-white transition-colors">
                        X/Twitter
                      </p>
                      <div className="h-px flex-1 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/arcai_agency/"
                    target="_blank"
                    rel="noopener"
                    className="group block"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-base lg:text-lg text-[rgb(202,202,202)] group-hover:text-white transition-colors">
                        Instagram
                      </p>
                      <div className="h-px flex-1 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </a>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/company/105845719"
                    target="_blank"
                    rel="noopener"
                    className="group block"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-base lg:text-lg text-[rgb(202,202,202)] group-hover:text-white transition-colors">
                        LinkedIn
                      </p>
                      <div className="h-px flex-1 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/ARCAI.lk"
                    target="_blank"
                    rel="noopener"
                    className="group block"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-base lg:text-lg text-[rgb(202,202,202)] group-hover:text-white transition-colors">
                        Facebook
                      </p>
                      <div className="h-px flex-1 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Menu;

