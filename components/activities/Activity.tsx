import Image, { StaticImageData } from "next/image";

interface activity {
	i: number;
	image: StaticImageData;
	alt: string;
	title: string;
}
export default function Activity({ i, image, alt, title }: activity) {
	return (
		<div className=" select-none">
			<div className="h-[400px] cursor-pointer  rounded-sm border-4 border-dark_gray hover:border-purple_taupe hover:shadow-crayola_sm_shd"
        onClick={() => window.open(`https://www.xuma.com/activity/${i}`, "_blank")}
      >
				<Image src={image} alt={alt} className="object-cover h-full" />
			</div>
			<h4 className="font-bold text-2xl mt-4 text-center">{title}</h4>
		</div>
	);
}
