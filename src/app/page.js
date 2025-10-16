"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Partners from "@/components/Partners";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Animation } from "@/utils/animations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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

	// Banner Animations
	const bannerHeadingAnim = new Animation();
	const bannerSubHeadingAnim = new Animation();
	const bannerButtonAnim = new Animation();

	// Category Animations
	const categoryHeadingAnim = new Animation();
	const categoryCardsAnim = new Animation();

	// Company Animations
	const companyHeadingAnim = new Animation();
	const companyTextAnim = new Animation();

	// Partners Animations
	const partnersSectionAnim = new Animation();

	// Certifications Animations
	const certificationsHeading = new Animation();
	const certificationText = new Animation();
	const certificationCertificates = new Animation();

	// Custom Fasteners Animations
	const customFastenerHeading = new Animation();
	const customFastenerSubHeading = new Animation();
	const customFastenerButton = new Animation();

	useGSAP(() => {
		bannerHeadingAnim.fade("up", 1.5, 60);
		bannerSubHeadingAnim.fade("up", 1.8, 60);
		bannerButtonAnim.fade("up", 1, 200);

		categoryHeadingAnim.fade(
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
		categoryCardsAnim.fade(
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

		companyHeadingAnim.fade(
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
		companyTextAnim.fade(
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

		partnersSectionAnim.fade(
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

		certificationsHeading.fade(
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
		certificationText.fade(
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
		certificationCertificates.fade(
			"up",
			2,
			70,
			"from",
			true,
			{ stagger: 2 },
			{
				scroller: "body",
				scrub: 1,
				start: "top 90%",
				end: "bottom 70%",
				delay: 2,
			}
		);

		customFastenerHeading.fade(
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
		customFastenerSubHeading.fade(
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
		customFastenerButton.fade(
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
			{/* Banner */}
			<section
				style={{
					backdropFilter: "blur(2px)",
					background: "url(/images/home/two.jpeg)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="lg:h-screen w-full py-20 backdrop-blur-[10px] flex flex-col items-center justify-center">
					<div className="flex flex-col items-center  lg:block">
						<h1
							ref={bannerHeadingAnim.getRef()}
							className="main-heading lg:text-[6.5rem] lg:text-left lg:tracking-wide text-heading-banner-mobile text-center font-poppins text-white"
						>
							ANITA <span className="text-white">ENGINEERING</span> WORKS
						</h1>
						<h2
							ref={bannerSubHeadingAnim.getRef()}
							className="lg:text-sub-heading-banner lg:text-left text-center text-sub-heading-banner-mobile font-poppins text-white"
						>
							Precision <span className="text-white">fasteners</span> for every
							industry
						</h2>
						<Button
							ref={bannerButtonAnim.getRef()}
							label={"Find out more"}
							className="hover:bg-black hover:text-white lg:px-14 lg:my-6 my-6 px-10"
						/>
					</div>
				</div>
			</section>

			{/* Product Categories */}
			<section className="bg-custom-gray lg:px-10 lg:py-12 px-2 py-4">
				<h2
					ref={categoryHeadingAnim.getRef()}
					className="text-custom-yellow font-poppins lg:text-heading text-heading-mobile"
				>
					OUR PRODUCTS
				</h2>
				<div
					ref={categoryCardsAnim.getRef()}
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

			{/* Company */}
			<section
				id="company"
				className="w-full flex lg:flex-row flex-col-reverse"
			>
				<div className="lg:w-[50%] w-[100%] bg-custom-yellow lg:px-10 lg:py-12 px-2 py-4 flex flex-col gap-6">
					<h2
						ref={companyHeadingAnim.getRef()}
						className="lg:text-heading text-heading-mobile font-poppins text-white text-center"
					>
						Anita Engineering Works
					</h2>
					<p
						ref={companyTextAnim.getRef()}
						className="lg:text-normal text-normal-mobile font-roboto lg:tracking-text tracking-text-mobile text-justify"
					>
						Anita Engineering Works, established in 1998, is a trusted name in
						the field of fastener manufacturing. We specialize in the production
						of screws, bolts, nuts, and precision fasteners designed for diverse
						industrial applications. With over two decades of expertise, we have
						developed a reputation for delivering quality, reliability, and
						consistency. Our modern facility is equipped with advanced headers,
						rolling machines, and BT cut machines. This infrastructure enables
						us to achieve high-volume production with uncompromised accuracy.
					</p>
				</div>
				<div
					className="lg:w-[50%] w-[100%] lg:h-[100vh] h-[50vh]"
					style={{ background: "url(images/home/company.jpg)" }}
				></div>
			</section>

			{/* Partners */}
			<Partners ref={partnersSectionAnim.getRef()} logosArray={partners} />

			{/* Certifications */}
			<section id="certifications" className="bg-custom-gray">
				<div className="lg:px-10 lg:py-12 px-2 py-4">
					<h2
						ref={certificationsHeading.getRef()}
						id="c-1"
						className="text-custom-yellow font-poppins lg:text-heading text-heading-mobile"
					>
						CERTIFICATIONS AND AUTHORIZATIONS
					</h2>
					<p
						ref={certificationText.getRef()}
						id="c-2"
						className="lg:text-normal font-roboto lg:tracking-text text-normal-mobile tracking-text-mobile"
					>
						Because we a trusted compnay, we are very transparent with our
						clients. Here are our certifications which make us more reliable and
						trusted in this industry.
					</p>
				</div>
				<div
					ref={certificationCertificates.getRef()}
					className="flex flex-col items-center"
				>
					<div className="flex lg:flex-row flex-col gap-20 py-12">
						<Image
							id="c-3"
							src="/images/home/certificate.jpg"
							alt="certificate"
							className=" border-black border-4 shadow-2xl p-3"
							height={"400"}
							width={"400"}
						/>
						<Image
							id="c-4"
							src="/images/home/certificate.jpg"
							alt="certificate"
							className="border-black border-4 shadow-2xl p-3"
							height={"400"}
							width={"400"}
						/>
					</div>
					<Button
						label={"Know more about us"}
						className="hover:bg-black hover:text-white px-14 my-6"
					/>
				</div>
			</section>

			{/* Custom Fastners */}
			<section
				id="custom-fasteners"
				style={{
					background: "url(/images/home/custom-fastner.jpg)",
				}}
			>
				<div
					style={{
						width: "100%",
						backdropFilter: "blur(10px)",
						WebkitBackdropFilter: "blur(10px)",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
					className="px-10 py-22"
				>
					<div>
						<h1
							ref={customFastenerHeading.getRef()}
							id="f-1"
							className="lg:text-sub-heading-banner text-sub-heading-banner-mobile font-poppins text-white"
						>
							DO YOU WANT YOUR{" "}
							<span className="text-custom-yellow">CUSTOM FASTENERS</span> ?
						</h1>
						<h2
							ref={customFastenerSubHeading.getRef()}
							id="f-2"
							className="lg:text-[1.8rem] text-[1rem] py-6 font-poppins text-white self-start"
						>
							Custom sizes, threading, head types, coatings, or CNC-turned parts
							as per client drawing/specification.
						</h2>
						<Button
							ref={customFastenerButton.getRef()}
							label={"Contact Us"}
							className="hover:bg-black hover:text-white px-14 my-6"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
