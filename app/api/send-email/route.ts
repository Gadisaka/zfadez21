import { NextResponse } from "next/server";
import { Resend } from "resend";

// fix before production

const resend = new Resend("re_4YBLdV11_KHEGPPy7RmEfNVB4H7hgTk4h");

export async function POST(req: Request) {
  if (req.method !== "POST") {
    console.log("Method Not Allowed");

    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  try {
    const { name, email, phone, product, quantity, totalPrice } =
      await req.json();

    // resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'gzaceldama@gmail.com',
    //   subject: 'Hello World',
    //   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    // });

    const response = await resend.emails.send({
      from: "Zfadez21  <orders@gadisa.software>", // Must be verified in Resend
      to: [email, "gzaceldama@gmail.com"], // Customer + Admin email
      subject: "Order Confirmation",
      html: `
        <h2>Thank you for your order, ${name}!</h2>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Total Price:</strong> $${totalPrice}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p>You will receive a call from us soon.</p>
      `,
    });

    return NextResponse.json({
      message: "Email sent successfully!",
      data: response,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
