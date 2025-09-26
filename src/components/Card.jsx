import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Card({
	type = "category",
	title = "Cart",
	image = "",
	link = "",
	icon,
	info,
	description = "",
	classname = "",
	width = "w-full",
}) {
	return type === "category" ? (
		<div className="bg-white inline-flex flex-col flex-wrap lg:w-xs w-[10rem] h-[10rem] items-end rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.005] relative">
			<div className="px-5 flex flex-col py-3">
				<h3 className="lg:text-[2rem] text-[1.5rem] font-roboto lg:tracking-text tracking-text-mobile">
					{title}
				</h3>
				<Link
					className="text-right font-roboto lg:text-normal lg:tracking-text text-normal-mobile tracking-text-mobile"
					href={link}
				>
					<div className="flex text-custom-yellow flex-row justify-end items-center">
						<span>view</span>
						<ChevronRight />
					</div>
				</Link>
			</div>
			<Image
				className="bottom-0 self-start lg:w-[10rem] w-[8rem] h-[6rem] absolute lg:h-[8rem]"
				src={image}
				alt={type}
				height={1000}
				width={1000}
			/>
		</div>
	) : type === "info" ? (
		<div
			className={` cursor-pointer px-8 py-5 my-5 bg-custom-gray flex lg:${width} rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.005] relative gap-3 ${classname}`}
		>
			<span>{icon}</span>
			<div className="flex flex-col gap-1 tracking-text-mobile lg:tracking-text text-xl lg:text-4xl">
				<h4 className="lg:tracking-text tracking-text-mobile font-poppins">
					{title}
				</h4>
				<span className="opacity-50 text-normal-mobile lg:text-normal tracking-text-mobile lg:tracking-text font-roboto">
					{info}
				</span>
			</div>
		</div>
	) : null;
}
