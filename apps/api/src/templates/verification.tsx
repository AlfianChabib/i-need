import React from "react";

export default function Verification({ email, url }: { email: string; url: string }) {
  return (
    <div>
      <h1>Verify your email</h1>
      <p>We have sent a verification email to {email}</p>
      <p>We have sent a verification email to {url}</p>
    </div>
  );
}
