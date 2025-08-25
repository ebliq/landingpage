"use client";
import Image from "next/image";
import Link from "next/link";
import {
  // Facebook, Twitter, Linkedin,
  ArrowUp,
} from "lucide-react";
import { InstagramIcon } from "./instagram-icon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gradient-to-r from-blue-950 to-fuchsia-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
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
              <span className="text-xl font-semibold">eBliq</span>
            </div>
            <p className="text-muted-foreground">
              Mit KI-gestützter Analyse bringt unsere App Effizienz in jede
              Praxis: Schnelle Anamnese, lückenlose Dokumentation, optimale
              Patientenversorgung.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-4">
            <h3 className="font-semibold">Home</h3>
            <ul className="space-y-2">
              <li className="hover:opacity-80">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Features
                </Link>
              </li>
              <li className="hover:opacity-80">
                <Link
                  href="/about-us"
                  className="text-muted-foreground hover:text-primary"
                >
                  Über uns
                </Link>
              </li>
              <li className="hover:opacity-80">
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Datenschutz
                </Link>
              </li>
              <li className="hover:opacity-80">
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-primary"
                >
                  Preise
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="space-y-4">
            <h3 className="font-semibold">Über uns</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Responsible AI
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Diversity
                </Link>
              </li>
            </ul>
          </div> */}

          {/* <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Andy Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Forum
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  App Directory
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Tutorial</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  10 Leadership Styles
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Executive Summary Tips
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Prevent Team Burnout
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  What are OKRs?
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-sm">© 2025 eBliq. All rights reserved</div>

          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {/* <Link href="#" className="hover:opacity-80">
                <Facebook size={20} />
              </Link> */}
              {/* <Link href="#" className="hover:opacity-80">
                <Twitter size={20} />
              </Link> */}
              {/* <Link href="#" className="hover:opacity-80">
                <Linkedin size={20} />
              </Link> */}
              <Link
                href="https://www.instagram.com/ebliq_ai/"
                className="hover:opacity-80"
              >
                <InstagramIcon />
              </Link>
            </div>

            {/* Legal Links */}
            <div className="md:flex items-center gap-4 text-sm">
              <Link href="/impressum" className="hover:opacity-80">
                Impressum
              </Link>
              {/* <Link href="/impressum" className="hover:opacity-80">
                Geschäftsbedingungen
              </Link> */}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
