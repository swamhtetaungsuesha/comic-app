import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

export default function ComicCard({
  comic,
}: {
  comic: ComicWithUser | Omit<Comic, "user_id">;
}) {
  function hasUser(
    comic: Omit<Comic, "user_id"> | ComicWithUser
  ): comic is ComicWithUser {
    return (comic as ComicWithUser).user !== undefined;
  }
  return (
    <Link href={`/comic/${comic.comic_id}`} className="w-full">
      <div className="w-46 cursor-pointer overflow-hidden flex flex-col mx-auto">
        <Image
          src={comic.cover_url}
          alt={comic.title}
          width={128}
          height={176}
          className="w-full "
        />
        <div className="p-2 flex-1 flex flex-col justify-between gap-2">
          <h3 className=" font-semibold truncate text-lg ">{comic.title}</h3>
          <p className="float-left flex items-center gap-1 text-sm text-muted-foreground">
            <Star size={16} className="text-yellow-400" fill="#facc15" /> 4.5
            (120)
          </p>

          {hasUser(comic) && (
            <Link href={`/user/${comic.user.user_id}`}>
              <Button className="flex items-center gap-2 p-0" variant={"link"}>
                <Avatar>
                  <AvatarImage src={comic.user.avatar} alt={comic.user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <span className="truncate font-medium">{comic.user.name}</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Link>
  );
}
