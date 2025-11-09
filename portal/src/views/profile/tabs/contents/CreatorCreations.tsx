"use client";
import ComicCard from "@/components/ComicCard";
import Image from "next/image";
import { FC } from "react";

interface CreatorCreationsProps {
  creations: Omit<Comic, "user_id">[];
}

const CreatorCreations: FC<CreatorCreationsProps> = ({ creations }) => (
  <div className="profile-content-grid">
    {creations.map((comic) => (
      <ComicCard key={comic.comic_id} comic={comic} />
    ))}
  </div>
);

export default CreatorCreations;
