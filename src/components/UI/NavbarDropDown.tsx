"use client";

import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import Link from "next/link";

export default function NavbarDropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar name="Ron" className="cursor-pointer" />
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
        <DropdownItem key="logout" className="text-red-500">
            Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
