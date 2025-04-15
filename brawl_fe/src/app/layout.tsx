import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Setup from "./_items/Setup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "LTX Team Stats",
  description: "LTX Team Stats - Brawl Stars club & player rankings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        style={{
          backgroundColor: "#0D0D0D",
          color: "#fff",
          minHeight: "100vh",
          fontFamily: "var(--font-roboto)",
        }}
      >
        <Setup>{children}</Setup>
      </body>
    </html>
  );
}
