import React from "react";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { getCurrentUser } from "@/lib/actions/auth/auth.actions";
import SignOut from "./SignOut";

const UserAvatar: React.FC = async () => {
  const user = await getCurrentUser();

  if (!user) return null;

  // Extract initials from the user's name
  const getInitials = (name: string): string => {
    const nameParts = name.split(" ");
    return nameParts
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-full object-cover size-14 cursor-pointer flex items-center justify-center blue-gradient-dark text-white font-bold">
          <span className="uppercase text-xl">{getInitials(user.name)}</span>
        </div>
      </DropdownMenuTrigger>
      <SignOut />
    </DropdownMenu>
  );
};

export default UserAvatar;
