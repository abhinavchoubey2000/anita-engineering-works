import nodemailer from "nodemailer";

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, phone, query } = body;

		if (!name || !email || !query)
			return Response.json(
				{
					success: false,
					message: "The following fields Name, Email and Query are compulsory.",
				},
				{ status: 400 }
			);

		const transporter = nodemailer.createTransport({
			service: process.env.NEXT_PUBLIC_NODEMAILER_SERVICE,
			auth: {
				user: process.env.NEXT_PUBLIC_NODEMAILER_SERVICE_USERNAME,
				pass: process.env.NEXT_PUBLIC_NODEMAILER_SERVICE_PASSWORD,
			},
		});

		const mailOptions = {
			from: email.toLowerCase(),
			to: process.env.NEXT_PUBLIC_NODEMAILER_SERVICE_USERNAME,
			subject: `Query from ${name.trim()}`,
			html: `
            <h3>Hi, I my name is ${name}, ${
				phone && `my phone number is ${phone}`
			} and my email is ${email.toLowerCase()}.</h3>
            <br>
            <p>I recently visited to your website and have some queries which are as follows - <b><i>${query}</i></b></p>.
            <br>
            <p>Will be waiting for your reply at your earliest convinience</p>
            `,
		};

		const info = await transporter.sendMail(mailOptions);

		return Response.json(
			{ success: true, info, message: "Query sent successfully." },
			{ status: 200 }
		);
	} catch (error) {
		return Response.json({ error: "Server error" }, { status: 500 });
	}
}
