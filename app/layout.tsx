import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ActivityOverlayProvider } from "@/hooks/ActivityOverlayContext";
import { Footer, Header } from "@/components";
import Script from "next/script";

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
	icons: {
		icon: "/images/icon.png",
	},
	title: "Xuma",
	description:
		"FITNESS · Cardio-Training · MMA · Boxing · Kickboxing · BODYBUILDING · FITNESS · Cardio-Training.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-WWRZMM9QTC"
				/>
				<Script>
					{` window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-WWRZMM9QTC');`}
				</Script>
			</head>
			<body className={`${avenir.variable} font-avenir relative`}>
				<ActivityOverlayProvider>
					<Header />
					{children}
					<Footer />
				</ActivityOverlayProvider>
			</body>
		</html>
	);
}
