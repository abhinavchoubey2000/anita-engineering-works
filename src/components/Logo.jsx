import React from "react";
import Image from "next/image";

export default function Logo({
	width,
	height,
	path = "/images/logo-2.png",
	alt = "Logo of the company",
	className = "",
}) {
	return (
		<Image
			src={path}
			width={500}
			className={className}
			style={{ width, height, objectFit:"contain" }}
			loading="lazy"
			height={1000}
			alt={alt}
		/>
	);
}
