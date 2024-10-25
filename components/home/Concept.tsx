"use client";
import Image from "next/image";
import girlGym from "@/public/images/girlGym.png";
import PinkCircle from "@/components/home/PinkCircle";
import AnimatedDiv from "./AnimatedDiv";

export default function Concept() {
	return (
			<div className=" mt-12 grid lg:grid-flow-col ">
				<div>
					<div className="uppercase font-black text-3xl w-fit mx-auto my-4 lg:text-7xl lg:w-full text-shadow text-black">
						Distinct
					</div>
					<AnimatedDiv
                     animationType="perspective"
                     className=" lg:relative lg:z-10  bg-purple_taupe py-4 pb-6 px-4 grid place-items-center lg:w-fit lg:py-10 lg:pb-14 lg:px-16">
						<h3 className="font-black mb-[20px] uppercase lg:text-3xl lg:justify-self-start">
							Customer experience
						</h3>
						<p className="text-xs lg:text-base text-start lg:max-w-[60ch] max-w-[80ch] ">
							For each club in the network, Xuma benefits from exceptional
							facilities, allowing it to offer members more than 10 training
							areas, hundreds of machines, and sports equipment tailored to each
							individual's needs. And because every member deserves
							encouragement to push their limits and achieve their fitness
							goals, Xuma provides a team of certified and experienced
							professionals to support you during your training. Their mission
							is to help every Xuma athlete become a fully accomplished member
							in their sporting journey.
						</p>
					</AnimatedDiv>
				</div>
				<div className="lg:grid -order-1 lg:order-1">
					<div className="uppercase font-black text-3xl w-fit mx-auto my-4 lg:text-7xl lg:justify-self-end lg:mx-0  text-shadow text-black">
						Different
					</div>
					<AnimatedDiv 
                      animationType="fadeInLeft"
                     className="relative w-full lg:-order-1 ">
						<PinkCircle className="right-5 -top-5 sm:-top-10 sm:right-10" />
						<Image
							placeholder="blur"
							src={girlGym}
							alt="women gym"
							width={716}
							height={409}
						/>
					</AnimatedDiv>
				</div>
			</div>

	);
}
