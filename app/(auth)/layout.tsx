import { isAuthenticated } from "@/lib/actions/auth/auth.actions";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "PrepWise | Auth",
  },
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");

  return <div className="auth-layout">{children}</div>;
}
