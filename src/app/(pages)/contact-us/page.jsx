import Card from "@/components/Card";
import React from "react";
import { Phone, Home, Mail } from "lucide-react";
import Button from "@/components/Button";

export default function ContactUs() {
	return (
		<>
			<section>
				<h3 className="text-heading text-custom-yellow font-poppins">
					GET IN TOUCH
				</h3>

				<div className="flex gap-5 ">
					{/* Contact Details */}
					<div className="w-[50%] h-[70vh]">
						<p className="text-normal font-roboto text-justify tracking-text">
							As a trusted manufacturer of high-quality screws, we aim to
							provide reliable solutions for every industry. Contact us for
							inquiries, bulk orders, or partnership opportunities. Our experts
							are here to support your requirements.
						</p>
						<div className="flex flex-col justify-evenly h-full">
							<Card
								icon={<Phone className="text-custom-yellow" size={30} />}
								title="Contact"
								info={"+91 95995 10490"}
								type="info"
							/>
							<Card
								icon={<Mail className="text-custom-yellow" size={30} />}
								title="Email"
								info={"aewmanish@gmail.com"}
								type="info"
							/>
							<Card
								icon={<Home className="text-custom-yellow" size={30} />}
								title="Address"
								info="Anita Engineering Works, Shabad Daulatpur, Delhi – 110042, India"
								type="info"
							/>
						</div>
					</div>
					{/* Contact Form */}
					<div className="w-[50%] flex gap-3 flex-col justify-center items-center h-full bg-custom-yellow rounded-lg px-10 py-10">
						<div className="w-full flex flex-col gap-5">
							<div className="flex gap-3">
								<div className="flex flex-col w-full">
									<label
										className="font-roboto tracking-text text-normal"
										htmlFor="name"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										className="font-roboto tracking-text bg-white text-normal px-2 py-2 outline-custom-yellow"
									/>
								</div>
								<div className="flex flex-col w-full">
									<label
										htmlFor="phone"
										className="font-roboto tracking-text text-normal"
									>
										Phone
									</label>
									<input
										type="text"
										id="phone"
										className="font-roboto tracking-text bg-white text-normal px-2 py-2 outline-custom-yellow "
									/>
								</div>
							</div>
							<div className="flex flex-col w-full">
								<label
									htmlFor="email"
									className="font-roboto tracking-text text-normal"
								>
									Email
								</label>
								<input
									type="text"
									id="email"
									className="font-roboto tracking-text bg-white text-normal px-2 py-2 outline-custom-yellow "
								/>
							</div>
							<div className="flex flex-col w-full">
								<label
									htmlFor="message"
									className="font-roboto tracking-text text-normal "
								>
									Message
								</label>
								<textarea
									rows={6}
									type="text"
									id="message"
									className="resize-none font-roboto tracking-text bg-white text-normal px-2 py-2 outline-custom-yellow "
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
