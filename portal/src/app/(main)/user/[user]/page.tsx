"use client";
import React, { useState, useMemo } from "react";
import {
  Twitter,
  Instagram,
  Globe,
  MessageSquare,
  Heart,
  Bookmark,
  Settings,
  Image as ImageIcon,
  Users,
  BookOpen,
  ChevronRight,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SocialIcon } from "react-social-icons";
import ComicCard from "@/components/ComicCard";

// --- MOCK DATA ---
const mockUser: Profile = {
  user_id: "creator-12345",
  name: "SketchyScribe",
  email: "@sketchyscribe",
  bio: "Just trying to bring my silly ideas to life, one panel at a time. I specialize in sci-fi, horror, and cozy slice-of-life comics. Always experimenting with new styles.",
  avatar: "https://placehold.co/100x100/1e40af/ffffff?text=SS",
  bannerUrl:
    "https://placehold.co/1200x250/1f2937/ffffff?text=Creator+Banner+Art",
  social: [
    "https://twitter.com/sketchyscribe",
    "https://instagram.com/sketchyscribe_comics",
  ],
  stats: {
    followers: 1245,
    following: 56,
    creations: 12,
  },
  contents: [
    {
      comic_id: "1",
      title: "Demon Slayer",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "2",
      title: "One Piece",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
    },
    {
      comic_id: "3",
      title: "Naruto",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "4",
      title: "Attack on Titan",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg",
    },
    {
      comic_id: "5",
      title: "My Hero Academia",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "6",
      title: "Fullmetal Alchemist",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BNDczZWMyMjEtZDI0ZS00YThjLWE2MjEtNTIxNmVmZDhkNDg5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      comic_id: "7",
      title: "Death Note",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
    },
    {
      comic_id: "8",
      title: "Bleach",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "9",
      title: "Dragon Ball",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NfrPSHdw5q7Qsb2kxL9hE0jv0cqhZB8zhA&s",
    },
    {
      comic_id: "10",
      title: "Fairy Tail",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BODlhNTQ3ZDgtMDJlMC00YzdmLWE3ZTMtOWNmMTZkN2I2MzI5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      comic_id: "11",
      title: "Tokyo Ghoul",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "12",
      title: "Black Clover",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_.jpg",
    },
    {
      comic_id: "13",
      title: "Jujutsu Kaisen",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "14",
      title: "Neon Genesis Evangelion",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzyxXv7aNq7QGn1A17vZeGJWnT5Ta6GdCXfA&s",
    },
    {
      comic_id: "15",
      title: "Fullmetal Alchemist: Brotherhood",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://images.justwatch.com/poster/8906736/s718/season-1.jpg",
    },
  ],
};

// Helper to format large numbers
const formatNumber = (num: number) =>
  Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(num);

// Reusable Stat Component
const StatItem = ({
  value,
  label,
}: {
  value: number | string;
  label: string;
}) => (
  <div className="flex flex-col items-center p-2">
    <span className="text-xl font-bold text-foreground">{value}</span>
    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
      {label}
    </span>
  </div>
);

function User() {
  const user = mockUser;
  const [activeTab, setActiveTab] = useState("creations");

  const formattedStats = useMemo(
    () => ({
      followers: formatNumber(user.stats.followers),
      creations: user.stats.creations,
      following: user.stats.following,
    }),
    [user.stats]
  );

  return (
    <div className="min-h-screen font-sans text-foreground">
      {/* --- 1. HEADER AND PROFILE CARD --- */}
      <div className="relative">
        {/* Banner Image Placeholder */}
        <div className="w-full h-48 sm:h-60 bg-secondary overflow-hidden -z-10">
          <img
            src={user.bannerUrl}
            alt="Creator Banner"
            className="w-full h-full object-cover opacity-70"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/1200x250/1e40af/ffffff?text=Creator+Banner+Art";
            }}
          />
        </div>

        {/* Profile Card Overlay */}
        <div className="container mx-auto px-4 md:px-8 -mt-20 z-50">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
              {/* Profile Picture and Identity (Left) */}
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

              {/* Bio and Stats (Center) */}
              <div className="flex-1 md:mt-20 mt-0">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-extrabold text-foreground leading-tight">
                    {user.name}
                  </h1>
                  {/* Action Buttons (Desktop Top Right) */}
                  <div className="hidden md:flex space-x-2">
                    {/* Assuming this is *your* profile, show edit button */}
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Edit Profile Settings"
                    >
                      <Settings className="h-5 w-5" />
                    </Button>
                    <Button className="flex items-center space-x-2">
                      <ImageIcon className="h-5 w-5" />
                      <span>New Comic</span>
                    </Button>
                  </div>
                </div>

                <p className="text-sm font-medium text-muted-foreground mt-1">
                  {user.email}
                </p>

                {/* Bio */}
                <p className="text-sm mt-4 max-w-2xl">{user.bio}</p>

                {/* Stats */}
                <div className="flex space-x-8 mt-4 py-3 md:w-full">
                  <StatItem
                    value={formattedStats.creations}
                    label="Creations"
                  />
                  <StatItem
                    value={formattedStats.followers}
                    label="Followers"
                  />
                  <StatItem
                    value={formattedStats.following}
                    label="Following"
                  />
                </div>
              </div>

              {/* Mobile Action Buttons (Below Stats) */}
              <div className="flex md:hidden space-x-3 mt-4 w-full">
                <Button variant="outline" className="flex-1">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button className="flex-1">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  New Comic
                </Button>
              </div>
            </div>

            {/* Social Links (Bottom) */}
            <div className="flex items-center space-x-4 mt-6 border-t border-muted-foreground pt-4">
              <span className="text-sm font-semibold">Connect:</span>
              {user.social.map((s) => (
                <SocialIcon url={s} key={s} color="red" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- 2. MAIN CONTENT AREA (Gallery & Tabs) --- */}
      <main className="container mx-auto px-4 md:px-8 mt-10 pb-20">
        <Tabs defaultValue="creations">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-primary text-lg font-semibold border-l-4 border-primary pl-3">
              Contents
            </h2>
            <TabsList>
              <TabsTrigger
                value="creations"
                onClick={() => setActiveTab("creations")}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Creations
              </TabsTrigger>
              <TabsTrigger value="likes" onClick={() => setActiveTab("likes")}>
                <Heart className="h-4 w-4 mr-2" />
                Liked
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="creations">
            <div className="grid grid-cols-2   sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-6">
              {user.contents.map((comic) => (
                <ComicCard key={comic.comic_id} comic={comic} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="likes">
            <div className="p-8 text-center bg-muted/30">
              <Heart className="h-8 w-8 mx-auto mb-4 text-primary" />
              <p className="text-lg font-medium text-muted-foreground">
                Comics {user.name} has liked will appear here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default User;
