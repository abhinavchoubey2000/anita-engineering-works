import React from "react";
import Card from "@/components/Card";
import WashersData from "@/utils/data/washers.json";

export default function Washers() {
	return (
		<>
			<section className="bg-custom-gray lg:px-10 lg:py-12 px-2 py-4">
				<div>
					<h1 className="text-custom-yellow lg:text-heading text-heading-mobile lg:tracking-text tracking-text-mobile font-poppins ">
						WASHERS
					</h1>
					<p className="lg:text-normal text-normal-mobile font-roboto lg:tracking-text tracking-text-mobile text-justify">
						Washers are essential fastening components designed to distribute
						load, prevent loosening, and protect surfaces during assembly. They
						ensure secure and stable connections in mechanical and industrial
						applications. Anita Engineering Works manufactures a wide range of
						washers, including flat washers, spring washers, square washers, and
						external tooth washers, each engineered for strength, precision, and
						durability. Our washers are crafted using high-quality materials and
						stringent quality standards to provide reliable performance,
						corrosion resistance, and long service life in various industrial
						environments.
					</p>
				</div>

				<div className="w-full py-10 flex flex-wrap lg:justify-baseline justify-center lg:gap-10 gap-5">
					{WashersData.map((washer) => (
						<Card
							key={washer.path}
							type="product"
							image={washer.path}
							title={washer.name}
							rotation={washer.rotation}
							description={washer.description}
						/>
					))}
				</div>
			</section>
		</>
	);
}
