import { format } from "date-fns";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
export default function ChatperCard({
  chapter,
}: {
  chapter: ChapterWithComicAndCommentCount | ChapterWithCommentCount;
}) {
  const comic = (chapter as ChapterWithComicAndCommentCount).comic;
  return (
    <Link href={`/viewer/${chapter.chapter_id}`}>
      <div className="flex flex-row items-center justify-between overflow-hidden hover:bg-primary-foreground transition-all duration-300">
        <img
          src={chapter.cover_url}
          alt={chapter.title}
          className="w-1/4 h-full object-cover max-w-[100px]"
        />
        <div className="p-4 flex-1">
          <h2 className="text-lg font-semibold text-primary">
            #00{chapter.chapter_number}
          </h2>
          <p className="text-muted-foreground text-sm">
            {comic && comic.title + " : "}
            {chapter.title}
          </p>
          <p className=" text-sm mt-10">
            {format(new Date(chapter.created_at), "MMM dd, yyyy")}
          </p>
        </div>
        <div className="flex items-center gap-2 px-4">
          <MessageCircle />
          <span className="text-muted-foreground">{chapter.comment_count}</span>
        </div>
      </div>
    </Link>
  );
}
