"use client"
import React, { useRef } from "react";
import symbol from "@/public/images/symbol.png";
import Image from "next/image";
import { useInView } from "framer-motion";

interface CircleProps {
	className?: string;
}

export default function PinkCircle({ className }: CircleProps) {
	const text = "-stronger-better-faster";
	const ref = useRef(null)
	const isInView = useInView(ref)
	
	return (
		<div 
		ref={ref}
		style={{
			scale: isInView ? "none" : "0.5",
			opacity: isInView ? 1 : 0,
			transition: "all 1.2s ease-in "
		  }}
		className={` absolute shadow-crayola_sm_shd size-12  sm:size-24 rounded-full bg-purple_taupe text-black center ${className}`}>
			<div className="absolute sm:size-[3rem] size-6">
				<Image
					src={symbol}
					alt="women symbol"
					width={57}
					height={63}
					className="rounded-full object-cover"
				/>
			</div>
			<div className="uppercase font-black text-crayola ">
				{text.split("").map((char, index) => {
					const rotationAngle = index * 15.7 ;
			
					return (
						<span 
							key={index}
							style={{
								rotate:`${rotationAngle}deg`,				
							}}
						
							className="animate-rotate-text absolute top-0 sm:origin-[0_48px] origin-[0_24px] sm:text-[0.55rem] text-[0.3rem]"
						>
							{char}
						</span>
					);
				})}
			</div>
		</div>
	);
}
