import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Xuma",
  description: "FITNESS · Cardio-Training · MMA · BOxing · Kickboxing · BODYBUILDING · FITNESS · Cardio-Training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        {children}
      </body>
    </html>
  );
}
