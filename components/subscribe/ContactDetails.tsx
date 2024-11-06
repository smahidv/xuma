import { passes } from "@/constants";
import "./form.css";
interface OfferProps {
	toggleTab: () => void;
	currentIndex?: number;
}

export default function ({ toggleTab, currentIndex = 0 }: OfferProps) {
	const currentPass = passes?.[currentIndex] || {};
	return (
		<div className="bg-white/85 py-[10vh]">
			<div className="lg:flex mx-auto max-w-[1300px] gap-6 container">
				<div className="bg-black rounded-lg pt-2 pb-6">
					<div className="text-lg md:text-[1.7rem] font-black p-4 uppercase">
						xuma casa
					</div>
					<div className="border-t-white border-t py-4">
						<div className="md:text-lg font-black uppercase  px-4">
							{currentPass.name}
						</div>
						<ul className=" p-4 px-8 list-disc space-y-2">
							{currentPass.description.map((item, index) => (
								<li key={index} className="text-xs md:text-base font-bold">
									{item}
								</li>
							))}
						</ul>
						<div className="border-t-white border-t py-4">
							<div className="flex justify-between items-center uppercase font-black px-4">
								<div>total</div>
								<div>{`${currentPass.price} dh  `}</div>
							</div>
						</div>
						<div className="bg-white py-2 text-black uppercase text-center">
							<div className="text-xs font-bold">pay now</div>
							<div className="font-black md:text-2xl">{`${currentPass.price} dh  `}</div>
						</div>
					</div>
				</div>
				<div className="-order-1 basis-[67%]   mt-6 md:m-0">
					<form action="#">
						<div className="bg-white rounded-lg p-4 md:py-8 md:px-10 text-black">
							<div className="font-black capitalize text-lg md:text-2xl">
								personal information
							</div>
              <div className="lg:grid grid-cols-2  lg:gap-6 ">
              <div className="group my-4 ">
								<input type="text" required />
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Name</label>
							</div>
              <div className="group my-4 ">
								<input type="text" required />
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Full name</label>
							</div>
              </div>
              <div className="lg:grid grid-cols-2  lg:gap-6 ">
              <div className="group my-4 ">
								<input type="email" required />
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Email</label>
							</div>
              <div className="group my-4 ">
								<input type="tel" required />
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Phone</label>
							</div>
              </div>          
              <div className="lg:grid grid-cols-2  lg:gap-6 ">
              <div className="group my-4 ">
								<input type="text" required />
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>Code postal</label>
							</div>
              <div className="group my-4 ">
								<input type="text" required />
								<span className="highlight"></span>
								<span className="bar"></span>
								<label>City</label>
							</div>
              </div>  
              <div className="flex py-6 gap-4 justify-center ">
							<button
								className="border border-black rounded-md px-4 py-1 md:px-8 md:py-3 hover:shadow-2xl hover:shadow-black"
								onClick={() => {
									toggleTab();
								}}
							>
								Back
							</button>
              <button
								className="bg-black text-white rounded-md  px-4  md:px-8  hover:shadow-2xl hover:shadow-black"
								onClick={() => {
									toggleTab();
								}}
							>
								Proceed to payment
							</button>
              </div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
