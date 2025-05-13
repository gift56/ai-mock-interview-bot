"use client";

import { signOut } from "@/lib/actions/auth/auth.actions";
import { Button } from "../ui/button";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";

const SignOut = () => {
  // Sign out the user
  const handleSignOut = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <DropdownMenuContent>
      <DropdownMenuItem>
        <Button
          variant="ghost"
          className="w-full text-left flex items-center gap-2 !cursor-pointer"
          onClick={() => handleSignOut()}
        >
          <LogOutIcon className="w-4 h-4" />
          Sign Out
        </Button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};

export default SignOut;
