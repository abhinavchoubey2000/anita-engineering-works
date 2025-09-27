import React from "react";
import Image from "next/image";

export default function Logo({
	width,
	height,
	path = "/images/logo.png",
	alt = "Logo of the company",
	className = "",
}) {
	return (
		<Image
			src={path}
			width={100}
			className={className}
			style={{ width, height }}
			loading="lazy"
			height={1000}
			alt={alt}
		/>
	);
}
