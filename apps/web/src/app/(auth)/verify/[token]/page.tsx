import AuthTemplate from "@/components/templates/auth-template";
import { buttonVariants } from "@/components/ui/button";
import { MailCheck, MailWarning } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { verifyEmail } from "./action";

export const dynamic = "force-dynamic";

type VerifyProps = { params: { token: string } };

export default async function verifyPage({ params }: VerifyProps) {
  const data = await verifyEmail(params.token);

  return (
    <AuthTemplate>
      <div className="flex flex-col w-full max-w-md justify-between py-5 px-5 space-y-5">
        <Link href={"/"} className="h-8 w-8">
          <Image
            src={"/logo-black.png"}
            height={500}
            width={500}
            alt="logo"
            className="hover:scale-110 transition-all duration-200"
          />
        </Link>
        <div>
          <h2 className="text-2xl font-semibold text-foreground/85">Verifiying your account</h2>
          <p className="text-sm text-foreground/60">Please wait while we verify your account</p>
        </div>
        <div className="w-full flex items-center justify-center p-4">
          {data.success ? (
            <div className="flex flex-col items-center justify-center gap-2 text-green-500 border-2 border-green-500 rounded-md p-4 border-dashed">
              <MailCheck size={40} />
              <p>{data.message}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-red-500 border-2 border-red-500 rounded-md p-4 border-dashed">
              <MailWarning size={40} />
              <p className="text-md">{data.message}</p>
            </div>
          )}
        </div>
        {data.success && (
          <div className="flex items-center justify-center">
            <Link href="/login" className={buttonVariants({ variant: "default" })}>
              Login to your account
            </Link>
          </div>
        )}
        <div className="flex items-center justify-center">
          <Link href="/login" className="text-sm text-foreground/60">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </AuthTemplate>
  );
}
