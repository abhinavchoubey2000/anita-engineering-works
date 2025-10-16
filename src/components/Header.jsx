"use client";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { Animation } from "@/utils/animations";

function Header({
	listOfLinks = [],
	bgColor,
	className = "",
	linkBgColorHover,
	linkColorHover,
}) {
	const pathname = usePathname();
	const logoAnim = new Animation();
	const navAnim = new Animation();

	useGSAP(() => {
		logoAnim.fade("down", 1.5, 20);
		navAnim.fade("down", 1.5, 20);
	});

	return (
		<>
			<nav
				className={`${bgColor} sticky top-0 z-50 flex justify-between items-center px-10 ${className}`}
			>
				<div
					ref={navAnim.getRef()}
					className="font-roboto text-normal gap-8 lg:flex hidden"
				>
					{listOfLinks.map((link, index) => (
						<Link
							key={link.path}
							className={
								pathname !== link.path
									? `hover:${linkBgColorHover} hover:${linkColorHover} py-5 px-4 transition-all duration-300 tracking-text`
									: `bg-black text-white py-5 px-4 transition-all duration-300 tracking-text`
							}
							href={link.path}
						>
							{link.name}
						</Link>
					))}
				</div>
				<Sidebar
					listOfLinks={listOfLinks}
					linkBgColorHover={"bg-black"}
					linkColorHover={"text-white"}
				/>
				<Link ref={logoAnim.getRef()} href={"/"}>
					<Logo height={"70px"} width={"150px"} />
				</Link>
			</nav>
		</>
	);
}

export default Header;
