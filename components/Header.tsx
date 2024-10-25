"use client";
import Image from "next/image";
import React, { useState } from "react";
import xuma from "@/public/images/logo.png";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navigation from "@/components/navigation/Navigation";
import Link from "next/link";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
		if (!isMenuOpen) {
		  document.body.style.overflow = 'hidden';
		  document.body.style.height = '100vh';
		} else {
		  document.body.style.overflow = ''; 
		  document.body.style.height = '';
		}
	  }
	

	return (
		<header className="lg:px-14 md:pt-4 p-2 fixed top-0 bg-black z-30 w-full ">
			<nav className="flex justify-between items-center ">
				<Link href="/" className=" w-[90px] md:w-[110px] ">
					<Image
						src={xuma}
						alt="Logo"
						width={274}
						height={53}
						className="w-full max-w-full h-auto object-contain"
					/>
				</Link>

				<div
					className={`ul-container self-center flex justify-center overflow-auto  ${
						isMenuOpen 
							? "absolute z-20 top-0 left-0 bg-black h-screen w-full  opacity-100  transition-[opacity] duration-500 "
							: " h-0  opacity-0 lg:block lg:opacity-100 transition-[opacity] duration-1500"
					}`}
				>
					<Navigation 
					toggleMenu={toggleMenu}
					className="space-y-8 lg:space-y-0 lg:flex gap-x-4 pt-24 lg:pt-0"
					 />
				</div>
				<div className="flex md:gap-4 gap-1 items-center">
					<button className="text-sm sm:text-base rounded-full bg-crayola text-black  md:px-btn-md-x md:py-btn-md-y  px-btn-sm-x py-btn-sm-y font-black capitalize hover:shadow-crayola_shd">
						subscribe
					</button>
					<button
						className="lg:absolute right-4 z-20 top-4 lg:hidden "
						aria-label="Toggle Menu"
						onClick={toggleMenu}
					>
						{!isMenuOpen ? (
							<Bars2Icon className="w-10 text-white cursor-pointer" />
						) : (
							<XMarkIcon className="w-10  text-white cursor-pointer" />
						)}
					</button>
				</div>
			</nav>
		</header>
	);
}
