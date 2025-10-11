import React from "react";
import Banner from "@/components/Banner";

export default function Layout({ children }) {
	return (
		<>
			<Banner image="/images/banners/others.jpg">
				<h1 className="lg:text-heading-banner text-heading-banner-mobile font-poppins text-white">
					OTHERS
				</h1>
			</Banner>
			<div>{children}</div>
		</>
	);
}
