import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import leftCercle from "@/public/images/leftCercle.png";
import { sports } from "@/constants";
import symbol from "@/public/images/symbol.png";
import girlGym from "@/public/images/girlGym.png";
import PinkCircle from "@/components/home/PinkCircle";
import SlidesFonctions from "@/components/home/SlidesFonctions";
import { slidesContent } from "@/constants";
import spaces from "@/public/images/spaces.jpg";
import activities from "@/public/images/activities.jpg";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Subscription from "@/components/home/Subscription";
import megaphone from "@/public/images/megaphone.png"
import {
	faTwitter,
	faInstagram,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	return (
		<div>
			<section className="relative flex md:h-[90dvh] md:pb-4 pt-4 px-[0.75] overflow-hidden justify-center items-center  ">
				{/* Left Circle Image */}
				<div className="hidden  iPad:w-[260px]  lg:w-[300px] md:w-[200px] md:inline-flex absolute left-0 bottom-10 -translate-x-[30%]">
					<Image
						src={leftCercle}
						alt="left cercle"
						width={887}
						height={1163}
						priority
					/>
				</div>

				{/* Text Content */}
				<div className=" flex justify-center items-center p-2 md:p-0 z-10 lg:mt-28 ">
					<div>
						<h1 className="lg:text-6xl md:text-4xl text-2xl uppercase font-black">
							you <br />
							<span className="text-crayola">can</span> do it
						</h1>
						<FontAwesomeIcon
							className="text-2xl md:text-4xl text-crayola"
							icon={faQuoteLeft}
						/>
						<p className="text-sm text-light_gray py-6 lg:min-w-[80ch] max-w-[65ch]">
							"At Xuma, we believe everyone deserves access to quality
							facilities at fair prices. Our concept, designed by Moroccans for
							Moroccans, is about more than just fitness — it’s about creating a
							space where you can train, relax, and enjoy memorable moments.
							With us, you’re not just a customer; Xuma is your second home."
						</p>
						<div className="md:flex md:flex-row-reverse justify-between items-center space-y-4">
							<button className="w-full md:w-fit font-black text-black bg-crayola capitalize md:px-btn-md-x md:py-btn-md-y  px-btn-sm-x py-btn-sm-y rounded-full hover:shadow-crayola_sm_shd">
								become a member
							</button>
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
						</div>
						<div className="flex justify-end">
							<FontAwesomeIcon
								className="text-2xl md:text-4xl  text-crayola"
								icon={faQuoteRight}
							/>
						</div>
					</div>
				</div>

				{/* Right Circle Image */}
				<div className="hidden iPad:w-[260px]  lg:w-[300px] md:w-[200px] md:inline-flex absolute right-0  md:top-24 -rotate-[4deg] translate-x-[34%] scale-[-1] ">
					<Image
						src={leftCercle}
						alt="left cercle"
						width={887}
						height={1163}
						priority
					/>
				</div>
			</section>
			<section className="flex  p-2  animate-infinite-scroll  ">
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
				<div className="flex gap-2 md:gap-4 items-center mb-6">
					<div className="w-[30px] md:w-[50px]">
						<Image src={symbol} alt="women symbol" width={57} height={63} />
					</div>
					<h2 className="uppercase font-black md:text-[1.7rem]">concept</h2>
					<div className="w-[5rem] bg-crayola h-[2px]"></div>
				</div>
				<p className="text-light_gray max-w-[48ch] ml-[45px] ">
					At Xuma, we believe everyone deserves support no matter your skill
					level, age, or gender. We provide the tools and resources to help you
					unlock your full potential."
				</p>
				<div className=" mt-12 grid lg:grid-flow-col ">
					<div>
						<div className="uppercase font-black text-2xl w-fit mx-auto my-4 lg:text-7xl lg:w-full text-shadow text-black">
							Distinct
						</div>
						<div className="lg:relative lg:z-10 lg:translate-x-[6.5vw]  bg-purple_taupe py-4 pb-6 px-4 grid place-items-center lg:w-fit lg:py-10 lg:pb-14 lg:px-10">
							<h3 className="font-black mb-3 uppercase lg:text-3xl lg:justify-self-start">
								Customer experience
							</h3>
							<p className="text-xs lg:text-base text-start lg:max-w-[60ch] max-w-[80ch] ">
								For each club in the network, Xuma benefits from exceptional
								facilities, allowing it to offer members more than 10 training
								areas, hundreds of machines, and sports equipment tailored to
								each individual's needs. And because every member deserves
								encouragement to push their limits and achieve their fitness
								goals, Xuma provides a team of certified and experienced
								professionals to support you during your training. Their mission
								is to help every Xuma athlete become a fully accomplished member
								in their sporting journey.
							</p>
						</div>
					</div>
					<div className="lg:grid -order-1 lg:order-1">
						<div className="uppercase font-black text-2xl w-fit mx-auto my-4 lg:text-7xl lg:justify-self-end lg:mx-0  text-shadow text-black">
							Different
						</div>
						<div className="relative w-full lg:-order-1 ">
							<PinkCircle className="right-5 -top-5 sm:-top-10 sm:right-10" />
							<Image src={girlGym} alt="women gym" width={716} height={409} />
						</div>
					</div>
				</div>
			</section>
			<section className="md:my-24 my-12 bg-hero-pattern bg-bottom bg-cover   ">
				<div className="relative container max-w-[700px] bg-dark_gray  py-4  px-4  lg:py-10 lg:px-10">
					<h3 className="font-black mb-3 uppercase lg:text-3xl lg:justify-self-start">
						An environment
					</h3>
					<p className="text-xs lg:text-base text-start ">
						Xuma wasn’t created to be just another gym in Morocco, but a true
						haven of well-being for its members. That’s why every Xuma club
						features a welcoming lounge offering a healthy menu alongside a
						variety of premium nutritional supplements. Stores are also
						available for members, offering sports-related products and
						internationally renowned supplements to support your fitness
						journey.
					</p>
					<PinkCircle className="-bottom-12 -left-12 invisible lg:visible " />
				</div>
			</section>
			<section className="my-12  container  ">
				<SlidesFonctions slidesContent={slidesContent} />
			</section>
			<section className="my-12 mt-24 container grid md:grid-cols-2 gap-y-4 md:gap-x-10  ">
				<div className="relative">
					<div className="w-full">
						<Image src={activities} alt="discover our activities" />
					</div>
					<div className="absolute top-0 left-0  w-0 h-0 border-r-[100px]  border-r-transparent border-b-[100px]  border-b-transparent border-t-[100px]  border-t-crayola "></div>
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 font-black md:text-3xl uppercase whitespace-nowrap">
						Our activities
					</div>
					<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-between items-center w-[90%] ">
						<div className="w-4 md:w-10">
							<Image src={symbol} alt="xuma symbom" />
						</div>
						<div className="center">
							<Link href="#">
								<span className="font-bold md:text-lg">Discover</span>
								<FontAwesomeIcon
									icon={faArrowRight}
									className="text-white size-10 "
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className="relative">
					<div className="w-full">
						<Image src={spaces} alt="discover our spaces" />
					</div>
					<div className="absolute top-0 left-0  w-0 h-0 border-r-[100px]  border-r-transparent border-b-[100px]  border-b-transparent border-t-[100px]  border-t-crayola "></div>
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 font-black md:text-3xl uppercase whitespace-nowrap">
						Our spaces
					</div>
					<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-between items-center w-[90%] ">
						<div className="w-4 md:w-10">
							<Image src={symbol} alt="xuma symbom" />
						</div>
						<div className="center">
							<Link href="#">
								<span className="font-bold md:text-lg">Discover</span>
								<FontAwesomeIcon
									icon={faArrowRight}
									className="text-white size-10 "
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className=" mt-24 container ">
				<div className="flex gap-2 md:gap-4 items-center ">
					<div className="w-[30px] md:w-[50px]">
						<Image src={symbol} alt="women symbol" width={57} height={63} />
					</div>
					<h2 className="uppercase font-black md:text-[1.7rem]">
						Subscription
					</h2>
					<div className="w-[5rem] bg-crayola h-[2px]"></div>
				</div>
				<Subscription />
			</section>
			<section className="my-24 container ">
				<div className="      py-4  px-4  lg:py-10 lg:px-10 text-center ">
					<h2 className="font-black  sm:text-3xl md:text-4xl text-xl uppercase">we are hiring</h2>
					<div className="my-28 relative grid justify-center">
						<div className="rounded-full outline-purple_taupe outline-8 outline size-[100px]  ">
						</div>
						{/* <div className="absolute   top-0 size-[200px] left-1/2 -translate-x-1/2 -translate-y-[100px]">
						<Image width={250} height={250} className="rounded-full  " src={megaphone} alt="person holding megaphone" />
						</div> */}
					</div>
					<button className="bg-purple_taupe px-12 py-3 rounded-md w-fit  font-bold md:text-xl">
						<Link href="#">Apply</Link>
					</button>
				</div>
			</section>
			<section className="pb-12 mt-12 md:mt-0">
				<div className="md:flex justify-center  md:container gap-10 space-y-6 md:space-y-0  ">
					<div className="md:pt-36 md:flex  flex-col relative md:after:absolute  after:top-0 after:right-0 after:w-[1px] after:bg-dark_gray after:h-full ">
						<div className="md:relative bg-purple_taupe p-4 md:px-8 md:py-4">
							<h2 className="tracking-widest font-bold text-lg md:text-4xl uppercase mb-1 md:mb-2">
								Contact
							</h2>
							<p className="text-xs sm:text-base sm:max-w-[40ch] lg:max-w-[50ch]">
								We pride ourselves on creating a friendly atmosphere and
								encouraging community spirit.
							</p>
							<div className="absolute top-0 -right-1 bg-white w-1 h-[30px] z-20"></div>
						</div>
						<div className="relative flex-grow h-[230px]  md:h-auto">
							<div className="pt-4 md:pt-6 md:text-lg text-sm ml-4 tracking-wider">
								xuma@gmail.com
							</div>
							<div className="absolute bottom-0 left-4 md:space-y-3">
								<div>
									<FontAwesomeIcon
										icon={faTwitter}
										className=" md:text-xs text-[0.6rem] "
									/>
								</div>
								<div>
									<FontAwesomeIcon
										icon={faFacebook}
										className="  md:text-xs text-[0.6rem] "
									/>
								</div>
								<div>
									<FontAwesomeIcon
										icon={faInstagram}
										className="  md:text-xs text-[0.6rem] "
									/>
								</div>
							</div>
							<div className="bg-dark_gray w-[1px] h-full absolute top-0 left-1/2  ">
								<div className="center absolute bottom-12">
									<div className="bg-light_gray w-[22px] h-[1.5px] -translate-x-1/2 "></div>
									<div className="text-[0.62rem] md:text-xs min-w-[50vw] md:min-w-[150px] font-bold ">
										+212 6 22 22 22 22
									</div>
								</div>
								<div className="center absolute bottom-4">
									<div className="bg-light_gray w-[22px] h-[1.5px] -translate-x-1/2 "></div>
									<div className="text-[0.62rem] md:text-xs  min-w-[50vw] md:min-w-[150px] font-bold">
										+212 6 44 44 44 44
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="md:py-36 py-4 px-[0.75]">
						<h3 className="uppercase tracking-wider   font-black  md:text-xl mb-4 md:mb-8">
							Get in touch for details!
						</h3>
						<form action="" className="grid ">
							<input
								type="text"
								name=""
								id=""
								placeholder="first name"
								className="bg-black placeholder:text-white placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs outline-none border-b-[1.5px] border-b-dark_gray focus:border-b-light_gray md:mb-8 mb-4"
							/>
							<input
								type="email"
								name=""
								id=""
								placeholder="email"
								className="bg-black placeholder:text-white placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-xs outline-none border-b-[1.5px] border-b-dark_gray focus:border-b-light_gray md:mb-8 mb-4"
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
								className="bg-purple_taupe text-sm px-6 py-2 justify-self-end w-fit uppercase tracking-widest"
							>
								submit
							</button>
						</form>
					</div>
				</div>
			</section>
			<section className="container my-16 xs:flex justify-center items-center   ">
				<div className=" text-center">
					<h2 className="font-black  sm:text-3xl md:text-4xl text-xl">
						Subscribe to our newsletter
					</h2>
					<p className="sm:text-xl text-xs pt-[10px] pb-[7px]">Register now to stay informed about the opening</p>
					<div className="xs:flex justify-center items-center gap-4">
						<input
							type="email"
							name=""
							id=""
							className="outline-none px-2 py-1 md:px-6 md:py-3 rounded-md text-black  w-full placeholder:text-sm placeholder:md:text-base "
							placeholder="E-mail"
						/>
						<div className="pt-[7px] xs:pt-0">
						<button
							type="button"
							className="px-2 py-1 md:px-6 md:py-3 bg-crayola text-black rounded-md font-black"
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
