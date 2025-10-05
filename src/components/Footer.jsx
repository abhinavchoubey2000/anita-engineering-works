"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Home, PhoneCall, Mail } from "lucide-react";

export default function Footer({
	description,
	linksRow1,
	linksRow2,
	contactDetails,
}) {
	return (
		<div className="px-10 py-10 flex lg:flex-row flex-col gap-15">
			<div className="logo-description lg:w-[25%] w-full font-roboto text-normal flex flex-col gap-6">
				<Logo />
				<p className="text-[14px] tracking-[2px] text-justify">{description}</p>
			</div>
			<div className="links-row-1 flex flex-col lg:w-[25%] w-full gap-6">
				<h3 className="text-custom-yellow text-normal font-roboto font-bold">
					COMPANY
				</h3>
				<div className="flex flex-col">
					{linksRow1.map((link) => (
						<Link
							key={link.path}
							className={`text-[14px] tracking-[2px] font-roboto py-2`}
							href={link.path}
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>
			<div className="links-row-2 flex flex-col lg:w-[25%] w-full gap-6">
				<h3 className="text-custom-yellow text-normal font-roboto font-bold">
					PRODUCTS
				</h3>
				<div className="flex flex-col">
					{linksRow2.map((link) => (
						<Link
							key={link.path}
							className={`text-[14px] tracking-[2px] font-roboto py-2`}
							href={link.path}
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>
			<div className="contact-details flex flex-col lg:w-[25%] w-full gap-6">
				<h3 className="text-custom-yellow text-normal font-roboto font-bold">
					CONTACT INFO
				</h3>
				<div>
					<div className="address flex items-start gap-4 py-2">
						<Home className="text-custom-yellow" />
						<p className="tracking-[2px] font-roboto text-[14px]">
							{contactDetails.address}
						</p>
					</div>
					<div className="mail-id flex items-center gap-4 py-2">
						<Mail size={18} className="text-custom-yellow" />
						<Link
							href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactDetails.email_1}`}
						>
							<p className="tracking-[2px] font-roboto text-[14px]">
								{contactDetails.email_1}
							</p>
						</Link>
					</div>

					<Link
						href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactDetails.email_2}`}
					>
						<div className="mail-id flex items-center gap-4 py-2">
							<Mail size={18} className="text-custom-yellow" />
							<p className="tracking-[2px] font-roboto text-[14px]">
								{contactDetails.email_2}
							</p>
						</div>
					</Link>
					<div className="phone-number flex items-center gap-4 py-2">
						<PhoneCall size={18} className="text-custom-yellow" />
						<p className="tracking-[2px] font-roboto text-[14px]">
							{contactDetails.phone}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
