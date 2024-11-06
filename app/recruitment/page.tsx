import Image from "next/image";
import DarkCharcoalSymbol from "@/public/images/DarkCharcoalSymbol.png"

export default function recruitment() {
	return (
		<main>
			<div className="bg-hero-hiring mt-[12vh] relative bg-no-repeat bg-cover w-screen h-[300px] bg-top">
				<div className="absolute inset-0 bg-black opacity-25 z-10"></div>
				<div className="flex items-center justify-center h-full relative z-20">
					<h2 className="font-black text-xl md:text-4xl uppercase ">
						recruitment
					</h2>
				</div>
			</div>
			<div className="container relative flex justify-center items-center py-28 text-center  ">
				<div>
					<div className="font-black text-xl md:text-4xl uppercase text-crayola">
						The xuma FAMILY IS COMPLETE
					</div>
					<div className="font-black text-xl md:text-4xl uppercase ">
						to be continued
					</div>
				</div>
				<div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2">
					<Image src={DarkCharcoalSymbol} alt="symboal of women background" className=" brightness-[0.5]"/>
				</div>
			</div>
			<section className="container mb-16 xs:flex justify-center   ">
				<div className=" text-center">
					<h2 className="font-black  sm:text-3xl md:text-4xl text-2xl">
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
		</main>
	);
}
