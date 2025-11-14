"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useCreateChaptersStore } from "@/store/createChaptersStore";
import { Plus } from "lucide-react";
import { useCallback } from "react";

export default function PageUploader() {
  const { pages, addPage, selectedChapter } = useCreateChaptersStore();

  const openFileDialog = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = false;
    input.accept = "image/*";
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files) {
        target.files[0];
        addPage({
          page_number: pages.length + 1,
          image_url: URL.createObjectURL(target.files[0]),
          page_id: Math.random().toString(36).slice(2),
          chapter_id: selectedChapter!.chapter_id,
        });
      }
    };
    input.click();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Pages ({pages.length})</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {pages.map((p) => (
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
        <Card
          onClick={openFileDialog}
          className="overflow-hidden aspect-[2/3] relative group border-2 border-dashed bg-muted flex items-center justify-center cursor-pointer shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
        >
          <Plus className="w-10 h-10 text-[var(--muted-foreground)] mx-auto" />
        </Card>
      </div>
    </div>
  );
}
