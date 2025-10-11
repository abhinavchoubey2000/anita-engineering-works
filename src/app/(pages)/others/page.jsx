import React from "react";
import Card from "@/components/Card";
import NutsData from "@/utils/data/nuts.json";
import SpacersData from "@/utils/data/spacers.json";
import AllenKeysData from "@/utils/data/allen-keys.json";
import ThreadData from "@/utils/data/threads.json";

export default function Others() {
	return (
		<>
			{/* Nuts */}
			<section className="bg-custom-gray lg:px-10 lg:py-12 px-2 py-4">
				<div>
					<h1 className="text-custom-yellow lg:text-heading lg:tracking-text text-heading-mobile tracking-text-mobile font-poppins ">
						NUTS
					</h1>
					<p className="lg:text-normal text-normal-mobile font-roboto lg:tracking-text tracking-text-mobile text-justify">
						Nuts are vital fastening components designed to secure bolts and
						screws, creating strong, reliable joints in machinery and structural
						assemblies. They play a key role in maintaining stability and safety
						under various load conditions. Anita Engineering Works manufactures
						a wide range of nuts, including hex nuts, lock nuts, flange nuts,
						and special-purpose variants. Each nut is precision-engineered from
						high-quality materials to ensure durability, corrosion resistance,
						and dimensional accuracy, providing dependable performance across
						automotive, construction, electrical, and general engineering
						applications.
					</p>
				</div>

				<div className="w-full py-10 flex flex-wrap lg:justify-baseline justify-center lg:gap-10 gap-5">
					{NutsData.map((nut) => (
						<Card
							key={nut.path}
							type="product"
							image={nut.path}
							title={nut.name}
							rotation={nut.rotation}
							description={nut.description}
						/>
					))}
				</div>
			</section>

			{/* Spacers */}
			<section className="bg-custom-yellow lg:px-10 lg:py-12 px-2 py-4">
				<div>
					<h1 className="text-custom-gray lg:text-heading lg:tracking-text text-heading-mobile tracking-text-mobile font-poppins ">
						SPACERS
					</h1>
					<p className="lg:text-normal text-normal-mobile font-roboto lg:tracking-text tracking-text-mobile text-justify">
						Spacers are precision-engineered components used to maintain a
						specific distance or gap between two parts in an assembly. They
						ensure proper alignment, load distribution, and smooth functioning
						of mechanical systems. Anita Engineering Works manufactures
						high-quality spacers in various sizes, materials, and finishes to
						suit diverse industrial needs. Designed for durability and accuracy,
						our spacers provide excellent corrosion resistance and dimensional
						consistency. They are widely used in automotive, electrical, and
						machinery applications where stability and precise spacing are
						essential for reliable performance.
					</p>
				</div>

				<div className="w-full py-10 flex flex-wrap lg:justify-baseline justify-center lg:gap-10 gap-5">
					{SpacersData.map((spacer) => (
						<Card
							key={spacer.path}
							type="product"
							image={spacer.path}
							title={spacer.name}
							rotation={spacer.rotation}
							description={spacer.description}
						/>
					))}
				</div>
			</section>

			{/* Allen Keys */}
			<section className="bg-custom-gray lg:px-10 lg:py-12 px-2 py-4">
				<div>
					<h1 className="text-custom-yellow lg:text-heading lg:tracking-text text-heading-mobile tracking-text-mobile font-poppins ">
						Allen Keys
					</h1>
					<p className="lg:text-normal text-normal-mobile font-roboto lg:tracking-text tracking-text-mobile text-justify">
						Allen Keys, also known as hex keys, are L-shaped tools designed to
						drive screws and bolts with hexagonal sockets. They provide
						excellent torque control and easy access to confined spaces. Anita
						Engineering Works offers durable, precisely machined Allen keys made
						from high-grade steel to ensure strength, corrosion resistance, and
						long service life. Available in multiple sizes and finishes, our
						Allen keys deliver consistent performance in mechanical, automotive,
						and industrial applications, making them essential tools for
						accurate assembly, maintenance, and repair operations.
					</p>
				</div>

				<div className="w-full py-10 flex flex-wrap lg:justify-baseline justify-center lg:gap-10 gap-5">
					{AllenKeysData.map((allenKey) => (
						<Card
							key={allenKey.path}
							type="product"
							image={allenKey.path}
							title={allenKey.name}
							rotation={allenKey.rotation}
							description={allenKey.description}
						/>
					))}
				</div>
			</section>

			{/* Thread */}
			<section className="bg-custom-yellow lg:px-10 lg:py-12 px-2 py-4">
				<div>
					<h1 className="text-custom-gray lg:text-heading lg:tracking-text text-heading-mobile tracking-text-mobile font-poppins ">
						THREAD
					</h1>
					<p className="lg:text-normal text-normal-mobile font-roboto lg:tracking-text tracking-text-mobile text-justify">
						Threads are the helical grooves cut or rolled onto screws, bolts, or
						studs that allow them to fasten materials securely. In screw making,
						threads are critical as they determine the holding strength,
						compatibility with nuts, and ease of assembly. They can be created
						through cutting, rolling, or grinding, each affecting durability and
						precision. Threads vary in pitch, depth, and angle depending on
						application requirements. Accurate threading ensures reliable load
						distribution, prevents loosening under vibration, and enhances the
						overall performance of the fastened assembly in mechanical and
						structural applications.
					</p>
				</div>

				<div className="w-full py-10 flex flex-wrap lg:justify-baseline justify-center lg:gap-10 gap-5">
					{ThreadData.map((thread) => (
						<Card
							key={thread.path}
							type="product"
							image={thread.path}
							title={thread.name}
							rotation={thread.rotation}
							description={thread.description}
						/>
					))}
				</div>
			</section>
		</>
	);
}
