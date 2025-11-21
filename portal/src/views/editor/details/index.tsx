"use client";
import { Button } from "@/components/ui/button";
import { Lock, BookOpen, Edit } from "lucide-react";
import { useCreateChaptersStore } from "@/store/createChaptersStore";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ChapterModal from "../modal";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card className="bg-transparent border-none">
      <CardHeader>
        <CardTitle className="text-2xl">{selectedChapter.title}</CardTitle>
        <CardDescription>#00{selectedChapter.chapter_number}</CardDescription>
        <CardAction>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size={"icon"}>
                <Edit />
              </Button>
            </DialogTrigger>
            <ChapterModal isEdit={true} />
          </Dialog>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
