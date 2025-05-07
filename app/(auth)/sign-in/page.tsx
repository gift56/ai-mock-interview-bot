import { AuthForm } from "@/components/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - AI Mock Interview Bot",
};

export default function SignInPage() {
  return <AuthForm type="sign-in" />;
}
