"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";
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
			loop={true}
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
						<h2 className="font-black text-xl md:text-3xl lg:text-4xl uppercase">
							{item.title}
						</h2>
						<div className=" md:max-w-[350px] md:self-end bg-dark_gray rounded-2xl p-6 order-2 mt-4 md:my-0 lg:absolute lg:bottom-0 ">
							<h3 className="uppercase font-black mb-1 md:text-xl">we offer</h3>
							<p className="text-xs md:text-sm max-w-[46ch]">
								{item.description}
							</p>
							<Link
								href="#"
								className="group hover:shadow-sm hover:shadow-gray-300  mt-4 pl-btn-sm-x pr-2 py-[0.2rem] md:pl-4 md:py-1 w-fit bg-white rounded-full flex gap-4 items-center"
							>
								<span className="text-black text-xs md:text-base font-bold">
									Sign up
								</span>
								<div className="group-hover:translate-x-1 transition-transform duration-500 md:size-6 flex items-center justify-center rounded-full bg-crayola size-4">
									<FontAwesomeIcon
										icon={faArrowRight}
										className="text-black md:size-4 size-2"
									/>
								</div>
							</Link>
						</div>
						<div className="w-full order-1 lg:min-h-[320px] ">
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
