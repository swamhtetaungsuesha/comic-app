"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid, Navigation } from "swiper/modules";
import ComicCard from "../../components/ComicCard";
import { ComicWithUser } from "@/types/Comic";
import { User } from "@/types/User";
import { cn } from "@/lib/utils";
import ArtistCard from "@/components/ArtistCard";

interface ComicSliderProps {
  type: "comic";
  title: string;
  comics: ComicWithUser[];
  double?: boolean;
  perRow?: number;
}

interface ArtistSliderProps {
  type: "artist";
  title: string;
  artists: User[];
  double?: boolean;
  perRow?: number;
}

type SliderProps = ComicSliderProps | ArtistSliderProps;

export default function Slider({
  type,
  title,
  double = false,
  perRow = 4,
  ...props
}: SliderProps) {
  const isComic = type === "comic";
  const items = isComic
    ? (props as ComicSliderProps).comics
    : (props as ArtistSliderProps).artists;

  if (!items || items.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center ">
        No {isComic ? "comics" : "artists"} found
      </div>
    );
  }

  const rows = double ? 2 : 1;

  return (
    <div className="relative w-full overflow-hidden py-6">
      <h1 className="comic-slider-title">
        <span>{title}</span>
      </h1>

      <Swiper
        modules={[Navigation, Grid, Pagination]}
        slidesPerView={perRow}
        spaceBetween={0}
        grid={{ rows, fill: "row" }}
        pagination={{ clickable: true }}
        className={cn(
          "min-h-[850px]",
          !double && "min-h-[450px]",
          !isComic && "min-h-[280px]"
        )}
      >
        {items.map((item) => (
          <SwiperSlide
            key={
              isComic
                ? (item as ComicWithUser).comic_id
                : (item as User).user_id
            }
            style={{ marginRight: 0 }}
          >
            {isComic ? (
              <ComicCard comic={item as ComicWithUser} />
            ) : (
              <ArtistCard artist={item as User} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
