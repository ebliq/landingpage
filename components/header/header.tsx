"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar left-0 top-0 z-50 w-full border-stroke bg-white dark:border-stroke-dark dark:bg-black absolute">
      <div className="container relative max-w-[1400px]">
        <div className="flex items-center justify-between">
          <div className="block py-4 lg:py-0">
            <Link className="block max-w-[34px] sm:max-w-[34px]" href="/">
              <Image
                alt="Logo"
                width="34"
                height="34"
                decoding="async"
                data-nimg="1"
                className="block dark:hidden"
                src="/logo.svg"
                style={{
                  color: "transparent",
                  width: "auto",
                  height: "auto",
                }}
              />
              <Image
                alt="Logo"
                width="34"
                height="34"
                decoding="async"
                data-nimg="1"
                className="hidden dark:block"
                src="/logo.svg"
                style={{
                  color: "transparent",
                  width: "auto",
                  height: "auto",
                }}
              />
            </Link>
          </div>
          <button
            className="navbarOpen absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden"
            aria-label="navbarOpen"
            name="navbarOpen"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
            <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
            <span className="block h-[2px] w-7 bg-black dark:bg-white"></span>
          </button>
          {/* Menu wrapper - conditionally shown/hidden on mobile */}
          <div
            className={`${
              isMenuOpen ? "" : "hidden"
            } menu-wrapper relative justify-between lg:flex`}
          >
            <button
              className="navbarClose fixed right-10 top-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden"
              name="navbarClose"
              aria-label="navbarClose"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="block h-[2px] w-7 rotate-45 bg-black dark:bg-white"></span>
              <span className="-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black dark:bg-white"></span>
            </button>
            {/* Navigation - fixed overlay on mobile, static on large screens */}
            <nav className="fixed left-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm dark:bg-black dark:bg-opacity-95 lg:static lg:h-auto lg:w-max lg:bg-transparent lg:bg-opacity-100 lg:backdrop-blur-0 lg:backdrop-blur-none lg:dark:bg-transparent dark:lg:bg-opacity-100">
              <ul className="items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10">
                <li className="menu-item">
                  <Link
                    className="lg:py-7 ud-menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary hover:text-blue-700"
                    href="/"
                    onClick={handleLinkClick}
                  >
                    Features
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="lg:py-7 ud-menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary hover:text-blue-700"
                    href="/about-us"
                    onClick={handleLinkClick}
                  >
                    Über uns
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="lg:py-7 ud-menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary hover:text-blue-700"
                    href="/privacy"
                    onClick={handleLinkClick}
                  >
                    Datenschutz
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="lg:py-7 ud-menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary hover:text-blue-700"
                    href="/pricing"
                    onClick={handleLinkClick}
                  >
                    Preise
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="lg:py-7 ud-menu-scroll inline-flex items-center text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary hover:text-blue-700"
                    href="/blog"
                    onClick={handleLinkClick}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mr-[60px] flex items-center justify-end lg:mr-0">
            <Link
              className="hidden px-6 py-[10px] text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary sm:inline-block hover:text-blue-700"
              href="https://app.ebliq.de/sign-in?redirect_url=https%3A%2F%2Fapp.ebliq.de%2F"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
