import { useRef, FC, ReactNode, useEffect, useState } from "react";
import { useInView, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { animationVariants } from "@/motion/AnimationList";



type AnimationType = keyof typeof animationVariants;

interface AnimatedDivProps {
	children: ReactNode;
	animationType?: AnimationType;
  once?: boolean

}

const AnimatedDiv: FC<AnimatedDivProps> = ({
	children,
	animationType = "fadeDownLeft",


}) => {
	const ref = useRef<HTMLDivElement | null>(null);

	
	const isInView = useInView(ref, { amount:0.4});
	const selectedVariant = animationVariants[animationType];
	return (
		<div 
		ref={ref}
		 >
			<motion.div
				initial="hidden"
				animate={isInView && "visible"}
				variants={selectedVariant}
			
			>
				{children}
			</motion.div>
		</div>
	);
};

export default AnimatedDiv;
