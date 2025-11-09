"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import EditProfileButton from "./EditProfileButton";
import NewComicButton from "./NewComicButton";
import FollowButton from "./FollowButton";

interface CreatorActionsProps {
  isOwner: boolean;
  desktop?: boolean;
}

export default function CreatorActions({
  isOwner,
  desktop,
}: CreatorActionsProps) {
  // --- Desktop layout ---
  if (desktop) {
    return (
      <div className="hidden md:flex space-x-2">
        {isOwner ? (
          <>
            <EditProfileButton iconOnly />
            <NewComicButton />
          </>
        ) : (
          <FollowButton />
        )}
      </div>
    );
  }

  // --- Mobile layout ---
  return (
    <div className="flex md:hidden space-x-3 mt-4 w-full">
      {isOwner ? (
        <>
          <EditProfileButton fullWidth />
          <NewComicButton fullWidth />
        </>
      ) : (
        <FollowButton fullWidth />
      )}
    </div>
  );
}
