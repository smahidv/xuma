"use client";
import Card from "@/components/spaces/Card";
import { gymSpaces } from "@/constants";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function spaces() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	useEffect(() => {
		document.body.style.overflowX = "visible";
		return () => {
			document.body.style.overflowX = "";
		};
	}, []);

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	});

	return (
		<main className="my-12   ">
			<div className="container">
			<div className=" my-24 text-center">
				<h2 className="font-black text-xl md:text-4xl">OUR SPACES</h2>
				<div className="text-crayola text-center text-sm md:text-base font-bold">
					The biggest gym in Morocco
				</div>
			</div>
			<div className="border-x-4 border-crayola px-2 py-4 md:p-6 grid text-center bg-dark_gray md:grid-cols-4 max-w-[1000px] mx-auto">
				<div className="font-bold py-2 md:py-0 leading-3">
					<div className="text-sm md:text-lg">Xuma is for </div>
					<div className="text-lg md:text-base">Everyone!</div>
				</div>
				<div className="font-bold border-y-[1px] md:border-x-[1px] md:border-y-0 border-white  py-2 md:py-0">
					<div className="text-sm  md:text-lg">Equipment </div>
					<div className="text-lg md:text-base">High quality</div>
				</div>
				<div className="font-bold border-b-[1px] md:border-r-[1px] md:border-b-0 border-white  py-2 md:py-0">
					<div className="text-sm  md:text-lg">+4000 m2 </div>
					<div className="text-lg md:text-base">Mixed space</div>
				</div>
				<div className="font-bold  py-2 md:py-0">
					<div className="text-sm  md:text-lg">+1000 m2 </div>
					<div className="text-lg md:text-base">Women-only</div>
				</div>
			</div>
			</div>
			<div ref={container} className="mb-[40vh] mt-[15vh] px-1 ">
				{gymSpaces.map((space, index) => {
					const targetScale = 1 - (gymSpaces.length - index) * 0.04;
					return (
						<Card
							key={index}
							i={index}
							{...space}
							progress={scrollYProgress}
							range={[index * 0.2, 1]}
							targetScale={targetScale}
						/>
					);
				})}
			</div>
		</main>
	);
}
