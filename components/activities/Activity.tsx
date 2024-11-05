import Image, { StaticImageData } from "next/image";

interface activity {
	image: StaticImageData;
	alt: string;
	title: string;
}
export default function Activity({  image, alt, title }: activity) {


	return (
		<div className="select-none ">
			<div className="  cursor-pointer  rounded-sm border-4 border-dark_gray hover:border-purple_taupe hover:shadow-crayola_sm_shd"
			
      >
				<Image src={image} alt={alt} placeholder="blur" className=" h-full"   sizes="(min-width: 1024px) 20vw, (min-width: 800px) 50vw, 100vw" />
			</div>
			<div className="font-bold  uppercase mt-2 text-center">{title}</div>
	
		</div>
	);
}
