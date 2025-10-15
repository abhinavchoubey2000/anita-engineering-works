"use client";
import Image from "next/image";
import React, { useRef } from "react";

export default function PunchCard({ punch, screw, screwDriver, title }) {
	const screwRef = useRef(null);
	const screwDriverRef = useRef(null);
	const punchRef = useRef(null);

	function handleMouseOver() {
		punchRef.current.style.transform = "rotate(360deg)";

		screwRef.current.style.borderBottomLeftRadius = "0px";
		screwRef.current.style.borderBottomRightRadius = "0px";
		screwRef.current.style.backgroundColor = "#f1f1f1";
		screwRef.current.style.transform = "translateY(2rem)";

		screwDriverRef.current.style.borderTopLeftRadius = "0px";
		screwDriverRef.current.style.borderTopRightRadius = "0px";
		screwDriverRef.current.style.backgroundColor = "#f1f1f1";
		screwDriverRef.current.style.transform = "translateY(-2rem)";
	}

	function handleMouseOut() {
		punchRef.current.style.transform = "rotate(0deg)";

		screwRef.current.style.borderBottomLeftRadius = "12px";
		screwRef.current.style.borderBottomRightRadius = "12px";
		screwRef.current.style.backgroundColor = " #60915e";
		screwRef.current.style.transform = "translateY(0rem)";

		screwDriverRef.current.style.borderTopLeftRadius = "12px";
		screwDriverRef.current.style.borderTopRightRadius = "12px";
		screwDriverRef.current.style.backgroundColor = "#f1f1f1";
		screwDriverRef.current.style.transform = "translateY(0rem)";
	}
	return (
		<div
			className="lg:w-[10rem] w-[8rem] flex justify-around items-center flex-col"
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<Image
				className={`transition-all duration-500 object-contain w-[4rem] h-[3rem] lg:h-[5rem] my-3 lg:my-0`}
				src={punch}
				alt={punch}
				height={1000}
				width={1000}
				ref={punchRef}
			/>

			<div
				ref={screwRef}
				className="transition-all duration-500 flex justify-center items-center rounded-xl bg-[#60915e] py-10 w-full"
			>
				<Image
					className={` object-contain w-[4rem] h-[7rem] lg:h-[7rem] `}
					src={screw}
					alt={screw}
					height={1000}
					width={1000}
				/>
			</div>
			<h3 className="lg:text-[1.3rem] text-[1rem] font-roboto lg:tracking-text tracking-text-mobile text-center">
				{title}
			</h3>
			<div
				ref={screwDriverRef}
				className="flex justify-center items-center rounded-xl bg-white transition-all duration-500 py-10 w-full"
			>
				<Image
					className={` object-contain w-[4rem] h-[7rem] lg:h-[10rem]`}
					src={screwDriver}
					alt={screwDriver}
					height={1000}
					width={1000}
				/>
			</div>
		</div>
	);
}
