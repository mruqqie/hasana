import React from "react";
import { IMGSTORY1, IMGSTORY2 } from "../constants";
import Image from "next/image";

const ImgStory = () => {
	return (
		<div className="flex flex-col gap-14 py-24">
			<div className="flex flex-wrap gap-y-10 justify-center sm:gap-[6%] md:gap-[16%] lg:gap-[25%] items-center">
				<div className="w-[80%] sm:w-[260px] md:w-[250px] lg:w-[350px]">
					<Image
						src="/assets/img1.jpg"
						alt="Student"
						width={1000}
						height={1000}
						className="aspect-square rounded-3xl"
					/>
				</div>
				<p className="w-[80%] sm:w-[290px] md:w-[340px] lg:w-[356px] md:text-[15px] text-justify lg:text-[18px] leading-9">
					{IMGSTORY1}
				</p>
			</div>
			<div className="flex flex-wrap gap-y-10 justify-center sm:gap-[6%] md:gap-[16%] lg:gap-[25%] items-center">
				<div className="w-[80%] sm:w-[260px] md:w-[250px] lg:w-[350px]">
					<Image
						src="/assets/img2.jpg"
						alt="Student"
						width={1000}
						height={1000}
						className="aspect-square rounded-3xl"
					/>
				</div>
				<p className="w-[80%] sm:w-[290px] md:w-[340px] lg:w-[356px] md:text-[15px] text-justify lg:text-[18px] leading-9">
					{IMGSTORY2}
				</p>
			</div>
		</div>
	);
};

export default ImgStory;
