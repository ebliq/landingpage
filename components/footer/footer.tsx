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
    <footer className="w-full bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Link className="block max-w-[50px] sm:max-w-[50px]" href="/">
                <Image
                  alt="Logo"
                  width="50"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="block dark:hidden"
                  src="/logo.svg"
                  style={{
                    color: "transparent",
                  }}
                />
                <Image
                  alt="Logo"
                  width="50"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="hidden dark:block"
                  src="/logo.svg"
                  style={{
                    color: "transparent",
                  }}
                />
              </Link>
              <span className="text-4xl font-bold pl-4">eBliq</span>
            </div>
            <p className="text-muted-foreground">
              Mit KI-gestützter Analyse bringt unsere App Effizienz in jede
              Praxis: Schnelle Anamnese, lückenlose Dokumentation, optimale
              Patientenversorgung.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-4">
            <h3 className="text-muted-foreground">Home</h3>
            <ul className="space-y-2">
              <li className="">
                <Link href="/">
                  Features
                </Link>
              </li>
              <li className="hover:opacity-80">
                <Link href="/about-us">
                  Über uns
                </Link>
              </li>
              <li className="hover:opacity-80">
                <Link href="/privacy">
                  Datenschutz
                </Link>
              </li>
              <li className="hover:opacity-80">
                <Link href="/pricing">
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
      <div className="text-primary-foreground">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-sm text-gray-100 font-thin">©2025 oseven GmbH. All rights reserved</div>

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
              <Link href="/impressum" className="text-sm text-gray-100 font-thin">
                Impressum
              </Link>
              {/* <Link href="/impressum" className="hover:opacity-80">
                Geschäftsbedingungen
              </Link> */}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 text-gray-100 bg-white/20 hover:bg-white/50 rounded-full transition-colors"
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
