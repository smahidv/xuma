import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";
import localFont from "next/font/local";


const avenir = localFont({
  src: [
    {
      path: "../public/fonts/AvenirLTStd-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/AvenirLTStd-Heavy.otf",
      weight: "700", 
      style: "normal",
    },
    {
      path: "../public/fonts/AvenirLTStd-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});

export const metadata: Metadata = {
  title: "Xuma",
  description:
    "FITNESS · Cardio-Training · MMA · Boxing · Kickboxing · BODYBUILDING · FITNESS · Cardio-Training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${avenir.variable} font-avenir `}>
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
