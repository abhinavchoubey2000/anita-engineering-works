"use client";

import React from "react";
import { forwardRef } from "react";

function Button(
	{
		label,
		labelFontSize = "lg:text-normal text-normal-mobile",
		bgColor = "bg-custom-yellow",
		textColor = "text-black",
		className = "",
		handleClick = () => {},
	},
	ref
) {
	return (
		<button
			ref={ref}
			onClick={handleClick}
			className={`${bgColor} ${textColor} ${labelFontSize} font-roboto tracking-text py-5 px-2 rounded-lg cursor-pointer ${className}`}
		>
			{label}
		</button>
	);
}

export default forwardRef(Button);
