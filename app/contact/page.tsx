import React from "react";

export default function contact() {
	return (
		<main className="container my-[12vh]">
			<h2 className=" py-[100px] font-black text-xl md:text-4xl uppercase text-white  flex justify-center items-center">
				Make an appointment
			</h2>
			<form action="#" className="space-y-4 max-w-[1000px] mx-auto">
				<input
					type="text"
					name=""
					id=""
					placeholder="full name"
					className=" w-full text-xs md:text-sm outline-0 bg-white text-black rounded-sm md:px-6 px-3 md:py-4 py-3  placeholder:uppercase placeholder:text-light_gray "
				/>
				<input
					type="email"
					name=""
					id=""
					placeholder="email"
					className=" w-full text-xs md:text-sm outline-0 bg-white text-black rounded-sm md:px-6 px-3 md:py-4 py-3  placeholder:uppercase placeholder:text-light_gray "
				/>
				<div className="flex gap-4 text-black ">
					<select className="outline-0 md:px-6 px-3 md:py-4 py-3 rounded-sm ">
						<option>+212</option>
						<option>+3</option>
					</select>
					<input
						type="tel"
						placeholder="phone"
						className="w-full text-xs md:text-sm outline-0  bg-white  rounded-sm md:px-6 px-3 md:py-4 py-3  placeholder:uppercase placeholder:text-light_gray "
					/>
				</div>
				<input
					type="text"
					placeholder="object"
					className=" w-full text-xs md:text-sm outline-0 bg-white text-black rounded-sm md:px-6 px-3 md:py-4 py-3  placeholder:uppercase placeholder:text-light_gray "
				/>
				<textarea
					placeholder="message"
					className=" w-full text-xs md:text-sm outline-0 bg-white text-black rounded-sm md:px-6 px-3 md:py-4 py-3  placeholder:uppercase placeholder:text-light_gray "
				></textarea>
				<input
					type="submit"
					value="send"
					className="float-right px-8 py-2 sw-fit text-xs md:text-sm sm:text-base rounded-full bg-crayola text-black  font-black capitalize hover:shadow-crayola_shd"
				/>
			</form>
		</main>
	);
}
