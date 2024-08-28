import Image from "next/image";
import React from "react";

const TrustedBy = () => {
	return (
		<div className="flex flex-col gap-6 items-center justify-center">
			<p className="text-black font-black text-lg sm:text-xl">Trusted by the best</p>
			<Image
				src="/assets/celo.png"
				alt="Celo logo"
				width={1000}
				height={1000}
				className="w-48"
			/>
		</div>
	);
};

export default TrustedBy;
