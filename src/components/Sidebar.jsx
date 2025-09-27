"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Menu, X } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Sidebar({
	listOfLinks,
	linkBgColorHover,
	linkColorHover,
}) {
	const sidebarRef = useRef(null);
	const transparentRef = useRef(null);
	const pathname = usePathname();

	function showSidebar() {
		sidebarRef.current.style.transform = "translateX(0)";
		transparentRef.current.style.transform = "translateX(0)";
	}
	function hideSidebar() {
		sidebarRef.current.style.transform = "translateX(-100%)";
		transparentRef.current.style.transform = "translateX(-100%)";
	}
	return (
		<div>
			<span className="lg:hidden block" onClick={showSidebar}>
				<Menu />
			</span>

			<aside
				id="default-sidebar"
				className="fixed top-0 left-0 z-50 w-64 h-screen transition-all"
				style={{ transform: "translateX(-100%)" }}
				aria-label="Sidebar"
				ref={sidebarRef}
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-white flex flex-col justify-between items-center">
					<div className="w-full flex flex-col gap-4 items-start">
						<span className="self-end" onClick={hideSidebar}>
							<X />
						</span>
						{listOfLinks.map((link) => (
							<Link
								onClick={hideSidebar}
								key={link.path}
								className={
									pathname !== link.path
										? `hover:${linkBgColorHover} hover:${linkColorHover} py-2 px-4 transition-all duration-300 tracking-text w-full`
										: `bg-black text-white py-2 px-4 transition-all duration-300 tracking-text w-full`
								}
								href={link.path}
							>
								{link.name}
							</Link>
						))}
					</div>
					<Logo height={90} width={"60%"} />
				</div>
			</aside>
			<div
				onClick={hideSidebar}
				className="fixed w-full z-0 top-0 left-0 h-screen bg-transparent"
				ref={transparentRef}
				style={{ transform: "translateX(-100%)" }}
			></div>
		</div>
	);
}
