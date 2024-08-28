import React from "react";
import { CARDHEADING, CARDS } from "../constants";
import Image from "next/image";

const Cards = () => {
	return (
		<div className="flex flex-col w-full gap-10">
			<p className="text-3xl font-semibold">
				{CARDHEADING}
			</p>
			<div className="flex w-full flex-wrap gap-y-6 gap-[2%]">
				{CARDS.map((item, index) => (
					<div
						key={index}
						className={`flex flex-col gap-4 w-full md:w-[49%] lg:w-[32%] border rounded-3xl p-7 ${
							index === 0 && "bg-[#ffef00]"
						} ${index === 1 && "bg-[#318CE7]"} ${
							index === 2 && "bg-violet-400"
						}`}
					>
						<Image
							src={item.icon}
							alt="Student"
							width={1000}
							height={1000}
							className="w-28 h-28"
						/>

						<p className="text-3xl">
							{item.name} <b>{item.span}</b>
						</p>
						<p className="text-xl text-[#222222b5]">{item.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cards;
