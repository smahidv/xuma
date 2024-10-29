"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import symbol from "@/public/images/symbol.png";
import spaces from "@/public/images/spaces.jpg";
import activities from "@/public/images/activities.jpg";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AnimatedDiv from "./AnimatedDiv";
export default function Activities() {
	return (
		<section className="my-12 mt-24 container grid md:grid-cols-2 gap-y-4 md:gap-x-10  ">
			<div className="relative">
			<AnimatedDiv animationType="rotateY3D" >
				<div className="w-full">
					<Image
						src={activities}
						placeholder="blur"
						alt="discover our activities"
					/>
				</div>
				<div className="absolute top-0 left-0  w-0 h-0 border-r-[100px]  border-r-transparent border-b-[100px]  border-b-transparent border-t-[100px]  border-t-crayola "></div>
				<div className="absolute left-1/2 top-1/2 text-lg  -translate-x-1/2 font-black md:text-3xl uppercase whitespace-nowrap">
					Our activities
				</div>
				<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-between items-center w-[90%] ">
					<div className="w-4 md:w-10">
						<Image src={symbol} alt="xuma symbom" />
					</div>
					<div className="center group">
						<Link href="#">
							<span className="font-bold md:text-lg">Discover</span>
							<FontAwesomeIcon
								icon={faArrowRight}
								className="text-white size-10 group-hover:animate-arrow "
							/>
						</Link>
					</div>
				</div>
			</AnimatedDiv>
			</div>
			<div className="relative">
			<AnimatedDiv  animationType="rotateY3D">
				<div className="w-full">
					<Image src={spaces} alt="discover our spaces" placeholder="blur" />
				</div>
				<div className="absolute top-0 left-0  w-0 h-0 border-r-[100px]  border-r-transparent border-b-[100px]  border-b-transparent border-t-[100px]  border-t-crayola "></div>
				<div className="absolute left-1/2 top-1/2 text-lg -translate-x-1/2 font-black md:text-3xl uppercase whitespace-nowrap">
					Our spaces
				</div>
				<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-between items-center w-[90%] ">
					<div className="w-4 md:w-10">
						<Image src={symbol} alt="xuma symbom" />
					</div>
					<div className="center group">
						<Link href="#">
							<span className="font-bold md:text-lg">Discover</span>
							<FontAwesomeIcon
								icon={faArrowRight}
								className="text-white size-10 group-hover:animate-arrow"
							/>
						</Link>
					</div>
				</div>
			</AnimatedDiv>
			</div>
		</section>
	);
}
