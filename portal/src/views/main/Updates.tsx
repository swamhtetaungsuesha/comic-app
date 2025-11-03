"use client";
import ChatperCard from "@/components/ChapterCard";
import React from "react";

interface UpdatesProps {
  chapters: ChapterWithComicAndCommentCount[];
}

export default function Updates({ chapters = [] }: UpdatesProps) {
  if (chapters.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-100">
        No chapters
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden py-6">
      <h1 className="comic-slider-title">
        <div className="comic-slider-title-underline-container">
          <span className="comic-slider-title-underline"></span>
          <span className="comic-slider-title-underline"></span>
          <span className="comic-slider-title-underline"></span>
          <span className="comic-slider-title-underline"></span>
        </div>
        <span>Updates</span>
      </h1>
      <div className="grid grid-cols-1 gap-4 mt-6">
        {chapters.map((chapter) => (
          <ChatperCard key={chapter.chapter_id} chapter={chapter} />
        ))}
      </div>
    </div>
  );
}
