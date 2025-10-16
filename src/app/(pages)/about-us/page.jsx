"use client";
import Partners from "@/components/Partners";
import Card from "@/components/Card";
import React from "react";
import Image from "next/image";
import { Animation } from "@/utils/animations";
import { useGSAP } from "@gsap/react";

export default function AboutUs() {
	const partners = [
		"/images/partners/ericsson.png",
		"/images/partners/jio.png",
		"/images/partners/lg.png",
		"/images/partners/oakter.png",
		"/images/partners/ola.png",
		"/images/partners/vvdn.png",
		"/images/partners/ericsson.png",
		"/images/partners/jio.png",
		"/images/partners/lg.png",
		"/images/partners/oakter.png",
		"/images/partners/ola.png",
		"/images/partners/vvdn.png",
		"/images/partners/ericsson.png",
		"/images/partners/jio.png",
		"/images/partners/lg.png",
		"/images/partners/oakter.png",
		"/images/partners/ola.png",
		"/images/partners/vvdn.png",
		"/images/partners/ericsson.png",
		"/images/partners/jio.png",
		"/images/partners/lg.png",
		"/images/partners/oakter.png",
		"/images/partners/ola.png",
		"/images/partners/vvdn.png",
		"/images/partners/ericsson.png",
		"/images/partners/jio.png",
		"/images/partners/lg.png",
		"/images/partners/oakter.png",
		"/images/partners/ola.png",
		"/images/partners/vvdn.png",
		"/images/partners/ericsson.png",
		"/images/partners/jio.png",
		"/images/partners/lg.png",
		"/images/partners/oakter.png",
		"/images/partners/ola.png",
		"/images/partners/vvdn.png",
		"/images/partners/ericsson.png",
		"/images/partners/jio.png",
		"/images/partners/lg.png",
		"/images/partners/oakter.png",
		"/images/partners/ola.png",
		"/images/partners/vvdn.png",
		"/images/partners/ericsson.png",
		"/images/partners/jio.png",
		"/images/partners/lg.png",
		"/images/partners/oakter.png",
		"/images/partners/ola.png",
		"/images/partners/vvdn.png",
		"/images/partners/ericsson.png",
		"/images/partners/jio.png",
		"/images/partners/lg.png",
		"/images/partners/oakter.png",
		"/images/partners/ola.png",
		"/images/partners/vvdn.png",
	];
	const partnersSectionAnim = new Animation();
	const founderImage = new Animation();
	const founderHeading = new Animation();
	const founderText = new Animation();
	const categoryHeading = new Animation();
	const categorySection = new Animation();
	const section1Image = new Animation();
	const section1Text = new Animation();
	const section2Image = new Animation();
	const section2Text = new Animation();
	const section3Image = new Animation();
	const section3Text = new Animation();
	const section4Image = new Animation();
	const section4Text = new Animation();

	useGSAP(() => {
		partnersSectionAnim.fade("up", 2, 70, "from", false);

		founderHeading.fade(
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
		founderImage.fade(
			"left",
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
		founderText.fade(
			"right",
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

		categoryHeading.fade(
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
		categorySection.fade(
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

		section1Image.fade(
			"left",
			2,
			70,
			"from",
			true,
			{},
			{
				scroller: "body",
				scrub: 1,
				start: "top 60%",
				end: "bottom 70%",
				delay: 2,
			}
		);
		section1Text.fade(
			"right",
			2,
			70,
			"from",
			true,
			{},
			{
				scroller: "body",
				scrub: 1,
				start: "top 60%",
				end: "bottom 70%",
				delay: 2,
			}
		);
		section2Image.fade(
			"left",
			2,
			70,
			"from",
			true,
			{},
			{
				scroller: "body",
				scrub: 1,
				start: "top 60%",
				end: "bottom 70%",
				delay: 2,
			}
		);
		section2Text.fade(
			"right",
			2,
			70,
			"from",
			true,
			{},
			{
				scroller: "body",
				scrub: 1,
				start: "top 60%",
				end: "bottom 70%",
				delay: 2,
			}
		);
		section3Image.fade(
			"left",
			2,
			70,
			"from",
			true,
			{},
			{
				scroller: "body",
				scrub: 1,
				start: "top 60%",
				end: "bottom 70%",
				delay: 2,
			}
		);
		section3Text.fade(
			"right",
			2,
			70,
			"from",
			true,
			{},
			{
				scroller: "body",
				scrub: 1,
				start: "top 60%",
				end: "bottom 70%",
				delay: 2,
			}
		);
		section4Image.fade(
			"left",
			2,
			70,
			"from",
			true,
			{},
			{
				scroller: "body",
				scrub: 1,
				start: "top 60%",
				end: "bottom 70%",
				delay: 2,
			}
		);
		section4Text.fade(
			"right",
			2,
			70,
			"from",
			true,
			{},
			{
				scroller: "body",
				scrub: 1,
				start: "top 60%",
				end: "bottom 70%",
				delay: 2,
			}
		);
	});
	return (
		<>
			{/* Our partners */}
			<Partners
				ref={partnersSectionAnim.getRef()}
				title={"OUR PARTNERS"}
				logosArray={partners}
			/>

			{/* Founders Message */}
			<section className="bg-custom-gray lg:py-12 py-4">
				<h1
					ref={founderHeading.getRef()}
					className="text-custom-yellow font-poppins lg:text-heading text-heading-mobile text-center"
				>
					Founder's Message
				</h1>
				<div className="flex lg:flex-row flex-col lg:px-10 px-2 justify-center items-center gap-6">
					<Image
						ref={founderImage.getRef()}
						src={"/images/founder/founder-image.png"}
						alt="Founder Image"
						height={1000}
						width={1000}
						className="object-contain h-[30rem] w-[30rem] rounded-full"
					/>
					<div ref={founderText.getRef()} className="flex flex-col">
						<Image
							src={"/images/founder/double-inverted-comma.png"}
							alt="Founder Image"
							height={1000}
							width={1000}
							className="object-contain h-20 w-20 rounded-full"
						/>
						<p className="font-roboto lg:tracking-text tracking-text-mobile text-normal-mobile lg:text-normal text-justify">
							When we established Anita Engineering Works in 1998, our vision
							was simple yet ambitious: to build a company that would become
							synonymous with precision, reliability, and trust in the fasteners
							industry. Over the past two decades, that vision has evolved into
							reality through unwavering commitment to quality and innovation.
							Today, I am proud to say that we stand as trusted partners to
							India's leading OEMs, holding industries together—quite
							literally—with every screw, bolt, and fastener we manufacture. Our
							success stems from a deep respect for craftsmanship, investment in
							cutting-edge technology, and above all, a team that brings passion
							and expertise to every production stage. As we continue to grow,
							our core philosophy remains unchanged: to deliver fastening
							solutions that our customers can depend on, every single time. We
							don't just manufacture fasteners; we forge partnerships built on
							consistency, timely delivery, and mutual growth. Thank you for
							placing your trust in Anita Engineering Works—together, we will
							continue powering progress with precision.
						</p>
						<Image
							src={"/images/founder/double-inverted-comma-2.png"}
							alt="Founder Image"
							height={1000}
							width={1000}
							className="self-end object-contain h-20 w-20 rounded-full"
						/>
					</div>
				</div>
			</section>

			{/* Products we manufacture */}
			<section className="bg-custom-gray lg:px-10 lg:py-12 px-2 py-4">
				<h2
					ref={categoryHeading.getRef()}
					className="text-custom-yellow font-poppins lg:text-heading text-heading-mobile"
				>
					PRODUCTS WE MANUFACTURE
				</h2>
				<div
					ref={categorySection.getRef()}
					className="flex lg:flex-row flex-wrap lg:gap-10 gap-5 justify-center py-10"
				>
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
			<section className="flex lg:flex-row-reverse flex-col-reverse gap-16 lg:px-10 lg:py-12 px-2 py-4">
				<div ref={section1Text.getRef()} className="lg:w-[50%]">
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

				<div ref={section1Image.getRef()} className="lg:w-[50%]">
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
			<section className="flex lg:flex-row flex-col-reverse bg-custom-gray gap-16 lg:px-10 lg:py-12 px-2 py-4">
				<div ref={section2Text.getRef()} className="lg:w-[50%]">
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

				<div ref={section2Image.getRef()} className="lg:w-[50%]">
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
			<section className="flex lg:flex-row-reverse flex-col-reverse gap-16 lg:px-10 lg:py-12 px-2 py-4">
				<div ref={section3Text.getRef()} className="lg:w-[50%]">
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

				<div ref={section3Image.getRef()} className="lg:w-[50%]">
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
			<section className="flex lg:flex-row flex-col-reverse bg-custom-gray gap-16 lg:px-10 lg:py-12 px-2 py-4">
				<div ref={section4Text.getRef()} className="lg:w-[50%]">
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

				<div ref={section4Image.getRef()} className="lg:w-[50%]">
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
