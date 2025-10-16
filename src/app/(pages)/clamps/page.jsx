"use client";
import React from "react";
import Card from "@/components/Card";
import ClampsData from "@/utils/data/clamps.json";
import { Animation } from "@/utils/animations";
import { useGSAP } from "@gsap/react";

export default function Washers() {
	const clampHeadingAnim = new Animation();
	const clampTextAnim = new Animation();

	useGSAP(() => {
		clampHeadingAnim.fade("up", 2, 50);
		clampTextAnim.fade("up", 2, 50, "from", false, { delay: 0.8 });
	});
	return (
		<>
			<section className="bg-custom-gray lg:px-10 lg:py-12 px-2 py-4">
				<div>
					<h1
						ref={clampHeadingAnim.getRef()}
						className="text-custom-yellow lg:text-heading text-heading-mobile lg:tracking-text tracking-text-mobile font-poppins "
					>
						CLAMPS
					</h1>
					<p
						ref={clampTextAnim.getRef()}
						className="lg:text-normal text-normal-mobile font-roboto lg:tracking-text tracking-text-mobile text-justify"
					>
						Clamps are essential fastening components designed to securely hold
						objects together, ensuring stability during assembly, welding, or
						repair operations. At Anita Engineering Works, our clamps are
						precision-engineered for strength, durability, and ease of use
						across diverse industrial applications. Made from high-quality
						materials, they deliver consistent grip without damaging the
						surface. Whether used for pipe fittings, machinery setups, or
						construction tasks, our clamps guarantee firm alignment and
						long-lasting performance. Each product is rigorously tested for
						accuracy and reliability, reflecting our commitment to quality
						engineering solutions.
					</p>
				</div>

				<div className="w-full py-10 flex flex-wrap lg:justify-baseline justify-center lg:gap-10 gap-5">
					{ClampsData.map((clamp) => (
						<Card
							key={clamp.path}
							type="product"
							image={clamp.path}
							title={clamp.name}
							rotation={clamp.rotation}
							description={clamp.description}
						/>
					))}
				</div>
			</section>
		</>
	);
}
