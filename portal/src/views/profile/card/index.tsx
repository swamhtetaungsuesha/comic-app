"use client";
import { Button } from "@/components/ui/button";
import { Settings, ImageIcon } from "lucide-react";
import CreatorStats from "./CreatorStats";
import CreatorSocial from "./CreatorSocial";
import CreatorActions from "../CreatorActions";

interface CreatorProfileCardProps {
  user: any;
  formattedStats: any;
}

export default function CreatorProfileCard({
  user,
  formattedStats,
}: CreatorProfileCardProps) {
  return (
    <div className="container mx-auto px-4 md:px-8 -mt-20 z-50">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
          {/* Profile Picture */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-32 h-32 rounded-full border-4 border-white dark:border-gray-900 shadow-xl overflow-hidden -mt-10 mb-4">
              <img
                src={user.avatar}
                alt={`${user.name}'s profile`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/128x128/1e40af/ffffff?text=SS";
                }}
              />
            </div>
          </div>

          {/* Bio & Stats */}
          <div className="flex-1 md:mt-20 mt-0">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-extrabold text-foreground leading-tight">
                {user.name}
              </h1>
              <CreatorActions desktop />
            </div>

            <p className="text-sm font-medium text-muted-foreground mt-1">
              {user.email}
            </p>
            <p className="text-sm mt-4 max-w-2xl">{user.bio}</p>

            <CreatorStats stats={formattedStats} />
          </div>

          {/* Mobile buttons */}
          <CreatorActions />
        </div>

        {/* Social Links */}
        <CreatorSocial social={user.social} />
      </div>
    </div>
  );
}
