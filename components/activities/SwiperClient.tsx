"use client";
import Activity from "@/components/activities/Activity";
import { gymActivities } from "@/constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useActivityOverlay } from "@/hooks/ActivityOverlayContext";

export default function SwiperClient() {
	const { openOverlay } = useActivityOverlay();

	return (

			<div className=" mt-[15vh]">
				<Swiper
					spaceBetween={10}
					loop={true}
					slidesPerView={2}
					centeredSlides={true}
					initialSlide={3}
					breakpoints={{
						450: {
							slidesPerView: 3,
						},
						650: {
							slidesPerView: 3.5,
							spaceBetween: 16,
						},
						1200: {
							spaceBetween:20,
							slidesPerView: 4.5,
						},
					}}
				>
					{gymActivities.map((activity, index) => (
						<SwiperSlide key={index} onClick={()=>{openOverlay(index)}} >
							<Activity  {...activity}  />						
						</SwiperSlide>
					))}
				</Swiper>
			</div>
	
	);
}
