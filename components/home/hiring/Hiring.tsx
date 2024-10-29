"use client";
import Image from "next/image";
import Link from "next/link";
import megaphone from "@/public/images/megaphone.png";
import { useRef } from "react";
import {  motion, useInView } from "framer-motion";
import "./hiring.css";


export default function Hiring() {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 1 });
	return (
		<div className=" py-4  px-4  lg:py-10 lg:px-10 text-center ">
			<h2 className="font-black  sm:text-3xl md:text-4xl text-xl uppercase">
				we are hiring
			</h2>
			<div className="mb-14 mt-28  grid place-content-center ">
				<div
					ref={ref}
				 className="relative waves rounded-full border-purple_taupe border-4  size-[100px] justify-self-center  ">
					<motion.div					
						initial={{ y: 0, scale: 1 }}
						animate={
							isInView
								? {
										y: -46,
										scale: 2,

										transition: { duration: 2 },
								  }
								: {
										y: 0,
										scale: 1,

										transition: { duration: 2 },
								  }
						}

					>
						<Image
							width={464}
							height={464}
							className=" rounded-full  "
							src={megaphone}
							alt="person holding megaphone"
						/>
					</motion.div>
				</div>
			</div>
			<button className="hover:shadow-crayola_sm_shd bg-purple_taupe px-8 py-2 rounded-md w-fit  font-bold md:text-xl">
				<Link href="#">Apply</Link>
			</button>
		</div>
	);
}
