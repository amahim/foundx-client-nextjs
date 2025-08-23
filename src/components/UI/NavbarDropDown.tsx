"use client";

import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthService";
import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import Link from "next/link";

export default function NavbarDropDown() {

  const { user, setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
         <Avatar className="cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>

      <DropdownMenu aria-label="Profile Menu">
        <DropdownItem as={Link} href="/profile" key="profile">
          Profile
        </DropdownItem>

        <DropdownItem as={Link} href="/profile/about" key="about">
          About
        </DropdownItem>

        <DropdownItem as={Link} href="/profile/create-post" key="create-post">
          Create Post
        </DropdownItem>

        <DropdownItem as={Link} href="/profile/claim-requests" key="claim-requests">
          Claim Requests
        </DropdownItem>

        <DropdownItem as={Link} href="/profile/settings" key="settings">
          Settings
        </DropdownItem>
        <DropdownItem  onClick={() => handleLogout()} key="logout" className="text-red-500">
            Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
