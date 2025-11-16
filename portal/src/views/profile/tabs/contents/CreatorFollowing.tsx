"use client";
import ComicCard from "@/components/ComicCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { mockUsers } from "@/lib/dummy_data";
import { UserMinus, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CreatorFollowingProps {
  isOwner: boolean;
}

const CreatorFollowing: FC<CreatorFollowingProps> = ({ isOwner }) => (
  <div className="profile-content-grid">
    {mockUsers.map((user) => (
      <Link href={`/comic/${user.user_id}`}>
        <div className="profile-content-followers-following-card">
          <Avatar className="size-36">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="profile-content-followers-following-card-details">
            <h3>{user.name}</h3>
            {isOwner ? (
              <Button variant={"link"}>
                {" "}
                <UserMinus className="h-4 w-4 " /> Unfollow
              </Button>
            ) : (
              <Button variant={"link"}>
                <UserPlus className="h-4 w-4" /> Follow
              </Button>
            )}
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default CreatorFollowing;
