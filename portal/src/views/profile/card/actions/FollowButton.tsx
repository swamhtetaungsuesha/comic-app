"use client";

import { Button } from "@/components/ui/button";
import { UserPlus, UserMinus } from "lucide-react";
import { useState } from "react";

interface FollowButtonProps {
  fullWidth?: boolean;
}

export default function FollowButton({ fullWidth }: FollowButtonProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const onToggle = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <Button
      variant={isFollowing ? "outline" : "default"}
      className={fullWidth ? "flex-1" : ""}
      onClick={onToggle}
    >
      {isFollowing ? (
        <>
          <UserMinus className="h-4 w-4 mr-2" />
          Unfollow
        </>
      ) : (
        <>
          <UserPlus className="h-4 w-4 mr-2" />
          Follow
        </>
      )}
    </Button>
  );
}
