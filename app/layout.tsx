import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const opensans = Open_Sans({
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Broodl",
  description: "Track your daily mood, every day of the year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1
          className={`${fugaz.className} font-fugaz text-base sm:text-lg textGradient`}
        >
          Broodl
        </h1>
      </Link>
      <div className="items-center justify-between">Placeholder</div>
    </header>
  );
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`${fugaz.className} text-indigo-500`}>created with love</p>
    </footer>
  );

  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ${opensans.className} text-slate-800`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
