import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Card({
	type = "category",
	title = "Cart",
	image = "",
	link = "",
	description = "",
	classname = "",
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
	) : null;
}
