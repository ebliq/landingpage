import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="de">
      <GoogleAnalytics gaId="G-BE6TC9HB85" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        <main className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
