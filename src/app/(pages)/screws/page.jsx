import React from "react";
import Card from "@/components/Card";
import ScrewsData from "@/utils/data/screws.json";

export default function Screws() {
	return (
		<>
			<section className="bg-custom-gray lg:px-10 lg:py-12 px-2 py-4">
				<div>
					<h1 className="text-custom-yellow text-heading tracking-text font-poppins ">
						SCREWS
					</h1>
					<p className="text-normal font-roboto tracking-text text-justify">
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

				<div className="w-full py-10 flex flex-wrap justify-baseline gap-10">
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
		</>
	);
}
