import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import leftCercle from "@/public/images/leftCercle.png";
import { sports } from "@/constants";
import symbol from "@/public/images/symbol.png";
import SlidesFonctions from "@/components/home/SlidesFonctions";
import { slidesContent } from "@/constants";
import Subscription from "@/components/home/Subscription";

import Chevron from "@/components/home/Chevron";
import Concept from "@/components/home/Concept";
import Environement from "@/components/home/Environement";
import Activities from "@/components/home/Activities";
import Contact from "@/components/home/Contact";

import Hiring from "@/components/home/hiring/Hiring";

export default function Home() {
	return (
		<div>
			<section className="relative flex md:h-[90dvh] md:pb-4 pt-4  overflow-hidden justify-center items-center  ">
				{/* Left Circle Image */}
				<div className="animate-rotate-cercle-left hidden  iPad:w-[260px]  lg:w-[300px] md:w-[200px] md:inline-flex absolute left-0 bottom-10 -translate-x-[30%] ">
					<Image
						src={leftCercle}
						alt="left cercle"
						width={887}
						height={1163}
						priority
					/>
				</div>

				{/* Text Content */}
				<div className=" flex justify-center items-center px-3 pt-[15dvh] md:p-0 z-10 lg:mt-28 ">
					<div>
						<h1 className="lg:text-6xl md:text-4xl text-3xl uppercase font-black text-center md:text-left">
							<span className="md:block">you</span>
							<span className="text-crayola"> can</span> do it
						</h1>
						<FontAwesomeIcon
							className="text-xl md:text-4xl text-crayola"
							icon={faQuoteLeft}
						/>
						<p className="text-sm text-light_gray md:py-6 py-3 lg:min-w-[80ch] max-w-[65ch]">
							"At Xuma, we believe everyone deserves access to quality
							facilities at fair prices. Our concept, designed by Moroccans for
							Moroccans, is about more than just fitness — it’s about creating a
							space where you can train, relax, and enjoy memorable moments.
							With us, you’re not just a customer; Xuma is your second home."
						</p>
						<div className="md:flex md:flex-row-reverse justify-between my-4 items-center space-y-4">
							<div className="flex gap-4 items-center justify-center rounded-full">
								<div className="w-16">
									<Image
										src="/images/owner.jpg"
										alt="owner"
										className="rounded-full"
										width={200}
										height={177}
									/>
								</div>
								<div>
									<span className="text-crayola">Lisa Manathon,</span>
									<br />
									<span>Founder</span>
								</div>
							</div>
							<button className="w-full md:w-fit font-black text-black bg-crayola capitalize md:px-btn-md-x md:py-btn-md-y  px-btn-sm-x py-btn-sm-y rounded-full hover:shadow-crayola_sm_shd">
								become a member
							</button>
						</div>
						<div className="flex justify-end">
							<FontAwesomeIcon
								className="text-xl md:text-4xl  text-crayola"
								icon={faQuoteRight}
							/>
						</div>
					</div>
				</div>

				{/* Right Circle Image */}
				<div className="animate-rotate-cercle-right hidden iPad:w-[260px]  lg:w-[300px] md:w-[200px] md:inline-flex absolute right-0  md:top-24  translate-x-[34%] scale-[-1] ">
					<Image
						src={leftCercle}
						alt="left cercle"
						width={887}
						height={1163}
						priority
					/>
				</div>
			</section>
			<section className="flex my-12 md:my-0 p-2  animate-infinite-scroll  ">
				{[...Array(2)].map((_, outerIndex) => (
					<div key={outerIndex} className="flex gap-20 bg-purple_taupe px-20">
						{sports.map((sport, id) => (
							<div key={id} className="flex items-center  gap-20  ">
								<div className="md:w-[45px] w-[25px]">
									<Image
										src={symbol}
										alt="women symbol"
										width={57}
										height={63}
									/>
								</div>
								<p className="font-black uppercase">{sport}</p>
							</div>
						))}
					</div>
				))}
			</section>
			<section className=" my-12 container">
				<div className="flex gap-2 md:gap-4 items-center md:mb-6 mb-3">
					<div className="w-[30px] md:w-[50px]">
						<Image src={symbol} alt="women symbol" width={57} height={63} />
					</div>
					<h2 className="uppercase font-black md:text-[1.7rem] text-lg ">
						concept
					</h2>
					<div className="w-[5rem] bg-crayola h-[2px]"></div>
				</div>
				<p 
			
			className="text-light_gray max-w-[48ch] ml-[38px] md:ml-[66px] ">
						At Xuma, we believe everyone deserves support no matter your skill
						level, age, or gender. We provide the tools and resources to help you
						unlock your full potential."
					</p>
				<Concept />
			</section>
			<section className="md:mt-24 my-12 bg-hero-pattern bg-bottom bg-cover   ">
				<Environement />
			</section>
			<section className="my-12 md:my-24 container lg:mt-32   ">
				<div className="flex relative mb-4">
					<Chevron className="size-8 md:size-12 text-crayola fill-current" />
					<Chevron className="absolute size-8 md:size-12 text-white fill-current left-5 md:left-10" />
				</div>
				<SlidesFonctions slidesContent={slidesContent} />
			</section>
			<Activities />
			<section className=" mt-24 sm:containe mx-[38px] ">
				<div className="flex gap-2 md:gap-4 items-center ">
					<div className="w-[30px] md:w-[50px]">
						<Image src={symbol} alt="women symbol" width={57} height={63} />
					</div>
					<h2 className="uppercase font-black md:text-[1.7rem] text-lg">
						Subscription
					</h2>
					<div className="w-[5rem] bg-crayola h-[2px]"></div>
				</div>
				<Subscription />
			</section>
			<section className="my-12 container ">
			<Hiring/>
			</section> 
			<section className="pb-12 mt-12 md:mt-0">
				<Contact />
			</section>
			<section className="container my-16 xs:flex justify-center   ">
				<div className=" text-center">
					<h2 className="font-black  sm:text-3xl md:text-4xl text-xl">
						Subscribe to our newsletter
					</h2>
					<p className="sm:text-xl text-xs py-[10px] ">
						Register now to stay informed about the opening
					</p>
					<div className="xs:flex justify-center  gap-4">
						<input
							type="email"
							name=""
							id=""
							className="outline-none px-2 py-1 md:px-6 md:py-3 rounded-sm text-black  w-full placeholder:text-sm placeholder:md:text-base "
							placeholder="E-mail"
						/>
						<div className="pt-6 xs:pt-0 ">
							<button
								type="button"
								className="px-btn-x py-btn-y bg-crayola text-black rounded-sm font-black h-full"
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
