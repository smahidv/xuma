import { faDumbbell, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxingGlove from "./svgs/BoxingGlove";
import { passes } from "@/constants";
import Karate from "./svgs/Karate";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import Belt from "./svgs/Belt";

interface OfferProps {
    handleTabClick: (index: number) => void;
}

export default function ({  handleTabClick }: OfferProps) { 

	return (
		<div className="py-[10vh] bg-splattered-gray bg-cover bg-no-repeat">
			<div className="flex justify-center pb-10  ">
				<div className="space-y-3 md:space-y-6">
					<h3 className="uppercase font-black text-center md:text-lg">
						subscription
					</h3>
					<div className="rounded-full border-dark border px-4 py-3 flex gap-[16.5px] items-center bg-black/50">
						<FontAwesomeIcon icon={faLocationDot} />
						<div className="uppercase font-bold text-white text-xs md:text-base ">
							xuma by Lisa Manathon
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap lg:flex-nowrap  justify-center container gap-y-8 gap-x-4">
				{passes.map((passe, i) => (
					<div
						key={i}
						className="group hover:bg-white/75 bg-black/75 md:basis-[48%] lg:basis-[400px] lg:flex-grow basis-full p-4 pb-6"
					>
						<div className="flex gap-2 items-center mb-6 ">
							{passe.name != "Kids Pass" && <FontAwesomeIcon icon={faDumbbell} />}
                            {passe.name != "Fitness Pass" && <BoxingGlove /> }
							{passe.name === "Kids Pass" && (
								<>
									<Belt />
									<Karate />
								</>
							)}
						</div>
						<div className="space-y-4">
							<h4 className="font-black text-lg md:text-2xl uppercase text-center group-hover:text-black">
								{passe.name}
							</h4>
							<div className="text-center text-crayola uppercase text-xs group-hover:text-black md:text-base">
								1an
							</div>
							<div className="bg-white group-hover:shadow-lg flex items-center justify-between  rounded-sm py-3 px-6">
								<ChevronDoubleDownIcon className="text-black size-[25px]" />
								<div className="text-black uppercase font-black">{`${passe.price} dh  `}</div>
								<ChevronDoubleDownIcon className="text-black size-[25px]" />
							</div>
							<div className="py-6 mx-auto w-fit">
								<button
									type="button"
                                    onClick={()=>{handleTabClick(i)}}
									className="border border-crayola rounded-md px-12 py-3 font-bold  text-xs md:text-base group-hover:bg-black group-hover:border-none hover:text-black hover:!border hover:!border-solid hover:!border-black hover:!bg-crayola"
								>
									{passe.buttonLabel}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
