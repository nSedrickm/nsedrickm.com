import { NextResponse } from "next/server";
const { MailtrapClient } = require("mailtrap");

interface Body {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: Body = await request.json();

    const client = new MailtrapClient({
      endpoint: "https://send.api.mailtrap.io/",
      token: process.env.MAILTRAP_KEY,
    });

    const sender = {
      email: "mailtrap@nsedrickm.com",
      name: "nsedrickm.com",
    };

    const recipients = [
      {
        email: "nsedrickm@gmail.com",
      },
      {
        email: "hello@nsedrickm.com",
      },
    ];

    const mail = {
      from: sender,
      to: recipients,
      subject: data.subject || "New message from nsedrickm.com",
      html: `
      <!doctype html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body style="font-family: sans-serif;">
          <div style="display: block; margin: auto; max-width: 600px;" class="main">
            <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">${data.subject}</h1>
            <p>${data.message}</p>
            <p>Best regards,<br />${data.name}</p>
            <p>${data.email}</p>
          </div>
          <!-- Example of invalid for email html/css, will be detected by Mailtrap: -->
          <style>
            .main { background-color: white; }
            a:hover { border-left-width: 1em; min-height: 2em; }
          </style>
        </body>
      </html>
    `,
      category: "inbound from nsedrickm.com",
    };

    await client.send(mail);

    return NextResponse.json(data);
  } catch (error) {
    NextResponse.error();
  }
}
