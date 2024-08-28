import Image from "next/image";
import React from "react";
import { rowdies } from "../layout";
import Link from "next/link";
import { FOOTER, HERO } from "../constants";

const Header = () => {
	return (
		<div className="pb-28">
			<div className="flex justify-between items-center pt-5 sm:pt-0 sm:px-14 lg:px-20">
				<Image
					src="/assets/hasana.png"
					width={1000}
					height={1000}
					className="w-24 h-24 sm:w-36 sm:h-36"
				/>
				<Link href="https://docs.google.com/forms/d/e/1FAIpQLScDr1JM5M_j9smyg4FxCBNRCq0ZbAGrbOizfD7lDF0HxnwBUA/viewform?usp=pp_url">
					<button className="py-4 px-6 h-min rounded-full text-white bg-[#022c66] border border-blue-500">
						{FOOTER.button}
					</button>
				</Link>
			</div>
			<h1
				className={`text-5xl sm:text-8xl lg:text-9xl font-bold text-center px-5 pt-20 pb-10 text-[#00008B]`}
			>
				{HERO.heading}
			</h1>
			<div className="flex flex-col text-lg sm:text-xl text-center items-center text-black">
				<p className="font-bold">{HERO.p1}</p>
				<p>{HERO.p2}</p>
				<p className="font-bold">{HERO.p3}</p>
			</div>
		</div>
	);
};

export default Header;
