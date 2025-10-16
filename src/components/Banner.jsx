"use client";
import React from "react";
import { Animation } from "@/utils/animations";
import { useGSAP } from "@gsap/react";

export default function Banner({
	children,
	image = "",
	height = "h-full",
	blur = "10px",
}) {
	const bannerAnim = new Animation();
	useGSAP(() => {
		bannerAnim.fade("none", 1, 60);
	});
	return (
		<div
			style={{
				backdropFilter: "blur(50px)",
				background: `url(${image})`,
				backgroundSize: "cover",
			}}
		>
			<div
				ref={bannerAnim.getRef()}
				className={`w-full lg:${height} py-20 backdrop-blur-[${blur}] flex flex-col items-center justify-center`}
			>
				{children}
			</div>
		</div>
	);
}
