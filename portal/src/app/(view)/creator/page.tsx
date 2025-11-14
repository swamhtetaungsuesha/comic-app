"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, BookOpen, Lock } from "lucide-react";

// --- MOCK DATA AND UTILITIES ---
const COMIC_ID = "cmc_abc123";

const generateId = (prefix: string) =>
  prefix + "_" + Math.random().toString(36).substring(2, 9);

const initialChapters = [
  {
    chapter_id: generateId("chp"),
    title: "The First Spark",
    chapter_number: 1,
    cover_url: "https://placehold.co/150x200/4f46e5/ffffff?text=C.1",
    comic_id: COMIC_ID,
    created_at: "2023-10-01",
    is_premium: false,
  },
  {
    chapter_id: generateId("chp"),
    title: "Shadows Descend",
    chapter_number: 2,
    cover_url: "https://placehold.co/150x200/4f46e5/ffffff?text=C.2",
    comic_id: COMIC_ID,
    created_at: "2023-11-15",
    is_premium: true,
    price: 2.99,
  },
  {
    chapter_id: generateId("chp"),
    title: "The Silent City",
    chapter_number: 3,
    cover_url: "https://placehold.co/150x200/4f46e5/ffffff?text=C.3",
    comic_id: COMIC_ID,
    created_at: "2023-12-20",
    is_premium: false,
  },
];

const initialPages = [
  {
    page_id: generateId("pg"),
    image_url: "https://placehold.co/300x450/1e293b/f1f5f9?text=P1",
    page_number: 1,
    chapter_id: initialChapters[0].chapter_id,
  },
  {
    page_id: generateId("pg"),
    image_url: "https://placehold.co/300x450/1e293b/f1f5f9?text=P2",
    page_number: 2,
    chapter_id: initialChapters[0].chapter_id,
  },
];

const comic = {
  title: "Epic Adventures",
  cover_url: "https://placehold.co/150x200/4f46e5/ffffff?text=Epic+Adventures",
  comic_id: COMIC_ID,
};
// --- CHAPTER MODAL ---
function ChapterModal({
  open,
  onOpenChange,
  onSave,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSave: (data: any) => void;
}) {
  const [title, setTitle] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const [price, setPrice] = useState(0.99);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      is_premium: isPremium,
      price: isPremium ? price : undefined,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
        <DialogHeader>
          <DialogTitle className="text-[var(--foreground)]">
            Create New Chapter
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Chapter Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="E.g. The Dawn of Heroes"
              required
              className="bg-[var(--input)] border-[var(--border)] text-[var(--foreground)]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="premium"
              type="checkbox"
              checked={isPremium}
              onChange={(e) => setIsPremium(e.target.checked)}
              className="h-4 w-4 accent-[var(--primary)]"
            />
            <Label htmlFor="premium" className="text-[var(--foreground)]">
              Premium Chapter
            </Label>
            {isPremium && <Lock className="w-4 h-4 text-[var(--primary)]" />}
          </div>

          {isPremium && (
            <div className="space-y-2">
              <Label htmlFor="price">Price (USD)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0.01"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                className="bg-[var(--input)] border-[var(--border)] text-[var(--foreground)]"
              />
            </div>
          )}

          <DialogFooter>
            <Button
              type="submit"
              className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
            >
              Create Chapter
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// --- MAIN DASHBOARD ---
export default function CreateDashboard() {
  const [chapters, setChapters] = useState(initialChapters);
  const [pages, setPages] = useState(initialPages);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(
    initialChapters[0]?.chapter_id || null
  );
  const [openModal, setOpenModal] = useState(false);

  const selectedChapter = useMemo(
    () => chapters.find((c) => c.chapter_id === selectedChapterId),
    [chapters, selectedChapterId]
  );

  const selectedPages = useMemo(
    () => pages.filter((p) => p.chapter_id === selectedChapterId),
    [pages, selectedChapterId]
  );

  const handleCreateChapter = useCallback(
    (data: any) => {
      const nextNum =
        chapters.length > 0
          ? Math.max(...chapters.map((c) => c.chapter_number)) + 1
          : 1;

      const newChapter = {
        chapter_id: generateId("chp"),
        title: data.title,
        chapter_number: nextNum,
        cover_url: `https://placehold.co/150x200/4f46e5/ffffff?text=C.${nextNum}`,
        comic_id: COMIC_ID,
        created_at: new Date().toISOString().slice(0, 10),
        is_premium: data.is_premium,
        price: data.price,
      };

      setChapters((prev) => [...prev, newChapter]);
      setSelectedChapterId(newChapter.chapter_id);
    },
    [chapters]
  );

  return (
    <div className="min-h-screen space-y-6">
      {/* <header>
        <h1 className="text-3xl font-bold">
          <span className="text-[var(--primary)]">Comic</span> Creator Dashboard
        </h1>
        <p className="text-sm text-[var(--muted-foreground)] mt-1">
          Manage your chapters and pages efficiently.
        </p>
      </header> */}
      <div className="flex flex-col lg:flex-row justify-between items-start mb-6 border-b border-border gap-4 px-4 py-2 bg-card sticky top-0 z-20">
        {/* Title & Info */}
        <div className="flex-1 flex items-center gap-4 w-full">
          <Image
            src={comic.cover_url}
            width={60}
            height={100}
            alt={comic.title}
          />
          <div>
            <h1 className="text-3xl font-extrabold text-foreground leading-tight">
              {comic.title}
            </h1>
            <p className="text-lg text-primary font-semibold mt-1">
              Comic Creator Dashboard
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6">
        {/* LEFT PANEL */}
        <div className="p-4 lg:col-span-4 xl:col-span-3">
          <div className=" mb-4">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2 ">
              Chapters ({chapters.length})
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button onClick={() => setOpenModal(true)} className="w-full">
                  <Plus className="w-4 h-4 mr-2" /> New Chapter
                </Button>
              </DialogTrigger>
              <ChapterModal
                open={openModal}
                onOpenChange={setOpenModal}
                onSave={handleCreateChapter}
              />
            </Dialog>
          </div>

          <div className="space-y-2 max-h-[70vh] overflow-y-auto">
            {chapters.map((ch) => (
              <div
                key={ch.chapter_id}
                onClick={() => setSelectedChapterId(ch.chapter_id)}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer border transition-all ${
                  ch.chapter_id === selectedChapterId
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

        {/* RIGHT PANEL */}
        <div className="lg:col-span-8 xl:col-span-9">
          {selectedChapter ? (
            <>
              <div className="border-b">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">
                    {selectedChapter.title}
                  </h2>
                  <Button variant="outline">Edit Details</Button>
                </div>

                <div className="flex items-center space-x-4 text-sm text-[var(--muted-foreground)] mb-4">
                  <p>
                    <strong>ID:</strong> {selectedChapter.chapter_id}
                  </p>
                  {selectedChapter.is_premium ? (
                    <p className="text-[var(--primary)] flex items-center font-semibold">
                      <Lock className="w-4 h-4 mr-1" />
                      Premium (${selectedChapter.price?.toFixed(2)})
                    </p>
                  ) : (
                    <p className="text-green-400 font-semibold">Free</p>
                  )}
                </div>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-semibold mb-3">
                  Pages ({selectedPages.length})
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedPages.map((p) => (
                    <Card
                      key={p.page_id}
                      className="overflow-hidden aspect-[2/3] relative group border-[var(--border)] bg-[var(--muted)]"
                    >
                      <Image
                        src={p.image_url}
                        alt={`Page ${p.page_number}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <span className="bg-[var(--primary)] text-[var(--primary-foreground)] text-sm px-3 py-1 rounded-full">
                          #{p.page_number}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-[var(--muted-foreground)] p-8">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-[var(--accent)]" />
              <p>Select a chapter to view details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
