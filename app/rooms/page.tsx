import { xumaLocations } from "@/constants";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import Link from "next/link";
export default function rooms() {
	return (
		<main>
			<div className="bg-hero-rooms  mt-[10vh]  bg-no-repeat bg-cover w-screen h-[300px] bg-right  ">
				<div className="flex  items-center justify-center  h-full">
					<h2 className="font-black text-xl md:text-4xl uppercase">room(s)</h2>
				</div>
			</div>
			<div className="container mt-[10vh]">
				<div className="flex flex-col md:flex-wrap gap-6 md:flex-row ">
					{xumaLocations.map((location, index) => (
						<div
							key={index}
							className="bg-crayola  text-black md:p-[5px] pb-4 rounded-md basis-[48%] "
						>
							<div className="lg:flex   h-full">
								<div className="basis-1/2 lg:h-full relative">
									<Image
										src={location.image}
										alt="gym space"
										className="rounded-md object-cover size-full"
									/>
								</div>
								<div className="mx-auto flex  justify-center items-center py-4 md:py-6">
									<div>
										<Image src={location.symbolImage} alt="women symbol" />
										<div className="font-black text-2xl md:text-3xl capitalize my-6 md:my-8 text-center  lg:text-left">
											Xuma <span className="md:block">{location.title}</span>
										</div>
										{/* contact */}
										<div className="space-y-2">
											<div className="flex gap-3 items-center justify-center">
												<FontAwesomeIcon
													icon={faLocationDot}
													className="md:text-2xl"
												/>
												<span className="text-sm md:text-base">
													{location.address}
												</span>
											</div>
											<div className="flex gap-2 items-center justify-center">
												<FontAwesomeIcon
													icon={faWhatsapp}
													className="md:text-2xl "
												/>
												<span className="text-sm md:text-base">
													{location.phone}
												</span>
											</div>
										</div>
										{/* end contact */}
										<div className="mt-4 text-center">
											<button
												type="button"
												className="bg-black lg:w-full  rounded-md p-1 md:py-3 "
											>
												<Link className="text-white " href="/spaces">
													See more
												</Link>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
