import AuthTemplate from "@/components/templates/auth-template";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SignInCandidateForm from "./LoginForm";

export default function SignInCandidatePage() {
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
          <h2 className="text-2xl font-semibold text-foreground/85">Welcome back to INeed</h2>
          <p className="text-sm text-foreground/60">Login to your account</p>
        </div>
        <SignInCandidateForm />
        <div className="flex items-center justify-between">
          <Link href="/register/candidate" className="text-sm text-foreground/60">
            Don&apos;t have an account? Register
          </Link>
        </div>
        <Link href="/login" className={buttonVariants({ variant: "outline", className: "w-full" })}>
          For Companies
        </Link>
      </div>
    </AuthTemplate>
  );
}
