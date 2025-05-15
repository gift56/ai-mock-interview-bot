import { UserAvatar } from "@/components/auth";
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
      <nav className="flex flex-row items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="QuestCore Logo" width={38} height={32} />
          <h2 className="text-primary-100">QuestCore</h2>
        </Link>
        <UserAvatar />
      </nav>
      {children}
    </div>
  );
}
