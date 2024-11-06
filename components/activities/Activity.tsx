"use client"
import Image, { StaticImageData } from "next/image";
import AnimatedDiv from "../home/AnimatedDiv";

interface activity {
	image: StaticImageData;
	alt: string;
	title: string;
}
export default function Activity({ image, alt, title }: activity) {
	return (
		<div className="select-none ">
			{/* <AnimatedDiv animationType="scaleUpSlider"> */}
			<div className=" rounded-sm border-4 border-dark_gray hover:border-crayola ">
				<Image
					src={image}
					alt={alt}
					placeholder="blur"
					className=" h-full object-cover "
					sizes="(min-width: 1024px) 20vw, (min-width: 800px) 50vw, 100vw"
				/>
			</div>
			{/* </AnimatedDiv> */}
			<div className="font-bold  uppercase mt-2 text-center">{title}</div>
		</div>
	);
}
