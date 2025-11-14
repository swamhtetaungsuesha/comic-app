"use client";
import { Plus, BookOpen, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useCreateChaptersStore } from "@/store/createChaptersStore";
import ChapterModal from "../modal";

export default function ChapterList() {
  const { chapters, selectChapter, selectedChapter, addChapter } =
    useCreateChaptersStore();

  return (
    <div className="py-4 lg:col-span-4 xl:col-span-3">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Chapters ({chapters.length})
        </h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">
              <Plus className="w-4 h-4 mr-2" /> New Chapter
            </Button>
          </DialogTrigger>
          <ChapterModal isEdit={false} />
        </Dialog>
      </div>

      <div className="space-y-2 max-h-[70vh] overflow-y-auto">
        {chapters.map((ch) => (
          <div
            key={ch.chapter_id}
            onClick={() => selectChapter(ch.chapter_id)}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer border transition-all ${
              ch.chapter_id === selectedChapter?.chapter_id
                ? "bg-input"
                : "hover:bg-input/40 border-border"
            }`}
          >
            <div className="flex items-center space-x-3">
              <BookOpen className="w-4 h-4 text-[var(--accent-foreground)]" />
              <div>
                <p className="font-medium">{ch.title}</p>
                <p className="text-xs text-[var(--muted-foreground)]">
                  Chapter {ch.chapter_number}
                </p>
              </div>
            </div>
            {ch.is_premium && <Lock className="w-4 h-4 text-primary" />}
          </div>
        ))}
      </div>
    </div>
  );
}
