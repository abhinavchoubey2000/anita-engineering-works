"use client";

import React from "react";
import Image from "next/image";
import { forwardRef } from "react";

function Partners({ title, logosArray }, ref) {
	return (
		<section ref={ref} className="w-full bg-white lg:py-12 py-4">
			{title && (
				<h2 className="lg:px-10 px-2 lg:text-heading text-heading-mobile text-custom-yellow font-poppins">
					{title}
				</h2>
			)}

			<div className="w-full py-10 flex items-center overflow-hidden">
				<div className="flex lg:gap-28 gap-14 animate-marquee">
					{logosArray.map((logo, index) => (
						<Image
							key={index}
							loading="lazy"
							src={logo}
							alt="Image logo"
							className="h-12 lg:h-20 w-auto object-contain"
							height={1000}
							width={1000}
						/>
					))}
				</div>
			</div>

			{/* Keyframes inside component */}
			<style jsx>{`
				@keyframes marquee {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.animate-marquee {
					animation: marquee 50s linear infinite;
				}
			`}</style>
		</section>
	);
}
export default forwardRef(Partners);
