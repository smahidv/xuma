"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Chevron from "@/components/home/Chevron";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";

interface Slide {
	image: StaticImageData;
	alt: string;
	title: string;
	description: string;
}

interface SlidesContentProps {
	slidesContent: Slide[];
}

const SlidesFonctions = ({ slidesContent }: SlidesContentProps) => {
	const [activeSlide, setSlideIndex] = useState(0);
	const [isLargeScreen, setIsLargeScreen] = useState(false);
	const startX = useRef(0); // Track swipe start position

	// Ensure window.innerWidth is accessed only on client-side
	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const showNextSlide = () => {
		setSlideIndex((prevIndex) =>
			prevIndex === slidesContent.length - 1 ? 0 : prevIndex + 1
		);
	};

	const showPrevSlide = () => {
		setSlideIndex((prevIndex) =>
			prevIndex === 0 ? slidesContent.length - 1 : prevIndex - 1
		);
	};

	// Handle touch start event
	const handleTouchStart = (e: React.TouchEvent) => {
		startX.current = e.touches[0].clientX;
	};

	// Handle touch end event to detect swipe
	const handleTouchEnd = (e: React.TouchEvent) => {
		const endX = e.changedTouches[0].clientX;
		if (startX.current - endX > 50) {
			// Swipe left (next slide)
			showNextSlide();
		} else if (endX - startX.current > 50) {
			// Swipe right (previous slide)
			showPrevSlide();
		}
	};

	return (
		<div
			className="w-full h-full"

		>
			<div
				className="flex transition-transform duration-350 ease-in-out  "
				onTouchStart={handleTouchStart} // Register swipe start
				onTouchEnd={handleTouchEnd}     // Register swipe end
				style={{
					transform: `translateX(-${activeSlide * 100}%)`,
				}}
			>
				{slidesContent.map((item, i) => (
					<div
						key={i}
						className="relative flex-shrink-0 w-full h-full bg-black grid gap-4 md:grid-cols-2 container "
					>
						<div className="space-y-4 lg:space-y-8 xl:space-y-12">
							<div className="flex relative">
								<Chevron className="size-8 md:size-12 text-crayola fill-current" />
								<Chevron className="absolute size-8 md:size-12 text-white fill-current left-5 md:left-10" />
							</div>
							<h2 className="font-black text-xl md:text-3xl lg:text-4xl uppercase">
								{item.title}
							</h2>
						</div>
						
						<div className=" lg:ml-accordingToContainer-lg md:max-w-[350px] md:self-end bg-dark_gray rounded-2xl p-6 order-2 mt-4 md:my-0  lg:absolute lg:bottom-0">
							<h3 className="uppercase font-black mb-1 md:text-xl">we offer</h3>
							<p className="text-xs md:text-sm max-w-[46ch]">
								{item.description}
							</p>
							<Link
								href="#"
								className="mt-4 pl-btn-sm-x pr-2 py-[0.2rem] md:pl-4 md:py-1 w-fit bg-white rounded-full flex gap-4 items-center"
							>
								<span className="text-black text-xs md:text-base font-bold">
									Sign up
								</span>
								<div className="md:size-6 flex items-center justify-center rounded-full bg-crayola size-4">
									<FontAwesomeIcon
										icon={faArrowRight}
										className="text-black md:size-4 size-2"
									/>
								</div>
							</Link>
						</div>
						<div className="w-full order-1 lg:min-h-[320px]">
							<Image
								src={item.image}
								alt={item.alt}
								width={800}
								height={534}
								placeholder="blur"
								className="object-cover rounded-2xl"
							/>
						</div>
					</div>
				))}
			</div>
			<div className="flex md:justify-between justify-center md:mt-12 items-center container">
				<button
					onClick={showPrevSlide}
					className="invisible md:visible bg-crayola px-4 py-1 text-black rounded-lg font-bold"
				>
					Prev
				</button>
				<div className="flex gap-1">
					{slidesContent.map((_, index) => (
						<button
							key={index}
							onClick={() => setSlideIndex(index)}
							className={`h-1 w-14 rounded-full ${
								activeSlide === index ? "bg-crayola" : "bg-light_gray"
							}`}
						></button>
					))}
				</div>
				<button
					onClick={showNextSlide}
					className="invisible md:visible bg-crayola px-4 py-1 text-black rounded-lg font-bold"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default SlidesFonctions;
