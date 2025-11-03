import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BoxIcon, Folder, Plus, SearchIcon } from "lucide-react";

export default function Navbar() {
  const user = {
    name: "John Doe",
    avatar:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?d=identicon&r=pg&f=1",
    email: "LbA9o@example.com",
  };
  return (
    <nav className="w-full  flex items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <Link href="/">
          <div className="flex items-center gap-2">
            {/* <Image
              src="/next.svg"
              alt="Comic App Logo"
              width={32}
              height={32}
            /> */}
            <BoxIcon size={32} />
            <span className="font-bold text-xl italic">COMIC FOLDER</span>
          </div>
        </Link>
      </div>
      <div className="flex-1 flex items-center gap-6 mx-20">
        <Link href="/">HOME</Link>
        <Link href="/genre">GENRE</Link>
        <Link href="/auth/sign-in">
          <Button variant="outline">
            DASHBOARD
            <Plus size={36} />
          </Button>
        </Link>
        <div>
          <div className="relative w-full max-w-sm">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="FIND BY TITLE OR AUTHOR"
              className="pl-10 w-sm"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/profile">
          <Button variant="link" size="lg">
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </Button>
        </Link>
        <Button variant="outline">SIGN OUT</Button>
        {/* <Link href="/auth/sign-in">
          <Button variant="outline">Sign In</Button>
        </Link>
        <Link href="/auth/sign-in">
          <Button variant="outline">Sign Up</Button>
        </Link> */}
      </div>
    </nav>
  );
}
