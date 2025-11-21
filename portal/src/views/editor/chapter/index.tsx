"use client";
import { Plus, BookOpen, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useCreateChaptersStore } from "@/store/createChaptersStore";
import ChapterModal from "../modal";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChapterList() {
  const { chapters, selectChapter, selectedChapter, addChapter } =
    useCreateChaptersStore();

  return (
    <Card className="bg-transparent border-none">
      <CardHeader className="flex items-center">
        <CardTitle className="py-0 my-0">
          Chapters ({chapters.length})
        </CardTitle>
      </CardHeader>

      <Separator
        onClick={(e) => console.log(e.currentTarget.getBoundingClientRect())}
      />
      <ScrollArea className="min-h-[calc(100vh-410px)]">
        <CardContent className="space-y-2 max-h-[70vh] overflow-y-auto">
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
        </CardContent>
      </ScrollArea>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">
              <Plus className="w-4 h-4 mr-2" /> New Chapter
            </Button>
          </DialogTrigger>
          <ChapterModal isEdit={false} />
        </Dialog>
      </CardFooter>
    </Card>
  );
}
