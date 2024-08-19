import { render } from "@react-email/render";
import resend from "../../utils/resend";
import Verification from "../../templates/verification";
import { ResponseError } from "../response-error";

export async function sendEmail(email: string, html: string, subject: string) {
  return await resend.emails.send({
    // from: "INeed <noreply@ineed.my.id>",
    from: "Acme <onboarding@resend.dev>",
    to: "delivered@resend.dev",
    subject,
    html,
  });
}

export class SendEmail {
  static async verifyEmail(email: string, verifyTokenUrl: string, expiresDate: Date) {
    const html = render(Verification({ email, verifyTokenUrl, expiresDate }), { pretty: true });

    return await sendEmail(email, html, "Verify your email");
  }
}
