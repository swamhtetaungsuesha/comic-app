"use client";
import { Button } from "@/components/ui/button";
import { Settings, ImageIcon } from "lucide-react";
import CreatorStats from "./CreatorStats";
import CreatorSocial from "./CreatorSocial";
import CreatorActions from "./actions";
import { useMemo } from "react";
import { formatNumber } from "@/lib/format";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CreatorProfileCardProps {
  user: Profile;
  isOwner: boolean;
}

export default function CreatorProfileCard({
  user,
  isOwner,
}: CreatorProfileCardProps) {
  const formattedStats = useMemo(
    () => ({
      followers: formatNumber(user.stats.followers),
      creations: user.stats.creations,
      following: user.stats.following,
    }),
    [user.stats]
  );
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-card-details">
          {/* Profile Picture */}
          <Avatar className="size-32">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Bio & Stats */}
          <div className="profile-card-bio-stats-container">
            <div className="profile-card-bio-stats-header">
              <h1>{user.name}</h1>
              <CreatorActions desktop isOwner={isOwner} />
            </div>

            <p className="profile-card-email">{user.email}</p>
            <p className="profile-card-bio">{user.bio}</p>

            <CreatorStats stats={formattedStats} />
          </div>

          {/* Mobile buttons */}
          <CreatorActions isOwner={isOwner} />
        </div>

        {/* Social Links */}
        <CreatorSocial social={user.social} />
      </div>
    </div>
  );
}
