"use client";
import PinkCircle from "@/components/home/PinkCircle";
import AnimatedDiv from "./AnimatedDiv";

export default function Environement() {
	return (
		<AnimatedDiv
			animationType="fadeDown"
		>
			<div className="relative container max-w-[700px] bg-dark_gray  py-4  px-4  lg:py-10 lg:px-10">
			<h3 className="font-black mb-3 uppercase lg:text-3xl lg:justify-self-start">
				An environment
			</h3>
			<p className="text-xs lg:text-base text-start ">
				Xuma wasn’t created to be just another gym in Morocco, but a true haven
				of well-being for its members. That’s why every Xuma club features a
				welcoming lounge offering a healthy menu alongside a variety of premium
				nutritional supplements. Stores are also available for members, offering
				sports-related products and internationally renowned supplements to
				support your fitness journey.
			</p>
			<PinkCircle className="-bottom-12 -left-12 invisible lg:visible " />
			</div>			
		</AnimatedDiv>
	);
}
