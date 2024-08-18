import { render } from "@react-email/render";
import resend from "../../utils/resend";
import Verification from "../../templates/verification";
import { ResponseError } from "../response-error";

export async function sendEmail(email: string, html: string, subject: string) {
  return await resend.emails.send({
    from: "INeed <noreply@ineed.my.id>",
    to: email,
    subject,
    html,
  });
}

export class SendEmail {
  static async verifyEmail(email: string, url: string) {
    try {
      const html = render(Verification({ email, url }), { pretty: true });

      return await sendEmail(email, html, "Verify your email");
    } catch (error) {
      throw new ResponseError(500, "Failed to send verification email");
    }
  }
}
