import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-bg pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            {/* <div className="w-6 h-6 rounded bg-accent flex items-center justify-center text-xs font-bold text-bg">L</div> */}
            <span className="text-lg font-bold text-text-h tracking-tight">
              LedgerFlow
            </span>
          </div>
          <p className="text-text/60 text-sm">
            Precision finance tools for the modern web builder. Built to give
            you back your hours.
          </p>
        </div>

        <div>
          <h3 className="text-accent text-sm font-semibold mb-6 uppercase tracking-wider">
            Platform
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-text/80">
            <li>
              <a href="#" className="hover:text-text-h transition-colors">
                Integration API
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-text-h transition-colors">
                Invoicing Tools
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-text-h transition-colors">
                E-Commerce
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-accent text-sm font-semibold mb-6 uppercase tracking-wider">
            Company
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-text/80">
            <li>
              <a href="#" className="hover:text-text-h transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-text-h transition-colors">
                Privacy & Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-text-h transition-colors">
                Legal Info
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-accent text-sm font-semibold mb-6 uppercase tracking-wider">
            Social
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.x.com/Deiveed0"
              target="_blank"
              aria-label="Twitter X Link"
              className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-text-h hover:bg-accent hover:text-bg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.github.com/DavidOG03"
              target="_blank"
              aria-label="Github Link"
              className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-text-h hover:bg-accent hover:text-bg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-text/60 pb-8 pt-8 border-t border-border/50">
        <p>© {new Date().getFullYear()} LedgerFlow Inc. All rights reserved.</p>
        <p>
          Made with <span className="text-accent">♥</span> by{" "}
          <a
            href="https://david-og.vercel.app"
            target="_blank"
            className="hover:text-text-h transition-colors underline"
          >
            David OG
          </a>
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-text-h transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-text-h transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
