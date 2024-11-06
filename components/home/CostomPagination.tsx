"use client"

import { useSwiper } from "swiper/react";

interface CustomPaginationProps {
  activeSlide: number;
  totalSlide: number;

}
export const CostomPagination = ({activeSlide,totalSlide}:CustomPaginationProps) => {
  const swiper = useSwiper();
  const speed=800;


  return (
    <div className="flex justify-center md:justify-between items-center mt-4 md:mt-8">
					<button
						onClick={() => swiper.slidePrev(speed)}
						className={`hidden md:block bg-crayola px-4 py-1 hover:brightness-95 text-black rounded-lg font-bold ${
							activeSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
						}`}
						disabled={activeSlide === 0} // Disable if it's the first slide
					>
						Prev
					</button>
					<div className="flex gap-1">
          {Array.from({ length: totalSlide  }).map((_, index) => (
						<button
							key={index}
							onClick={() => swiper.slideToLoop(index,speed )} 
							className={`h-1 w-14 rounded-full ${
								activeSlide === index  ? "bg-crayola" : "bg-light_gray"
							}`}
						></button>
					))}
				</div>
					<button
						onClick={() => swiper.slideNext(speed)}
						className={`hidden md:block bg-crayola px-4 py-1 text-black hover:brightness-95 rounded-lg font-bold ${
							activeSlide === totalSlide - 1 
								? "opacity-50 cursor-not-allowed"
								: ""
						}`}
						disabled={activeSlide === totalSlide - 1} // Disable if it's the last slide
					>
						Next
					</button>
				</div>
  )
}
export default CostomPagination;