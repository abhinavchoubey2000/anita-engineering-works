import Card from "@/components/Card";
import React from "react";
import { Phone, Mail, House } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

export default function ContactUs() {
	return (
		<>
			<section>
				<h3 className="lg:text-heading text-heading-mobile text-custom-yellow font-poppins">
					GET IN TOUCH
				</h3>

				<div className="flex lg:flex-row-reverse flex-col gap-5 ">
					{/* Contact Details */}
					<div className="lg:w-[50%] lg:h-[70vh]">
						<p className="lg:text-normal text-normal-mobile font-roboto text-justify lg:tracking-text tracking-text-mobile">
							As a trusted manufacturer of high-quality screws, we aim to
							provide reliable solutions for every industry. Contact us for
							inquiries, bulk orders, or partnership opportunities. Our experts
							are here to support your requirements.
						</p>
						<div className="flex flex-col justify-evenly h-full">
							<Link href={"https://wa.me/919599510490"}>
								<Card
									icon={<Phone className="text-custom-yellow" size={30} />}
									title="Contact"
									info={"+91 95995 10490"}
									type="info"
								/>
							</Link>
							<Link
								href={
									"https://mail.google.com/mail/?view=cm&fs=1&to=anitaengineeringworks@gmail.com"
								}
							>
								<Card
									icon={<Mail className="text-custom-yellow" size={30} />}
									title="Email"
									info={"aewmanish@gmail.com"}
									type="info"
								/>
							</Link>
							<Link href={"https://maps.app.goo.gl/xLMG6gpp44emdeJp7"}>
								<Card
									icon={<House className="text-custom-yellow" size={30} />}
									title="Address"
									info="Anita Engineering Works, Shabad Daulatpur, Delhi – 110042, India"
									type="info"
								/>
							</Link>
						</div>
					</div>
					{/* Contact Form */}
					<div className="lg:w-[50%] flex gap-3 flex-col justify-center items-center h-full bg-custom-yellow rounded-lg lg:px-10 px-2 py-10">
						<div className="w-full flex flex-col gap-5">
							<div className="flex lg:flex-row flex-col gap-3">
								<div className="flex flex-col w-full">
									<label
										className="font-roboto lg:tracking-text lg:text-normal tracking-text-mobile text-normal-mobile"
										htmlFor="name"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										className="font-roboto lg:tracking-text tracking-text-mobile text-normal-mobile bg-white lg:text-normal px-2 py-2 outline-custom-yellow"
									/>
								</div>
								<div className="flex flex-col w-full">
									<label
										htmlFor="phone"
										className="font-roboto lg:tracking-text lg:text-normal tracking-text-mobile text-normal-mobile"
									>
										Phone
									</label>
									<input
										type="text"
										id="phone"
										className="font-roboto lg:tracking-text tracking-text-mobile text-normal-mobile bg-white lg:text-normal px-2 py-2 outline-custom-yellow"
									/>
								</div>
							</div>
							<div className="flex flex-col w-full">
								<label
									htmlFor="email"
									className="font-roboto lg:tracking-text lg:text-normal tracking-text-mobile text-normal-mobile"
								>
									Email
								</label>
								<input
									type="text"
									id="email"
									className="font-roboto lg:tracking-text tracking-text-mobile text-normal-mobile bg-white lg:text-normal px-2 py-2 outline-custom-yellow"
								/>
							</div>
							<div className="flex flex-col w-full">
								<label
									htmlFor="message"
									className="font-roboto lg:tracking-text lg:text-normal tracking-text-mobile text-normal-mobile"
								>
									Message
								</label>
								<textarea
									rows={6}
									type="text"
									id="message"
									className="resize-none font-roboto lg:tracking-text tracking-text-mobile text-normal-mobile bg-white lg:text-normal px-2 py-2 outline-custom-yellow"
								/>
							</div>
						</div>
						<Button
							label={"Submit"}
							className="hover:bg-black hover:text-white px-14 my-6"
						/>
					</div>
				</div>
			</section>
			<section className="py-20">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.959733061059!2d77.13940447482163!3d28.750619175600406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0162419d47a9%3A0x69dfa07257979116!2sAnita%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1758827392258!5m2!1sen!2sin"
					width="100%"
					height="250"
					style={{ border: 0, borderRadius: "10px" }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</section>
		</>
	);
}
