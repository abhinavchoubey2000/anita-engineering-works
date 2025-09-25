import React from "react";
import Banner from "@/components/Banner";

export default function Layout({ children }) {
	return (
		<>
			<Banner image="/images/home/custom-fastner.jpg">
				<h1 className="text-heading-banner font-poppins text-white">
					ABOUT US
				</h1>
			</Banner>
			<div>{children}</div>
		</>
	);
}
