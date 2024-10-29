import { delay } from "framer-motion";

export const animationVariants = {
	fadeDownLeft: {
		hidden: { transform: "translate3d(100px, -100px, 0)", opacity: 0 },
		visible: {
			transform: "translate3d(0, 0, 0)",
			opacity: 1,
			transition: { duration: 1.5, ease: [0.215, 0.61, 0.355, 1] },
		},
	},
	perspective: {
		hidden: {
			transform: "perspective(2500px) rotateX(-80deg)", // Adjust as needed
		},
		visible: {
			transform: "perspective(2500px) rotateX(0)", // Start from perspective
			transition: {
				duration: 1,
			},
		},
	},
	fadeDown: {
		hidden: { transform: "translate3d(0, -100px, 0)", opacity: 0 },
		visible: {
			transform: "translate3d(0, 0, 0)",
			opacity: 1,
			transition: {
				duration: 1,
				delay:0.2
			},
		},
	},
	rotateY3D: {
		hidden: {
			opacity: 0,
			transform: "perspective(2500px) rotateY(-100deg)", // Adjust as needed
		},
		visible: {
			opacity: 1,
			transform: "perspective(2500px) rotateY(0)", // Start from perspective
			transition: {
				duration: 1,
			},
		},
	},
	zoomInUp: {
		hidden: { opacity: 0, transform: "translate3d(0,100px,0) scale(0.6)" },
		visible: {
			opacity: 1,
			transform: "translate3d(0,0,0) scale(1)",
			transition: {
				duration: 1.2,
				ease: [0, 0, 0.58, 1], // Custom easeOut equivalent
			},
		},
	},
	fadeLeft: {
		hidden: { opacity: 0, transform: "translatex(-100px)" },
		visible: {
			opacity: 1,
			transform: "translatex(0)",
			transition: {
				duration: 0.5,
			},
		},
	},
	fadeRight: {
		hidden: { opacity: 0, transform: "translatex(100px)" },
		visible: {
			opacity: 1,
			transform: "translatex(0)",
			transition: {
				duration: 1,
			},
		},
	},
	fadeUp: {
		hidden: { opacity: 0, transform: "translatey(100px)" },
		visible: {
			opacity: 1,
			transform: "translatey(0)",
			transition: {
				duration: 1,
				delay:0.5
			},
		},
	},

};
