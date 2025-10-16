"use client";
import React from "react";
import Card from "@/components/Card";
import ScrewsData from "@/utils/data/screws.json";
import PunchesData from "@/utils/data/punches.json";
import PunchCard from "@/components/PunchCard";
import { Animation } from "@/utils/animations";
import { useGSAP } from "@gsap/react";

export default function Screws() {
	const screwHeadingAnim = new Animation();
	const screwTextAnim = new Animation();

	const punchHeadingAnim = new Animation();
	const punchTextAnim = new Animation();

	useGSAP(() => {
		screwHeadingAnim.fade("up", 2, 50);
		screwTextAnim.fade("up", 2, 50, "from", false, { delay: 0.8 });

		punchHeadingAnim.fade(
			"up",
			2,
			70,
			"from",
			false,
			{},
			{
				scroller: "body",
				scrub: 1,
				start: "top 90%",
				end: "bottom 70%",
				delay: 2,
			}
		);
		punchTextAnim.fade(
			"up",
			2,
			70,
			"from",
			false,
			{},
			{
				scroller: "body",
				scrub: 1,
				start: "top 90%",
				end: "bottom 70%",
				delay: 2,
			}
		);
	});
	return (
		<>
			{/* Screws */}
			<section className="bg-custom-gray lg:px-10 lg:py-12 px-2 py-4">
				<div>
					<h1
						ref={screwHeadingAnim.getRef()}
						className="text-custom-yellow lg:text-heading lg:tracking-text text-heading-mobile tracking-text-mobile font-poppins "
					>
						SCREWS
					</h1>
					<p
						ref={screwTextAnim.getRef()}
						className="lg:text-normal text-normal-mobile font-roboto lg:tracking-text tracking-text-mobile text-justify"
					>
						A screw is a mechanical fastener with a helical ridge, commonly
						known as a thread, wrapped around a cylindrical shaft. It is
						designed to be inserted into materials by rotating it with a tool
						such as a screwdriver or wrench. The unique design of a screw allows
						it to hold objects together securely or position materials with
						precision. By creating a clamping force, screws resist loosening
						even under vibration, making them reliable for a wide range of
						applications in wood, metal, plastic, and composite materials.
					</p>
				</div>

				<div className="w-full py-10 flex flex-wrap lg:justify-baseline justify-center lg:gap-10 gap-5">
					{ScrewsData.map((screw) => (
						<Card
							key={screw.path}
							type="product"
							image={screw.path}
							title={screw.name}
							rotation={screw.rotation}
							description={screw.description}
						/>
					))}
				</div>
			</section>

			{/* Types of Punches */}
			<section className="bg-custom-yellow lg:px-10 lg:py-12 px-2 py-4">
				<div>
					<h1
						ref={punchHeadingAnim.getRef()}
						className="text-custom-gray lg:text-heading lg:tracking-text text-heading-mobile tracking-text-mobile font-poppins "
					>
						TYPES OF PUNCHES
					</h1>
					<p
						ref={punchTextAnim.getRef()}
						className="lg:text-normal text-normal-mobile font-roboto lg:tracking-text tracking-text-mobile text-justify"
					>
						In screw making, punches are essential tools used to create precise
						indentations, marks, or shapes on screw blanks and heads. They help
						in forming slots, embossing head designs, or preparing surfaces for
						further machining. Punches are typically made of hardened steel to
						withstand repeated impact without deformation. They ensure accuracy,
						consistency, and alignment during production. By guiding the
						placement of threads or head features, punches enhance the
						efficiency of automated or manual screw manufacturing, contributing
						to the uniformity, functionality, and quality of the final screws.
					</p>
				</div>

				<div className="w-full py-10 flex flex-wrap lg:justify-baseline justify-center lg:gap-10 gap-5">
					{PunchesData.map((punch) => (
						<PunchCard
							key={punch.screw}
							title={punch.title}
							screw={punch.screw}
							screwDriver={punch.screwDriver}
							punch={punch.punch}
						/>
					))}
				</div>
			</section>
		</>
	);
}
