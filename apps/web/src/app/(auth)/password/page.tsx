import AuthTemplate from "@/components/templates/auth-template";
import Image from "next/image";
import Link from "next/link";

export default function page() {
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
          <h2 className="text-2xl font-semibold text-foreground/85">Password</h2>
          <p className="text-sm text-foreground/60">Change your password</p>
        </div>
        {/* form */}
        <div className="flex items-center justify-center">
          <Link href="/sign-in/company" className="text-sm text-foreground/60">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </AuthTemplate>
  );
}