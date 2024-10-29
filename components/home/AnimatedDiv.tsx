import { useRef, FC, ReactNode, useEffect, useState } from "react";
import { useInView } from "framer-motion";
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
	const [scrollDirection, setScrollDirection] = useState<"down" | "up" | undefined>();
  
	useEffect(() => {
	  let lastScrollY = window.scrollY;
  
	  const updateScrollDirection = () => {
		const currentScrollY = window.scrollY;
  
		setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");

		lastScrollY = currentScrollY;
	  };
  
	  window.addEventListener("scroll", updateScrollDirection);
 
  
	  return () => window.removeEventListener("scroll", updateScrollDirection);
	}, []);

	

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
