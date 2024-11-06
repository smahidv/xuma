"use client";
import ContactDetails from "@/components/subscribe/ContactDetails";
import SubscriptionOffer from "@/components/subscribe/SubscriptionOffer";
import { useState } from "react";

export default function page() {
	const [subscribeTab, setSubscribeTab] = useState(true);
	const [currentPass, setCurrentPass] = useState<number>(0);
	const handleTabClick = (index: number) => {
		setSubscribeTab((prevSubscribeTab) => !prevSubscribeTab);
		setCurrentPass(index);
	};
	const toggleTab = () => {
		setSubscribeTab((prevSubscribeTab) => !prevSubscribeTab);
	};
	return (
		<main>
			<div className="relative bg-hero-subscribe mt-[10vh]  bg-no-repeat bg-right bg-cover w-screen h-[300px] ">
				<div className="flex items-center justify-center h-full ">
					<h2 className="font-black text-xl md:text-4xl uppercase ">join us</h2>
				</div>
				<div
					className={`grid md:py-4 py-1 grid-cols-4 text-center bg-black max-w-[95%] 
	                            min-w-[370px] md:w-[700px] left-1/2 -translate-x-1/2   translate-y-1/2 bottom-0 absolute
	                           after:absolute after:bg-crayola ${subscribeTab && "after:w-1/2" }  ${!subscribeTab && "after:w-[75%]" }  after:h-1 after:bottom-0 after:left-0`}
				>
					<div className="px-[0.5rem] py-1 text-[0.7rem] md:text-lg font-bold relative after:absolute after:bg-white after:w-[1px] after:h-[85%] after:top-0 after:right-0 ">
						Club{" "}
					</div>
					<div 
					className={`px-[0.5rem] py-1 text-[0.7rem]  md:text-lg
						  ${subscribeTab ? "text-crayola" : "text-white" } 
						  font-bold   border-white relative after:absolute after:bg-white
						  after:w-[1px] after:h-[85%] after:top-0 after:right-0 `}>
						Subscription
					</div>
					<div 
					className={`px-[0.5rem] py-1 text-[0.7rem]  md:text-lg
						${!subscribeTab ? "text-crayola" : "text-white" } 
						font-bold   border-white relative after:absolute after:bg-white
						after:w-[1px] after:h-[85%] after:top-0 after:right-0 `}>
						Contact details
					</div>
					<div className="px-[0.5rem] py-1 text-[0.7rem]  md:text-lg font-bold  ">
						Regulations
					</div>
				</div>
			</div>
			{subscribeTab ? (
				<SubscriptionOffer handleTabClick={handleTabClick} />

			) : (
				<ContactDetails  toggleTab ={toggleTab } currentIndex={currentPass}/>
			)}
		</main>
	);
}
