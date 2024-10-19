import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fugaz_One, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
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
      <h1
        className={`${fugaz.className} font-fugaz text-base sm:text-lg textGradient`}
      >
        Broodl
      </h1>
    </header>
  );
  const footer = <footer className="p-4 sm:p-8">footer</footer>;

  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ${inter.className} text-slate-800`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
