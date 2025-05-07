import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "PrepWise | Auth",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="auth-layout">{children}</div>;
}
