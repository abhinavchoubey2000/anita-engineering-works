import Partners from "@/components/Partners";
import Card from "@/components/Card";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function AboutUs() {
	return (
		<>
			{/* Our partners */}
			<Partners />

			{/* Products we manufacture */}
			<section className="bg-custom-gray px-10 py-12">
				<h2 className="text-custom-yellow font-poppins lg:text-heading text-heading-mobile">
					PRODUCTS WE MANUFACTURE
				</h2>
				<div className="flex lg:flex-row flex-wrap lg:gap-10 gap-5 justify-center py-10">
					<Card
						image="/images/home/category-screws.png"
						title="Screws"
						link="/screws"
					/>
					<Card
						image="/images/home/category-washers.png"
						title="Washers"
						link="/washers"
					/>
					<Card
						image="/images/home/category-others.png"
						title="Others"
						link="/others"
					/>
				</div>
			</section>

			{/* Who we are */}
			<section className="flex lg:flex-row-reverse flex-col-reverse gap-16 px-10 py-12">
				<div className="lg:w-[50%]">
					<h2 className="font-poppins text-heading-mobile lg:text-heading lg:tracking-text tracking-text-mobile text-custom-yellow lg:text-right">
						WHO WE ARE?
					</h2>
					<p className="font-roboto lg:tracking-text tracking-text-mobile text-normal-mobile lg:text-normal text-justify">
						Anita Engineering Works, established in 1998, is a trusted name in
						the field of fastener manufacturing. We specialize in the production
						of screws, bolts, nuts, and precision fasteners designed for diverse
						industrial applications. With over two decades of expertise, we have
						developed a reputation for delivering quality, reliability, and
						consistency.
					</p>
				</div>

				<div className="lg:w-[50%]">
					<Image
						src={"/images/about-us/who-we-are.jpg"}
						alt="Who we are"
						height={1000}
						width={1000}
						className="w-full h-full rounded-lg"
					/>
				</div>
			</section>

			{/* Our modern facilities */}
			<section className="flex lg:flex-row flex-col-reverse bg-custom-gray gap-16 px-10 py-12">
				<div className="lg:w-[50%]">
					<h2 className="font-poppins lg:text-heading lg:tracking-text text-heading-mobile tracking-text-mobile text-custom-yellow">
						OUR MODERN FACILITIES
					</h2>
					<p className="font-roboto lg:tracking-text lg:text-normal text-normal-mobile tracking-text-mobile text-justify">
						Our modern facility is equipped with advanced headers, rolling
						machines, and BT cut machines. This infrastructure enables us to
						achieve high volume production with uncompromised accuracy. Each
						product is manufactured to meet stringent industry standards and
						ensure superior performance. A dedicated quality control system is
						followed at every stage of production.
					</p>
				</div>

				<div className="lg:w-[50%]">
					<Image
						src={"/images/about-us/our-modern-facilities.jpg"}
						alt="Who we are"
						height={1000}
						width={1000}
						className="w-full h-full rounded-lg"
					/>
				</div>
			</section>

			{/* Our workforces */}
			<section className="flex lg:flex-row-reverse flex-col-reverse gap-16 px-10 py-12">
				<div className="lg:w-[50%]">
					<h2 className="font-poppins lg:text-heading lg:tracking-text text-heading-mobile tracking-text-mobile text-custom-yellow lg:text-right">
						OUR WORKFORCES
					</h2>
					<p className="font-roboto lg:tracking-text lg:text-normal tracking-text-mobile text-normal-mobile text-justify">
						Our skilled workforce combines technical knowledge with practical
						expertise to maintain excellence. We are committed to providing cost
						effective, durable, and innovative fastening solutions. Timely
						delivery and continuous improvement remain the foundation of our
						business operations. We adapt to evolving market requirements with
						flexibility and efficiency.
					</p>
				</div>

				<div className="lg:w-[50%]">
					<Image
						src={"/images/about-us/our-workforces.jpg"}
						alt="Who we are"
						height={1000}
						width={1000}
						className="w-full h-full rounded-lg"
					/>
				</div>
			</section>

			{/* Our mission */}
			<section className="flex lg:flex-row flex-col-reverse bg-custom-gray gap-16 px-10 py-12">
				<div className="lg:w-[50%]">
					<h2 className="font-poppins lg:text-heading lg:tracking-text text-heading-mobile tracking-text-mobile text-custom-yellow">
						OUR MISSION
					</h2>
					<p className="font-roboto lg:tracking-text lg:text-normal  text-normal-mobile tracking-text-mobile text-justify">
						The company focuses on building long-term, mutually beneficial
						relationships with all stakeholders. Customer satisfaction is
						central to our philosophy and drives our growth. We emphasize the
						integration of technology, precision, and innovation in every
						process. Today, Anita Engineering Works continues to progress as a
						leading manufacturer in the fasteners industry.
					</p>
				</div>

				<div className="lg:w-[50%]">
					<Image
						src={"/images/about-us/our-mission.jpg"}
						alt="Who we are"
						height={1000}
						width={1000}
						className="w-full h-full rounded-lg"
					/>
				</div>
			</section>
		</>
	);
}
