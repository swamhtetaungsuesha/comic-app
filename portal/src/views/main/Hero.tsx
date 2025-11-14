"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero({ features }: { features: ComicWithUser[] }) {
  // const features = [
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  //   "/cover-comic.jpg",
  // ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2000); // change every 2s

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="bg-primary-foreground w-full relative">
      <div className="w-full h-full absolute bg-linear-to-t from-background via-background/30 to-background  top-0 right-0"></div>
      <div className="p-12 bg-primary rounded-lg">
        <div className="flex justify-between">
          {features.map((feature, i) => {
            return (
              <div
                key={i}
                className={cn(
                  "transition-all duration-300 ease-in-out w-24 overflow-hidden",
                  i === activeIndex ? "w-96" : "w-24"
                )}
              >
                <Image
                  src={feature.cover_url}
                  alt={"feature"}
                  width={400}
                  height={400}
                  className="max-w-96 w-96 min-h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="flex gap-2 p-6 justify-center ">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === activeIndex ? "bg-primary w-20" : "bg-secondary w-2"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}
