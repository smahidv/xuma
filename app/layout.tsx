import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ActivityOverlayProvider} from '@/hooks/ActivityOverlayContext';
import ManageOverlayState from "./utils/ManageOverlayState";


config.autoAddCss = false;

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   
      <html lang="en">
        <body className={`${avenir.variable} font-avenir relative`}>
        <ActivityOverlayProvider>
        <ManageOverlayState>
          {children}
          </ManageOverlayState>
          </ActivityOverlayProvider>
        </body>
      </html>
   
  );
}



