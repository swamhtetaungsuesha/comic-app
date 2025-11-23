"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useCreateChaptersStore } from "@/store/createChaptersStore";
import {
  Delete,
  Edit,
  FlipHorizontal,
  FlipVertical,
  GalleryHorizontal,
  GalleryVertical,
  GripVertical,
  Plus,
  Trash,
} from "lucide-react";
import { useCallback, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import { cn } from "@/lib/utils";

export default function PageUploader() {
  const { pages, addPage, selectedChapter } = useCreateChaptersStore();
  const [orientation, setOrientation] = useState<"vertical" | "horizontal">(
    "vertical"
  );

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
    <Card className="border-none bg-transparent h-full">
      <CardHeader>
        <CardTitle>Page Manager</CardTitle>
        <CardDescription>
          Upload and manage the pages for this chapter. Select a layout or
          version as needed.
        </CardDescription>
        <CardAction className="flex gap-4">
          <ButtonGroup>
            <Button
              variant={orientation === "vertical" ? "default" : "outline"}
              onClick={() => setOrientation("vertical")}
            >
              <GalleryVertical />
            </Button>
            <Button
              variant={orientation === "horizontal" ? "default" : "outline"}
              onClick={() => setOrientation("horizontal")}
            >
              <GalleryHorizontal />
            </Button>
          </ButtonGroup>
          <Select value="1">
            <SelectTrigger className="w-[180px]" value={"1"}>
              <SelectValue defaultValue={"1"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Version 001</SelectItem>
              <SelectItem value="2">Version 002</SelectItem>
              <SelectItem value="3">Version 003</SelectItem>
              <SelectItem value="4">Version 004</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <Separator />
      <CardContent className="h-full flex items-center w-full">
        <div
          className={cn(
            "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full",
            orientation === "vertical" && "sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          <Card
            onClick={openFileDialog}
            className={cn(
              "overflow-hidden aspect-[2/3] relative group border-2 border-dashed bg-muted flex items-center justify-center cursor-pointer shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              orientation === "vertical" && "aspect-[3/2]"
            )}
          >
            <Plus className="w-10 h-10 text-[var(--muted-foreground)] mx-auto" />
          </Card>
          <div
            className={cn(
              "col-span-3",
              orientation === "vertical" && "col-span-2"
            )}
          >
            <Swiper
              modules={[Navigation, Grid]}
              slidesPerView={orientation === "vertical" ? 2 : 3}
              spaceBetween={16}
              grid={{ rows: 1, fill: "row" }}
              pagination={{ clickable: true }}
              className={"w-full h-full gap-4"}
            >
              {pages.map((p) => (
                <SwiperSlide key={p.page_id} className="h-full w-full">
                  <Card
                    key={p.page_id}
                    className={cn(
                      "overflow-hidden aspect-[2/3] relative group border-[var(--border)] bg-muted",
                      orientation === "vertical" && "aspect-[3/2]"
                    )}
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
                    <div className="absolute right-3 top-3 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <ButtonGroup>
                        <Button variant="outline">
                          <Edit />
                        </Button>
                        <Button>
                          <Trash />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
