export const animationVariants = {
	fadeInLeft: {
		hidden: { y: -50, x: 50, opacity: 0 },
		visible: { y: 0, x: 0, opacity: 1, transition: { duration: 0.5 } },
	},
	perspective: {
		hidden: {
			transform: "perspective(2500px) rotateX(-80deg)", // Adjust as needed
		},
		visible: {
			transform: "perspective(2500px) rotateX(0)", // Start from perspective
			transition: {
				duration: 1.5,
			},
		},
	},
    fromTop: {
        hidden: { y: -50 },
		visible: { y: 0 ,transition: { duration: 0.5 } },
    },
    rotateY3D: {
		hidden: {
			transform: "perspective(2500px) rotateY(-100deg)", // Adjust as needed
		},
		visible: {
			transform: "perspective(2500px) rotateY(0)", // Start from perspective
			transition: {
				duration: 1,
			},
		},
	},
    scale: {
        hidden: { scale:0.2},
		visible: { scale:1, transition: { duration: 1 } },
	},
                    
	
};
