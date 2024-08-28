import React from "react";
import Header from "./components/Header";
import TrustedBy from "./components/TrustedBy";
import ImgStory from "./components/ImgStory";
import Cards from "./components/Cards";
import FullCard from "./components/FullCard";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div className="px-[4%] bg-[#F0F8FF]">
			<Header />
			<TrustedBy />
			<ImgStory />
			<Cards />
			<FullCard />
			<Footer />
		</div>
	);
}
