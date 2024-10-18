"use client";
import React, { useState } from "react";
import { pricing } from "@/constants";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Subscription = () => {
	const [activePlan, setActivePlan] = useState("monthly");

	const toggleButton = (plan: "monthly" | "annually") => setActivePlan(plan);

	return (
		<div>
			<div className="center md:my-12 my-6">
				<div
					className={`rounded-full    from-crayola to-purple_taupe p-[1.2px]  sm:h-[52px] h-[39px]  ${
						activePlan === "monthly" ? "bg-gradient-to-r" : "bg-gradient-to-l"
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
			<div className="md:flex md:flex-wrap space-y-4 md:space-y-0 justify-around gap-y-6 gap-4  ">
				{pricing.map((item, index) => (
					<div key={index} className={`  ${index !== pricing.length - 1 && "flex-grow"} bg-gradient-to-r rounded-xl from-crayola to-purple_taupe p-[1.2px] `}>
                        <div className="w-full h-full bg-black rounded-xl p-4 md:p-6">
                        <h2 className="md:text-3xl font-black">{item.title}</h2>
						<div>
							<span className="text-3xl font-black">
								{activePlan === "monthly" ? item.monthPrice : item.yearPrice}
							</span>
							<span className="text-sm">
								/ {activePlan === "annually" ? "year" : "month"}
							</span>
						</div>
						<p className="max-w-[40ch]">{item.description}</p>
						<button className="w-full">
							<Link href="#">Subscripe</Link>
						</button>
						<div className="center gap-4">
                        <FontAwesomeIcon icon={faCircle} className="text-[5px] text-purple_taupe" />
							<div className="bg-gradient-to-r rounded-full w-full  from-crayola to-purple_taupe h-[1.2px]"></div>
                            <span className="uppercase text-crayola tracking-widest">features</span>
							<div className="bg-gradient-to-r rounded-full  w-full from-crayola to-purple_taupe h-[1.2px]"></div>
                        <FontAwesomeIcon icon={faCircle} className="text-[5px] text-purple_taupe" />          
						</div>
                        </div>
						
					</div>
				))}
			</div>
		</div>
	);
};

export default Subscription;
