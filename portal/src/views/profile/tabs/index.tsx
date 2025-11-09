"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ImageIcon, Heart } from "lucide-react";
import ComicCard from "@/components/ComicCard";
import CreatorCreations from "./contents/CreatorCreations";
import CreatorFollowers from "./contents/CreatorFollowers";
import CreatorFollowing from "./contents/CreatorFollowing";

interface CreatorTabsProps {
  user: Profile;
  isOwner: boolean;
}

export default function CreatorTabs({ user, isOwner }: CreatorTabsProps) {
  return (
    <Tabs defaultValue="creations">
      <div className="content-header">
        <h2>Contents</h2>
        <TabsList>
          <TabsTrigger value="creations">Creations</TabsTrigger>
          <TabsTrigger value="followers">Followers</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="creations">
        <CreatorCreations creations={user.contents} />
      </TabsContent>

      <TabsContent value="followers">
        <CreatorFollowers isOwner={isOwner} />
      </TabsContent>
      <TabsContent value="following">
        <CreatorFollowing isOwner={isOwner} />
      </TabsContent>
    </Tabs>
  );
}
