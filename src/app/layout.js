import {
	Poppins,
	Roboto,
	Arimo,
	Bebas_Neue,
	Merriweather,
	Kanit,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });
const arimo = Arimo({ variable: "--font-roboto", subsets: ["latin"] });
const kanit = Kanit({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["400"],
});
const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["600"],
});
const bebasNeue = Bebas_Neue({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400"],
});
const merriWeather = Merriweather({
	variable: "--font-roboto",
	subsets: ["latin"],
});

export const metadata = {
	title: "Anita Engineering Works",
	description:
		"Anita Engineering Works, established in 1998, is a trusted name in the field of fastener manufacturing. We specialize in the production of screws, bolts, nuts, and precision fasteners designed for diverse industrial applications. With over two decades of expertise, we have developed a reputation for delivering quality, reliability, and consistency. Our modern facility is equipped with advanced headers, rolling machines, and BT cut machines. This infrastructure enables us to achieve high-volume production with uncompromised accuracy.",
};

export default function RootLayout({ children }) {
	const navigationList = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Screws",
			path: "/screws",
		},
		{
			name: "Washers",
			path: "/washers",
		},
		{
			name: "Clamps",
			path: "/clamps",
		},
		{
			name: "Others",
			path: "/others",
		},
		{
			name: "About Us",
			path: "/about-us",
		},
		{
			name: "Contact Us",
			path: "/contact-us",
		},
	];
	const linksRow2 = [
		{
			name: "Screws",
			path: "/screws",
		},
		{
			name: "Washers",
			path: "/washers",
		},
		{
			name: "Others",
			path: "/others",
		},
	];
	const linksRow1 = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About Us",
			path: "/about-us",
		},
		{
			name: "Certifications",
			path: "/certifications",
		},
		{
			name: "Contact Us",
			path: "/contact-us",
		},
	];
	const contactDetails = {
		address: `Shabad Daulatpur, Delhi – 110042, India`,
		email_1: "aewmanish@gmail.com",
		email_2: "anitaengineeringworks@gmail.com",
		phone: "+91 95995-10490",
	};

	return (
		<html lang="en">
			<body className={`${kanit.variable} ${bebasNeue.variable} antialiased`}>
				<Header
					listOfLinks={navigationList}
					logo={"/images/logo.png"}
					bgColor={"bg-custom-yellow"}
					linkBgColorHover={"bg-black"}
					linkColorHover={"text-white"}
				/>
				{children}
				<Footer
					description={
						"Anita Engineering Works, established in 1998, is a trusted name in the field of fastener manufacturing. We specialize in the production of screws, bolts, nuts, and precision fasteners designed for diverse industrial applications."
					}
					linksRow1={linksRow1}
					linksRow2={linksRow2}
					contactDetails={contactDetails}
				/>
			</body>
		</html>
	);
}
