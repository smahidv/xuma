"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faInstagram,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedDiv from "./AnimatedDiv";

export default function Contact() {
	return (
	
		<div className="   bg-hero-contact bg-cover bg-center">
				<AnimatedDiv animationType="zoomInUp">
			<div className="grid justify-center py-12 px-3">
			<h2 className="uppercase font-black text-xl lg:text-4xl  mb-2 ">
				Contact us
				<span className="block">
					for <span className="text-crayola">more</span> information!
				</span>
			</h2>
			<p className=" sm:max-w-[40ch] lg:max-w-[50ch] lg:text-xl">
				We pride ourselves on creating a friendly atmosphere and encouraging
				community spirit.
			</p>
		
			<form action="" className="grid mt-6 ">
				<input
					type="text"
					name=""
					id=""
					placeholder="first name"
					className="p-2 bg-black placeholder:text-white placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs outline-none border-b-[1.5px] border-b-dark_gray focus:border-b-light_gray md:mb-8 mb-4"
				/>
				<input
					type="email"
					name=""
					id=""
					placeholder="email"
					className="p-2 bg-black placeholder:text-white placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs outline-none border-b-[1.5px] border-b-dark_gray focus:border-b-light_gray md:mb-8 mb-4"
				/>
				<textarea
					name=""
					id=""
					cols={10}
					rows={5}
					placeholder="tell us a little you need"
					className="md:p-4 p-2 bg-black placeholder:text-white placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs outline outline-[1.5px] outline-dark_gray focus:outline-light_gray"
				></textarea>
				<button
					type="submit"
					className="hover:opacity-95 bg-crayola text-black font-bold text-sm px-6 py-2 justify-self-end w-fit uppercase tracking-widest"
				>
					submit
				</button>
			</form>
		
			</div>
			</AnimatedDiv>
		</div>
	
	);
}
