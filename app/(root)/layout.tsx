import { isAuthenticated } from "@/lib/actions/auth/auth.actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HomeRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="PrepWise Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
}
