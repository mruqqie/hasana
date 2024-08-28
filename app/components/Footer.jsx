import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FOOTER } from "../constants";

const Footer = () => {
	return (
		<div className="flex flex-col items-center">
			<h1 className="font-bold text-4xl text-center py-10 pb-20">
				{FOOTER.heading}
			</h1>
			<Link href="https://docs.google.com/forms/d/e/1FAIpQLScDr1JM5M_j9smyg4FxCBNRCq0ZbAGrbOizfD7lDF0HxnwBUA/viewform?usp=pp_url">
				<button className="py-4 px-8 h-min text-lg sm:text-2xl w-max rounded-full text-white bg-[#022c66] border border-blue-500">
					{FOOTER.button}
				</button>
			</Link>

			<div className="flex mt-20 mb-8 gap-3">
				<Link href="https://x.com/hasanafinance?s=21">
					<Image
						src="/assets/xlogo.svg"
						alt="X Logo"
						width={1000}
						height={1000}
						className="w-7 h-7"
					/>
				</Link>
			</div>
			<Link href="https://medium.com/@hasanafinance">
				<p className="underline mb-20 text-lg font-extrabold">
					{FOOTER.blog}
				</p>
			</Link>
			<Image
				src="/assets/hasana.png"
				width={1000}
				height={1000}
				className="w-24 h-24 sm:w-36 sm:h-36 self-end"
			/>
		</div>
	);
};

export default Footer;
