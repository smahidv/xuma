"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faInstagram,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedDiv from "./AnimatedDiv";

export default function Contact() {
  return (
    <AnimatedDiv
    animationType="scale"

     className="md:flex justify-center  md:container gap-10 space-y-6 md:space-y-0  ">
					<div className="md:pt-36 md:flex  flex-col relative md:after:absolute  after:top-0 after:right-0 after:w-[1px] after:bg-dark_gray after:h-full ">
						<div className="md:relative bg-purple_taupe p-4 md:px-8 md:py-4">
							<h2 className="tracking-widest font-bold text-xl md:text-4xl uppercase mb-1 md:mb-2">
								Contact
							</h2>
							<p className="text-sm sm:text-base sm:max-w-[40ch] lg:max-w-[50ch]">
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
										className=" md:text-sm text-[0.6rem] "
									/>
								</div>
								<div>
									<FontAwesomeIcon
										icon={faFacebook}
										className="  md:text-sm text-[0.6rem] "
									/>
								</div>
								<div>
									<FontAwesomeIcon
										icon={faInstagram}
										className="  md:text-sm text-[0.6rem] "
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
					<div className="md:py-36 py-4 px-3">
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
				</AnimatedDiv>
  )
}
