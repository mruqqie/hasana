import Link from "next/link";
import React from "react";
import { FULLCARD } from "../constants";

const FullCard = () => {
	return (
		<div className="flex items-center gap-12 flex-col justify-center my-32 w-full px-5 py-16 bg-[#4B9CD3] rounded-3xl">
			<div className="w-[90%]">
				<h1 className="text-[32px] *:sm:text-[40px] leading-[55px] mb-5 font-bold">
					{FULLCARD.heading}
				</h1>
				<p className="text-[20px] sm:text-[26px] leading-10">
					{FULLCARD.text}
				</p>
			</div>
			<Link href="https://docs.google.com/forms/d/e/1FAIpQLScDr1JM5M_j9smyg4FxCBNRCq0ZbAGrbOizfD7lDF0HxnwBUA/viewform?usp=pp_url">
				<button className="py-4 px-8 text-lg sm:text-2xl h-min rounded-full bg-[#0047AB] text-white">
					{FULLCARD.button}
				</button>
			</Link>
		</div>
	);
};

export default FullCard;
