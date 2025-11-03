import { ComicWithUser } from "@/types/Comic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { User } from "@/types/User";

export default function ArtistCard({ artist }: { artist: User }) {
  return (
    <Link href={`/comic/${artist.user_id}`} className="w-full">
      <div className="w-46 cursor-pointer overflow-hidden flex flex-col mx-auto justify-center items-center">
        <Avatar className="size-36">
          <AvatarImage
            className="w-full"
            src={artist.avatar}
            alt={artist.name}
          />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        {/* <Image
          src={artist.avatar}
          alt={artist.name}
          width={128}
          height={176}
          className="w-full "
        /> */}
        <div className="p-2 flex-1 flex flex-col justify-between gap-2 items-center">
          <h3 className=" font-semibold truncate text-lg ">{artist.name}</h3>
          <p className="float-left flex items-center gap-1 text-sm text-muted-foreground">
            {artist.email}
          </p>

          {/* <Link href="/main/profile">
            <Button className="flex items-center gap-2 p-0" variant={"link"}>
              <Avatar>
                <AvatarImage src={comic.user.avatar} alt={comic.user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <span className="truncate font-medium">{comic.user.name}</span>
            </Button>
          </Link> */}
        </div>
      </div>
    </Link>
  );
}
