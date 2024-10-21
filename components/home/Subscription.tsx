"use client";
import React, { useState } from "react";
import { pricing } from "@/constants";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";


const Subscription = () => {
	const [activePlan, setActivePlan] = useState("monthly");

	const toggleButton = (plan: "monthly" | "annually") => setActivePlan(plan);

	return (
		<div>
			<div className="center md:mb-24 my-6 ">
				<div
					className={`rounded-full    from-crayola to-purple_taupe p-[1.5px]  sm:h-[52px] h-[39px]  ${
						activePlan === "monthly" ? "bg-gradient-to-tr" : "bg-gradient-to-tl"
					}`}
				>
					<div
						className={`rounded-full center gap-6 bg-black w-full h-full  ${
							activePlan === "monthly" ? "pl-1 pr-4" : "pl-4 pr-1"
						}`}
					>
						<button
							type="button"
							onClick={() => toggleButton("monthly")}
							className={`font-bold rounded-full text-sm sm:text-base transition-colors  ${
								activePlan === "monthly"
									? "sm:py-2.5 py-1.5 sm:px-4 px-2 bg-purple_taupe "
									: ""
							}`}
						>
							Monthly
						</button>
						<button
							type="button"
							onClick={() => toggleButton("annually")}
							className={`font-bold rounded-full text-sm sm:text-base ${
								activePlan === "annually"
									? "sm:py-2.5 py-1.5 sm:px-4 px-2 bg-purple_taupe"
									: ""
							}`}
						>
							Annually
						</button>
					</div>
				</div>
			</div>
			<div className="space-y-4 md:space-y-8 lg:space-y-0 lg:flex lg:justify-center lg:gap-y-6 lg:gap-x-8  ">
				{pricing.map((item, index) => (
					<div
						key={index}
						className={`relative  lg:w-[31%] w-full  rounded-3xl  ${
							item.bestDeal
								? "md:pt-[60px] pt-[40px] p-[2px] lg:-translate-y-[60px] from-crayola to-purple_taupe  bg-gradient-to-tl"
								: "flex-shrink h-fit p-[1.2px] bg-crayola"
						} `}
					>
						{item.bestDeal && (
							<div className="absolute md:top-5 top-2 left-1/2 -translate-x-1/2 w-full center gap-1">
								<FontAwesomeIcon
									icon={faArrowTurnDown}
									flip="horizontal"
									className="self-end"
								/>
								<span className="font-bold">Best Deal</span>
							</div>
						)}
						<div className="w-full h-full bg-black  rounded-3xl p-4 pb-6 md:p-6 space-y-6">
							<h2 className="md:text-3xl text-xl uppercase font-black">{item.title}</h2>
							<div>
								<span className="md:text-3xl text-xl font-black">
								    {`${activePlan === "monthly" ? item.monthPrice : item.yearPrice} DHS`}
								</span>
								<span className="md:text-sm text-xs">
									/ {activePlan === "annually" ? "year" : "month"}
								</span>
							</div>
							<p className="max-w-[40ch] text-sm md:text-base">{item.description}</p>
							<button className="w-full bg-purple_taupe md:px-2 md:py-1 px-1 py-0.5 rounded-lg from-crayola to-purple_taupe p-[1.2px] bg-gradient-to-l ">
								<Link href="#" className="font-bold text-sm md:text-base">Subscripe</Link>
							</button>
							<div className="center gap-4 pb-2 pt-1 ">
								<FontAwesomeIcon
									icon={faCircle}
									className="text-[5px] text-crayola"
								/>
								<div className="bg-gradient-to-r rounded-full w-full  from-crayola to-purple_taupe h-[1.2px]"></div>
								<span className="uppercase text-crayola tracking-widest md:text-sm text-xs">
									features
								</span>
								<div className="bg-gradient-to-l rounded-full  w-full from-crayola to-purple_taupe h-[1.2px]"></div>
								<FontAwesomeIcon
									icon={faCircle}
									className="text-[5px] text-crayola"
								/>
							</div>
							<div>
								{item.features.map((feature, index) => (
									<div key={index} className="flex items-center gap-2">
										<FontAwesomeIcon
											icon={faCircleCheck}
											className="md:text-[14px] text-[13px] "
										/>
										<span className="text-sm md:text-base">{feature}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Subscription;
