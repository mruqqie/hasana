import { Inter, Baskervville } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const baskervville = Baskervville({
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata = {
	title: "Hasana",
	description: "Loans backed by skills",
	icons: {
		icon: ["/hasana.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={baskervville.className}>{children}</body>
		</html>
	);
}
