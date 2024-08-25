import AuthTemplate from "@/components/templates/auth-template";
import Image from "next/image";
import Link from "next/link";

async function verify(token: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_HOST;
  const res = await fetch(`${API_URL}/auth/verify`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  if (!res.ok) {
    throw new Error("Failed to verify token");
  }
  return res.json();
}

type VerifyProps = {
  params: { token: string };
};

export default async function verifyPage({ params }: VerifyProps) {
  const { token } = params;
  const data = await verify(token);
  console.log(data);

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
        <div className="h-40 w-40 flex items-center justify-center"></div>
        <div className="flex items-center justify-center">
          <Link href="/login" className="text-sm text-foreground/60">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </AuthTemplate>
  );
}
