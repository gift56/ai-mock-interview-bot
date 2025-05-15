import { AuthForm } from "@/components/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Highlights the core of challenging interview questions.",
};

export default function SignInPage() {
  return <AuthForm type="sign-in" />;
}
