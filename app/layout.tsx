import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
// import { GoogleAnalytics } from "@next/third-parties/google";
import { PostHogProvider } from "@/components/PostHogProvider";

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

// Outfit lokal für Headlines / Branding
const outfit = localFont({
  src: [
    {
      path: "../public/assets/typo/outfit-v15-latin_latin-ext-300.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/typo/outfit-v15-latin_latin-ext-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/typo/outfit-v15-latin_latin-ext-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ebliq Healthcare App",
  description:
    "Für mehr Effizienz im Praxisalltag: Unsere Gesundheits-App vereint KI und benutzerfreundliches Design, damit Ärzte sofort starten können",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`scroll-smooth ${outfit.variable}`}
    >
      {/* <GoogleAnalytics gaId="G-BE6TC9HB85" /> */}
      <PostHogProvider>
        <body
          className={`bg-background text-foreground font-sans antialiased`}
        >
          <Header />
          <main className="min-h-screen w-full bg-gradient-to-b from-primary-100 to-white pt-14 lg:pt-20 ">
            {children}
          </main>
          <Footer />
        </body>
      </PostHogProvider>
    </html>
  );
}
