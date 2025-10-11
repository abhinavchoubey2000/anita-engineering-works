import React from "react";
import Banner from "@/components/Banner";

export default function Layout({ children }) {
	return (
		<>
			<Banner image="/images/banners/contact-us.jpg">
				<h1 className="lg:text-heading-banner text-heading-banner-mobile font-poppins text-white">
					CONTACT US
				</h1>
			</Banner>
			<div className="lg:px-10 lg:py-12 px-2 py-4">{children}</div>
		</>
	);
}
