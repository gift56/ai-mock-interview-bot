import { AuthForm } from "@/components/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create An Account - Practice job interviews with AI",
};

export default function SignUpPage() {
  return <AuthForm type="sign-up" />;
}
