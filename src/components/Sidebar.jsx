"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function Sidebar({
	listOfLinks,
	linkBgColorHover,
	linkColorHover,
}) {
	const sidebarRef = useRef(null);

	function showSidebar() {
		sidebarRef.current.style.transform = "translateX(0)";
	}
	function hideSidebar() {
		sidebarRef.current.style.transform = "translateX(-100%)";
	}
	return (
		<div>
			<span className="lg:hidden block" onClick={showSidebar}>
				<Menu />
			</span>

			<aside
				id="default-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen transition-all"
				style={{ transform: "translateX(-100%)" }}
				aria-label="Sidebar"
				ref={sidebarRef}
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-white flex flex-col gap-4 items-start">
					<span className="self-end" onClick={hideSidebar}>
						<X />
					</span>
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
			</aside>
		</div>
	);
}
