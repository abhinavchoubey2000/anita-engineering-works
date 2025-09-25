import React from "react";

export default function Banner({
	children,
	image = "",
	height = "h-full",
	blur = "10px",
}) {
	return (
		<div
			style={{
				backdropFilter: "blur(50px)",
				background: `url(${image})`,
			}}
		>
			<div
				className={`w-full lg:${height} py-20 backdrop-blur-[${blur}] flex flex-col items-center justify-center`}
			>
				
				{children}
			</div>
		</div>
	);
}
