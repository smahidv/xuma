import {  useRef, FC, ReactNode } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { animationVariants } from "@/motion/AnimationList";


type AnimationType = keyof typeof animationVariants;

interface AnimatedDivProps {
  children: ReactNode;
  animationType?: AnimationType;
  className: string
}

const AnimatedDiv: FC<AnimatedDivProps> = ({
  children,
  animationType = "fadeInLeft",
  className
}) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false, amount: 0.2 });
  const selectedVariant = animationVariants[animationType];
  return (
    <motion.div 
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    exit="hidden"
    variants={selectedVariant}
    className={className}
        >
          {children}
    </motion.div>
  );
};

export default AnimatedDiv;