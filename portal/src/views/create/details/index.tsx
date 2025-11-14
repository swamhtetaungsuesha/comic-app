"use client";
import { Button } from "@/components/ui/button";
import { Lock, BookOpen } from "lucide-react";
import { useCreateChaptersStore } from "@/store/createChaptersStore";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ChapterModal from "../modal";

export default function ChapterDetails() {
  const { selectedChapter } = useCreateChaptersStore();

  if (!selectedChapter) {
    return (
      <div className="text-center text-[var(--muted-foreground)] p-8">
        <BookOpen className="w-12 h-12 mx-auto mb-4 text-[var(--accent)]" />
        <p>Select a chapter to view details.</p>
      </div>
    );
  }

  return (
    <div className="border-b mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{selectedChapter.title}</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Details</Button>
          </DialogTrigger>
          <ChapterModal isEdit={true} />
        </Dialog>
      </div>
      <div className="flex items-center space-x-4 text-sm text-[var(--muted-foreground)] mb-4">
        <p>
          <strong>ID:</strong> {selectedChapter.chapter_id}
        </p>
        {selectedChapter.is_premium ? (
          <p className="text-primary flex items-center font-semibold">
            <Lock className="w-4 h-4 mr-1" /> Premium (MMK
            {selectedChapter.price?.toFixed(2)})
          </p>
        ) : (
          <p className="text-green-400 font-semibold">Free</p>
        )}
      </div>
    </div>
  );
}
