import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";
import SignOutButton from "@/components/SignOutButton";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex flex-row justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepShape</h2>
        </Link>
        <SignOutButton />
      </nav>

      {children}
    </div>
  );
};

export default Layout;
