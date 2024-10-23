import Image from "next/image";
import React from "react";
import xuma from "@/public/images/logo.png";
import Navigation from "@/components/navigation/Navigation";
import Link from "next/link";
import { contacts } from "@/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp , faInstagram , faFacebook} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
	return (
		<footer className="container ">
			<div className="flex justify-between flex-wrap gap-y-4 gap-x-2 py-8">
				<div className="self-center min-w-[150px] max-w-[200px] flex-1 ">
					<Image src={xuma} alt="logo" width={274} height={53} />
				</div>
				<div className="flex justify-center flex-grow py-4">
					<Navigation className="space-y-4" showMenuItem  />
				</div>
				<div className="space-y-4 pl-4 md:pl-8 relative before:absolute before:left-0 before:top-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-crayola before:to-purple_taupe ">
					<h2 className="font-black md:text-4xl text-3xl ">Join us!</h2>
					<p className="text-light_gray font-bold max-w-[30ch] md:max-w-[50ch]">
						If you want to get healthier and improve your body.
					</p>
					
						<button className="block group sm:inline-block w-full sm:w-fit relative  rounded-full  p-[1.2px]  bg-gradient-to-l from-crayola to-purple_taupe ">
							<div className="bg-black rounded-full w-full h-full flex justify-center items-center md:px-btn-md-x md:py-btn-md-y px-btn-sm-x py-btn-sm-y ">
								<Link href="/contact" className=" font-bold text-white group-hover:text-purple_taupe">
									Contact
								</Link>
							</div>
						</button>

						<button className="w-full sm:w-fit sm:ml-4 font-bold bg-purple_taupe capitalize md:px-btn-md-x md:py-btn-md-y  px-btn-sm-x py-btn-sm-y rounded-full hover:shadow-crayola_sm_shd">
							become a member
						</button>
				
				</div>
			</div>
			<div className=" border-r-[1px] border-white md:mr-10 mr-5 ">
				{contacts.map((item, ind) => (
					<div key={ind} className="flex gap-1 items-center">
						<FontAwesomeIcon icon={ faWhatsapp } className="size-4"/>
						<p className="font-black text-[0.9rem]">{item}</p>
					</div>
				))}
			</div>
			<div className="border-t-[1px] border-light_gray pt-3 pb-6">
				<p>Copyright © 2024 Xuma all rights reserved</p>
				<div className="flex md:gap-4 ">
				<FontAwesomeIcon icon={ faFacebook } size="lg"/>
				<FontAwesomeIcon icon={ faInstagram } size="lg"/>
				</div>
			</div>
		</footer>
	);
}
