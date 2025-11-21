"use client";
import { Separator } from "@/components/ui/separator";
import ChapterEditingDashboardHeader from "./header";
import ComicCard from "./card";
import { useCreateChaptersStore } from "@/store/createChaptersStore";
import { FC, useEffect } from "react";
import ChapterList from "./chapter";
import ChapterDetails from "./details";
import SettingPremium from "./premium";
import ContentPublishing from "./publish";

interface ComicDashboardViewProps {
  comicWithChapters: ChaptersWithComicAndRatings;
}
const ChapterEditingDashboardView: FC<ComicDashboardViewProps> = ({
  comicWithChapters,
}) => {
  const { initialize } = useCreateChaptersStore();

  useEffect(() => {
    if (comicWithChapters) {
      initialize(comicWithChapters);
    }
  }, [comicWithChapters]);
  return (
    <div className="min-h-screen bg-background divide-x divide-border">
      {/* Header */}
      <ChapterEditingDashboardHeader />
      <Separator />
      <div className="flex relative h-[calc(100vh-94px)]">
        {/* Content */}
        <div className="min-w-lg">
          <ComicCard />
          <Separator />
          <ChapterList />
        </div>
        <Separator orientation="vertical" className="h-full" />
        <div className="w-full flex flex-col">
          <div className="flex w-full">
            <div className="flex-1">
              <ChapterDetails />
            </div>
            <div className="border-l w-max flex-1">
              <SettingPremium />
            </div>
          </div>
          <Separator />
          <div className="flex-1">Pages</div>
          <Separator />
          <div>
            <ContentPublishing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterEditingDashboardView;
