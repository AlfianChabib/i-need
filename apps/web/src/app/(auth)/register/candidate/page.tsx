import SeparatorText from "@/components/separator-text";
import RegisterCandidateForm from "./register-candidate-form";
import AuthTemplate from "@/components/templates/auth-template";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SignUpCandidatePage() {
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
          <h2 className="text-2xl font-semibold text-foreground/85">Welcome to INeed</h2>
          <p className="text-sm text-foreground/60">Create your account</p>
        </div>
        <RegisterCandidateForm />
        <SeparatorText>Or start with</SeparatorText>
        <Link
          href="/register/company"
          className={buttonVariants({ className: "bg-gradient-to-r from-red-600 to-yellow-600 font-normal" })}
        >
          Companies Account
        </Link>
        <div className="flex items-center justify-center">
          <Link href="/login" className="text-sm text-foreground/60">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </AuthTemplate>
  );
}
