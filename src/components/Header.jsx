import Link from "next/link";
import Sidebar from "./Sidebar";
import Logo from "./Logo";

function Header({
	listOfLinks = [],
	bgColor,
	className = "",
	linkBgColorHover,
	linkColorHover,
}) {
	return (
		<>
			<nav
				className={`${bgColor} sticky top-0 z-50 flex justify-between items-center px-10 ${className}`}
			>
				<div className="font-roboto text-normal gap-8 lg:flex hidden">
					{listOfLinks.map((link) => (
						<Link
							key={link.path}
							className={`hover:${linkBgColorHover} hover:${linkColorHover} py-5 px-4 transition-all duration-300 tracking-text`}
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
				<Link href={"/"}>
					<Logo height={"40px"} width={"90px"} />
				</Link>
			</nav>
		</>
	);
}

export default Header;
