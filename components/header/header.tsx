"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CircleChevronRight } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


function ForYouMenuList() {return (
  <ul className="hoverMenu block">
    <li className="menuHeroIntro hidden lg:block">
      <NavigationMenuItem className="hidden lg:block">
        <NavigationMenuLink asChild >
          <Link className="hidden lg:block" href="/for-you">
            <h2>Für wen wir Ebliq geschaffen haben?</h2>
            <p>Spezialisierte KI-Helfer, die Ihren Alltag einfacher, sicherer und effizienter machen.</p>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </li>
    <li className="menuHeroItem">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link className="flex justify-between items-center" href="/for-you/doctors">
            <div>
              <h3 className="">für Ärzt:innen</h3>
              <p className="hidden lg:block">Mehr Zeit für Patient:innen</p>
            </div>
            <CircleChevronRight strokeWidth="1" className="w-[40px] h-[40px] text-primary hidden lg:block"/>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </li>
    <li className="menuHeroItem">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link className="flex justify-between items-center" href="/for-you/midwifes">
            <div>
              <h3>für Hebammen</h3>
              <p className="hidden lg:block">Mobile Betreuung ohne Papierkram</p>
            </div>
            <CircleChevronRight strokeWidth="1" className="w-[40px] h-[40px] text-primary hidden lg:block"/>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </li>
    <li className="menuHeroItem">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link className="flex justify-between items-center" href="/for-you/officeteams">
            <div>
              <h3>für Praxisteams</h3>
              <p className="hidden lg:block">Weniger Klicks, mehr erledigt</p>
            </div>
            <CircleChevronRight strokeWidth="1" className="w-[40px] h-[40px] text-primary hidden lg:block"/>
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </li>
  </ul>
);}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };


  return (
    <header className="navbar left-0 top-0 z-50 w-full bg-white dark:border-stroke-dark dark:bg-black sticky shadow-md shadow-violoet-800 z-10;">
      <div className="container relative max-w-[1400px]">
        <div className="flex items-center justify-between">
          <Link className="block py-4 lg:py-0 flex items-center gap-2" href="/">
            <Image
              alt="Logo"
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              className="w-[35px] md:w-[50px]"
              src="/logo.svg"
              style={{
                color: "transparent",
              }}
            />
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary pl-4">
              Ebliq
              <div className="text-xs md:text-sm lg:text-base text-black font-light">KI für den Praxisalltag</div>
          </div>
          </Link>
          
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
            <nav className="fixed left-0 top-0 z-[999] flex h-screen w-full lg:items-center lg:justify-center bg-white lg:text-center bg-opacity-90 backdrop-blur-sm dark:bg-black dark:bg-opacity-95 lg:static lg:h-auto lg:w-max lg:bg-transparent lg:bg-opacity-100 lg:backdrop-blur-0 lg:backdrop-blur-none lg:dark:bg-transparent dark:lg:bg-opacity-100">

              <NavigationMenu className="ml-12">
                <NavigationMenuList className="items-start lg:items-center flex-col space-y-3 lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 xl:space-x-10">

                  <NavigationMenuItem className="menu-item lg:hidden pl-1">
                    <NavigationMenuLink asChild>
                      <Link href="/">Start</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="menu-item">
                    <NavigationMenuLink asChild>
                      <Link href="/features">Features</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="menu-item hidden lg:block" >
                    <NavigationMenuTrigger className="hover:bg-transparent hover:text-accent-foreground focus:bg-transparent focus:text-foreground focus:outline-none data-[state=open]:text-foreground data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary data-[state=open]:border-accent data-[state=open]:border-solid">
                      <a href="/for-you">Für Sie</a>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      <NavigationMenuIndicator className="hidden lg:block" />
                      <ForYouMenuList />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <li className="menu-item lg:hidden">
                    <a href="/for-you">Für Sie:</a>
                    <ForYouMenuList />
                  </li>

                  <NavigationMenuItem className="menu-item">
                    <NavigationMenuLink asChild>
                      <Link href="/pricing">Preise</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="menu-item">
                    <NavigationMenuLink asChild>
                      <Link href="/about-us">Über uns</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>

              {/*              
              <ul className="items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10">

                <li className="menu-item">
                  <Link
                    href="/#features"
                    onClick={handleLinkClick}
                  >
                    Features
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href="/about-us"
                    onClick={handleLinkClick}
                  >
                    Über uns
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href="/privacy"
                    onClick={handleLinkClick}
                  >
                    Datenschutz
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href="/pricing"
                    onClick={handleLinkClick}
                  >
                    Preise
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href="/blog"
                    onClick={handleLinkClick}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
              */}
            </nav>
          </div>
          <div className="mr-[60px] flex items-center justify-end lg:mr-0">
            <Link
              className="button"
              target="_blank"
              href="https://app.Ebliq.de/sign-in?redirect_url=https%3A%2F%2Fapp.Ebliq.de%2F"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
