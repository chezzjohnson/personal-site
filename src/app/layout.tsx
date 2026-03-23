import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Zachary — About",
    template: "Zachary — %s",
  },
  description:
    "A focused, mission-driven personal site spanning experience, writing, and apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="min-h-dvh font-sans">
        <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
          {children}
        </div>
      </body>
    </html>
  );
}
