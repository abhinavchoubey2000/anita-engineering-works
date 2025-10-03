import React from "react";
import Banner from "@/components/Banner";

export default function Layout({ children }) {
	return (
		<>
			<Banner image="/images/home/custom-fastner.jpg">
				<h1 className="lg:text-heading-banner text-heading-banner-mobile font-poppins text-white">
					SCREWS
				</h1>
			</Banner>
			<div>{children}</div>
		</>
	);
}
