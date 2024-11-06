"use client";
import { gymActivities } from "@/constants/index";
import { useActivityOverlay } from "@/hooks/ActivityOverlayContext";
import {
	faArrowLeft,
	faBullseye,
	faClose,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import AnimatedDiv from "../home/AnimatedDiv";



export default function ActivityOverlay() {
	const { currentActivityIndex,closeOverlay} = useActivityOverlay();
	const currentActivity =
		currentActivityIndex !== null && currentActivityIndex !== undefined
			? gymActivities[currentActivityIndex]
			: null;

	return (
		<>
			{currentActivity &&
			(
				
				<div className="md:h-screen w-screen md:container ">
					{/* mobile ui */}
					<div className="md:hidden rounded-t-2xl">
						<button
							onClick={()=> {closeOverlay()}}
							className="absolute z-20 bg-dark_gray  top-6 left-4 mb-4 flex justify-center items-center rounded-full p-3"
						>
							<FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
						</button>
						<div className="relative max-h-[100vh] h-[100vh]">
							<Image
								src={currentActivity.image}
								alt={currentActivity.alt}
								className="object-cover rounded-t-2xl "
								fill
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.99)] to-[rgba(0,0,0,0.2)]"></div>
						</div>
						<AnimatedDiv animationType="fadeOutLayer" >
						<div className="absolute left-2  bottom-[5%] z-40 w-[calc(100%-0.5rem)]">
							<div className="uppercase font-bold text-2xl mb-4">
								{currentActivity.title}
							</div>
							<div className="mr-2 p-4 bg-[hsla(320,19%,28%,0.8)]   rounded-2xl space-y-6  ">
								<div className="space-y-1">
									<div className="text-sm font-bold uppercase ">
										<FontAwesomeIcon icon={faHeart} className="text-sm mr-1" />
										what We Offer
									</div>
									<div className="text-sm brightness-90">
										{currentActivity.whatWeOffer}
									</div>
								</div>
								<div className="bg-white w-[80%] mx-auto h-[0.5px] rounded-full "></div>
								<div className="space-y-1">
									<div className="text-sm font-bold  uppercase ">
										<FontAwesomeIcon
											icon={faBullseye}
											className="text-sm mr-1 "
										/>
										best for
									</div>
									<div className="text-sm brightness-90">
										{currentActivity.bestFor}
									</div>
								</div>
							</div>
						</div>
					</AnimatedDiv>
					</div>	
					{/* desktop ui				 */}
						<button
							type="button"
							onClick={()=> {closeOverlay()}}
							aria-label="Close overlay"
							className="hidden absolute z-20 top-4 right-4 md:flex items-center justify-center 
                                         border-2 border-white/70 hover:border-white p-2 rounded-2xl
                                          transition-colors duration-200 ease-in-out bg-black/30 
                                       hover:bg-white/10  "
						>
							<FontAwesomeIcon icon={faClose} className="text-white text-lg" />
						</button>
						<div className="hidden md:grid md:grid-cols-2 gap-10 lg:gap-0  h-screen   place-content-center items-center   ">
							<AnimatedDiv animationType="fadeOutLayer" >
							<div className="p-1 bg-gradient-to-tl from-white to-crayola w-full">
								<div className="bg-black size-full ">
									<div className="space-y-4 lg:p-10 p-4  ">
										<div className="uppercase font-black text-3xl  lg:text-5xl mb-4">
											{currentActivity.title}
										</div>
										<div className="space-x-2">
											<FontAwesomeIcon
												icon={faBullseye}
												className="text-crayola "
											/>
											<span className=" capitalize font-bold ">best for:</span>
											<span>{currentActivity.bestFor}</span>
										</div>
										<div className="space-x-2">
											<FontAwesomeIcon
												icon={faHeart}
												className="text-crayola"
											/>
											<span className="capitalize font-bold ">
												what We Offer:
											</span>
											<span>{currentActivity.whatWeOffer}</span>
										</div>
									</div>
								</div>
							</div>
							</AnimatedDiv>
							<div className=" justify-self-end lg:justify-self-center ">
								<AnimatedDiv animationType="scaleImage">
								<Image
									src={currentActivity.image}
									alt={currentActivity.alt}
									className=" object-cover w-full"
								/>
								</AnimatedDiv>
							</div>
						</div>			
					</div>
				
				)}
		</>
	);
}
