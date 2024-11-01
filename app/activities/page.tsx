"use client";
import Activity from "@/components/activities/Activity";
import { gymActivities } from "@/constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
export default function activities() {
	return (
		<main className="my-12   ">
			<div className=" my-24 text-center container">
				<h2 className="font-black text-xl md:text-4xl">OUR ACTIVITIES</h2>
				<div className="text-crayola text-center text-sm md:text-base font-bold">
					The biggest gym in Morocco
				</div>
			</div>
			<div className="border-x-4 border-crayola px-2 py-4 md:p-6 grid text-center bg-dark_gray md:grid-cols-4 max-w-[1000px] mx-auto">
				<div className="font-bold py-2 md:py-0 leading-3">
					<div className="text-sm md:text-lg">A framework </div>
					<div className="text-lg md:text-base">Quality</div>
				</div>
				<div className="font-bold border-y-[1px] md:border-x-[1px] md:border-y-0 border-white  py-2 md:py-0">
					<div className="text-sm  md:text-lg">Schedules </div>
					<div className="text-lg md:text-base">Adapted</div>
				</div>
				<div className="font-bold border-b-[1px] md:border-r-[1px] md:border-b-0 border-white  py-2 md:py-0">
					<div className="text-sm  md:text-lg">+20 </div>
					<div className="text-lg md:text-base">Activities and courses</div>
				</div>
				<div className="font-bold  py-2 md:py-0">
					<div className="text-sm  md:text-lg">+500</div>
					<div className="text-lg md:text-base">Machinery and equipment</div>
				</div>
			</div>
			<div className="flex h-screen justify-center items-center">
			<Swiper
				spaceBetween={20}
				slidesPerView={1.5}
				initialSlide={3} 
				centeredSlides={true}
				breakpoints={{
					480: {
					  slidesPerView: 2.5,
					},
					1024: {
					  slidesPerView: 3.5,
					},
				  }}

			>
				{gymActivities.map((activity, index) => (
					<SwiperSlide key={index} className="flex-grow flex-shrink-0">
						<Activity i={index} {...activity} />
					</SwiperSlide>
				))}
			</Swiper>
			</div>
		</main>
	);
}
