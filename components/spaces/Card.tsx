"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

interface space {
	image: StaticImageData;
	alt: string;
	title: string;
	description: string;
	i: number;
	progress: MotionValue<number>;
	range: number[];
	targetScale: number;
}

export default function Card({
	title,
	description,
	alt,
	image,
	i,
	progress,
	range,
	targetScale,
}: space) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end end"],
	});
	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);
	return (
		<div
			ref={container}
			className=" pt-16  sticky top-[10vh] max-w-[1000px] mx-auto    "
		>
			<motion.div
				style={{ top: `calc(-${i + 9}vh + ${i * 40}px)`, scale }}
				className="  border-y-4 border-crayola bg-dark_gray h-[500px] md:h-[450px] px-2 md:px-8 relative flex flex-col justify-center items-center"
			>
				<div className="flex flex-col md:flex-row gap-y-6 items-center  md:gap-x-8">
					<div className=" rounded-tl-[10%] rounded-br-[10%]  rounded-tr-[30%]  rounded-bl-[30%] md:basis-[60%] sm:w-[400px] sm:mx-auto relative overflow-hidden">
						<motion.div style={{ scale: imageScale }}>
							<Image
								src={image}
								alt={alt}
								className=" object-cover"
								placeholder="blur"
								sizes="(min-width: 808px) 40vw, 100vw"
							/>
						</motion.div>
					</div>
					<div className=" md:basis-[40%] md:-order-1 ">
						<div className="flex gap-4 items-end  font-bold pb-3  ">
						<div className="md:text-6xl  text-3xl   text-crayola ">0{i + 1}</div>
						<h3 className={`  md:text-xl uppercase self-center   max-w-[16ch]   `}  >
							{title} 

						</h3>
						</div>
						
						<p className="md:text-base   text-sm text-light_gray ">
							{description}
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
