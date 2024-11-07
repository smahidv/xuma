"use client";
import Image , { StaticImageData } from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import CostomPagination from "./CostomPagination";

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
	const [activeSlide, setActiveSlide] = useState(0);

	return (
	
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			 
			effect="coverflow"
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}}
			onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			modules={[Autoplay, EffectCoverflow, Navigation]}
		>
			{slidesContent.map((item, index) => (
				<SwiperSlide key={index}>
					<div className="relative bg-black grid gap-4 md:grid-cols-2">
						<h2 className="font-black text-xl  lg:text-4xl uppercase  md:relative top-[5%] lg:top-[10%] xl:top-[20%] 2xl:top-[27%]">
							{item.title}
						</h2>
						<div className="  bg-dark_gray rounded-2xl p-6 md:p-4 lg:p-6 order-2 mt-4 md:my-0 md:absolute md:bottom-[5%] lg:bottom-[10%]  xl:bottom-[20%] 2xl:bottom-[27%]">
							<h3 className="uppercase font-black mb-1 lg:text-xl">we offer</h3>
							<p className="text-xs md:text-sm md:max-w-[40ch] 2xl:max-w-full">
								{item.description}
							</p>
							<Link
								href="/subscribe"
								className=" group  mt-4 pl-btn-sm-x pr-2 py-[0.2rem] md:pl-4 md:py-1 w-fit bg-white rounded-full flex gap-4 items-center"
							>
								<span className="text-black text-xs md:text-base font-bold">
									Sign up
								</span>
								<div className="group-hover:animate-arrow transition-transform duration-500 md:size-6 flex items-center justify-center rounded-full bg-crayola size-4">
									<FontAwesomeIcon
										icon={faArrowRight}
										className="text-black md:size-4 size-2"
									/>
								</div>
							</Link>
						</div>
						<div className="relative order-1  ">
							<Image
								src={item.image}
								alt={item.alt}
								width={800}
								height={534}
								placeholder="blur"
								className="object-cover rounded-2x"
							/>
							<div className="absolute z-10 bg-gradient-to-r from-black/85 to-black/20 size-full inset-0"></div>
						</div>
					</div>
				</SwiperSlide>
			))}
			<CostomPagination
				activeSlide={activeSlide}
				totalSlide={slidesContent.length}
			/>
		</Swiper>
	
	);
};

export default SlidesFonctions;
