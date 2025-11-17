"use client";
import ChatperCard from "@/components/ChapterCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Plus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { useState } from "react";
import { format } from "date-fns";
import { Toggle } from "@/components/ui/toggle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

export default function Comic() {
  const comic: ComicWithChapterAndUserAndRating = {
    comic_id: "11",
    title: "Tokyo Ghoul",
    description:
      "Tokyo Ghoul is a dark fantasy series about Ken Kaneki, a college student who survives a deadly encounter with a ghoul, a creature that feeds on human flesh. After a surgery to save his life, he becomes the first half-human, half-ghoul hybrid and is forced to navigate the hidden world of ghouls while keeping his identity secret from his friends.",
    genres: ["Action", "Adventure"],
    cover_url:
      "https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    user: {
      user_id: "user11",
      name: "Sui Ishida",
      avatar: "https://i.pravatar.cc/150?img=11",
      email: "ishida@example.com",
    },
    chapter: [
      {
        chapter_id: "ch1",
        title: "Demon Slayer Chapter 1",
        chapter_number: 1,
        cover_url:
          "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        comment_count: 10,
        is_premium: false,
        created_at: "2023-10-01T10:00:00Z",
      },
      {
        chapter_id: "ch2",
        title: "One Piece Chapter 1",
        chapter_number: 1,
        cover_url:
          "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
        comment_count: 20,
        is_premium: true,
        created_at: "2023-10-02T10:00:00Z",
      },
      {
        chapter_id: "ch3",
        title: "Naruto Chapter 1",
        chapter_number: 3,
        cover_url:
          "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        comment_count: 15,
        is_premium: false,
        created_at: "2023-10-03T10:00:00Z",
      },
      {
        chapter_id: "ch3",
        title: "Naruto Chapter 1",
        chapter_number: 3,
        cover_url:
          "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        comment_count: 15,
        is_premium: false,
        created_at: "2023-10-03T10:00:00Z",
      },
      {
        chapter_id: "ch3",
        title: "Naruto Chapter 1",
        chapter_number: 3,
        cover_url:
          "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        comment_count: 15,
        is_premium: false,
        created_at: "2023-10-03T10:00:00Z",
      },
      {
        chapter_id: "ch3",
        title: "Naruto Chapter 1",
        chapter_number: 3,
        cover_url:
          "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        comment_count: 15,
        is_premium: false,
        created_at: "2023-10-03T10:00:00Z",
      },
    ],
    ratings: [
      {
        rating_id: "1",
        user: {
          user_id: "1",
          name: "Mika Tanaka",
          avatar: "https://i.pravatar.cc/150?img=14",
          email: "mika@example.com",
        },
        score: 4,
        review:
          "A beautifully tragic story. The character development and emotional depth are unmatched!",
        created_at: "2024-03-20T10:00:00Z",
      },
      {
        rating_id: "1",
        user: {
          user_id: "2",
          name: "Ethan Walker",
          avatar: "https://i.pravatar.cc/150?img=25",
          email: "mika@example.com",
        },
        score: 4,
        review:
          "The pacing was a bit slow in the middle, but the art and themes were phenomenal.",
        created_at: "2024-03-23T10:00:00Z",
      },
    ],
  };

  const [rating, setRating] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // slider chapter

  return (
    <div className="mx-auto py-10 px-12 grid grid-cols-3 gap-5">
      <div className="col-span-2">
        {/* Comic Header */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-60 h-80 flex-shrink-0">
            <Image
              src={comic.cover_url}
              alt={comic.title}
              width={128}
              height={176}
              className="w-full"
            />
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="font-semibold truncate text-3xl">{comic.title}</h3>
            <Link href="/main/profile">
              <Button className="flex items-center gap-2 p-0" variant={"link"}>
                <Avatar>
                  <AvatarImage src={comic.user.avatar} alt={comic.user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <span className="truncate font-medium">{comic.user.name}</span>
              </Button>
            </Link>
            <p className="flex items-center gap-1 text-sm text-muted-foreground my-5">
              {comic.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {comic.genres.map((g) => (
                <Badge key={g} variant="outline">
                  {g}
                </Badge>
              ))}
            </div>
            <Toggle
              aria-label="Toggle Favorite"
              variant="outline"
              className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-primary data-[state=on]:*:[svg]:stroke-primary"
            >
              <Heart />
              ADD TO FAVORITE
            </Toggle>
            {/* <Button variant="outline" className="mt-3">
              <Plus size={36} />
              ADD TO FAVORITE
            </Button> */}
          </div>
        </div>

        {/* Chapters */}
        <div className="mt-20">
          <h2 className="text-primary text-lg font-semibold mb-6 border-l-4 border-primary pl-3">
            Chapters
          </h2>
          <Swiper
            direction="vertical"
            slidesPerView={5}
            spaceBetween={12}
            mousewheel={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            modules={[Mousewheel]}
            className="h-[800px]"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {comic.chapter.map((ch, index) => {
              // Middle 3 items should be active
              const isMiddleActive = Math.abs(index - activeIndex) <= 1;

              return (
                <SwiperSlide key={ch.chapter_id} className="transition-all">
                  <div
                    className={`transition-all duration-300 ${
                      isMiddleActive
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-40"
                    }`}
                  >
                    <ChatperCard chapter={ch} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Ratings & Reviews Section */}
      <div>
        <h2 className="text-primary text-lg font-semibold mb-6 border-l-4 border-primary pl-3">
          Ratings & Reviews
        </h2>

        {/* Average Rating */}
        <div className="flex items-center gap-2 mb-4">
          <Rating value={rating} onValueChange={setRating}>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="text-yellow-400" key={index} />
            ))}
          </Rating>
          {/* {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))} */}
          <span className="text-sm text-muted-foreground">
            ({rating} out of 5)
          </span>
        </div>

        {/* Review Input */}
        <div className="mb-20">
          <div className="flex items-start gap-3 mb-2">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=31" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Write your review..."
                rows={6}
                className="resize-none"
              />
            </div>
          </div>
          <Button className="float-right">Submit</Button>
        </div>

        {/* User Reviews */}
        <div className="space-y-2 clear-both">
          {comic.ratings.map((r) => (
            <div key={r.rating_id} className="border p-3 rounded-md">
              <div className="flex items-center gap-3 mb-1">
                <Avatar>
                  <AvatarImage src={r.user.avatar} alt={r.user.name} />
                  <AvatarFallback>{r.user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{r.user.name}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < r.score
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground my-3">{r.review}</p>
              <p className=" text-sm ">
                {format(new Date(r.created_at), "MMM dd, yyyy")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
