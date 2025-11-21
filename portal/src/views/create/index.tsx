"use client";

import { FC, useEffect } from "react";
import ComicHeader from "./header";
import { useCreateChaptersStore } from "@/store/createChaptersStore";
import ChapterList from "./chapter";
import ChapterDetails from "./details";
import PageUploader from "./pages";
import { Card } from "@/components/ui/card";

interface ComicDashboardViewProps {
  comicWithChapters: ChaptersWithComicAndRatings;
}
const ComicDashboardView: FC<ComicDashboardViewProps> = ({
  comicWithChapters,
}) => {
  const { initialize } = useCreateChaptersStore();

  useEffect(() => {
    if (comicWithChapters) {
      initialize(comicWithChapters);
    }
  }, [comicWithChapters]);
  return (
    <Card className="mx-6 min-h-[calc(100vh-91px)] bg-transparent border-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-3">
        <div className="px-4 lg:col-span-4 xl:col-span-3">
          <ComicHeader />
          <ChapterList />
        </div>
        <div className="lg:col-span-8 xl:col-span-9 px-3">
          <ChapterDetails />
          <PageUploader />
        </div>
      </div>
    </Card>
  );
};

export default ComicDashboardView;
