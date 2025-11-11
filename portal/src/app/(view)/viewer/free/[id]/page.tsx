"use client";

import { useState } from "react";
import {
  BookOpen,
  Layers,
  MessageSquare,
  Share2,
  Flag,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

// --- 1. INTERFACE DEFINITIONS ---
interface Page {
  page_id: string;
  image_url: string;
  page_number: number;
  chapter_id: string;
}

interface Chapter {
  chapter_id: string;
  title: string;
  chapter_number: number;
  cover_url: string;
  comic_id: string;
  created_at: string;
}

interface Comment {
  comment_id: string;
  user: string;
  content: string;
  timestamp: string;
}

type ChapterWithComicAndComment = Omit<Chapter, "comic_id"> & {
  comic: {
    title: string;
    cover_url: string;
  };
  page: Omit<Page, "chapter_id">[];
  comments: Comment[];
};

// --- 2. MOCK DATA ---
const MOCK_CHAPTERS: ChapterWithComicAndComment[] = [
  {
    chapter_id: "chp-001",
    title: "The Awakening of A.I.",
    chapter_number: 1,
    cover_url: "https://placehold.co/400x600/1e293b/94a3b8?text=Cover",
    created_at: "2024-05-20",
    comic: {
      title: "Cyberpunk Echoes",
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    page: [
      {
        page_id: "p-1",
        page_number: 1,
        image_url: "https://placehold.co/800x1200/0f172a/f1f5f9?text=Page+1",
      },
      {
        page_id: "p-2",
        page_number: 2,
        image_url: "https://placehold.co/800x1200/0f172a/f1f5f9?text=Page+2",
      },
      {
        page_id: "p-3",
        page_number: 3,
        image_url: "https://placehold.co/800x1200/0f172a/f1f5f9?text=Page+3",
      },
      {
        page_id: "p-4",
        page_number: 4,
        image_url: "https://placehold.co/800x1200/0f172a/f1f5f9?text=Page+4",
      },
      {
        page_id: "p-5",
        page_number: 5,
        image_url: "https://placehold.co/800x1200/0f172a/f1f5f9?text=Page+5",
      },
    ],
    comments: [
      {
        comment_id: "c-1",
        user: "GamerTag88",
        content: "That cliffhanger was intense! Can't wait for Chapter 2.",
        timestamp: "2 days ago",
      },
      {
        comment_id: "c-2",
        user: "ArtLover",
        content: "The panel layouts on page 3 are stunning. Great work!",
        timestamp: "1 day ago",
      },
    ],
  },
  {
    chapter_id: "chp-002",
    title: "Digital Uprising",
    chapter_number: 2,
    cover_url: "https://placehold.co/400x600/1e293b/94a3b8?text=Cover+2",
    created_at: "2024-05-27",
    comic: {
      title: "Cyberpunk Echoes",
      cover_url: "https://placehold.co/400x600/1e293b/94a3b8?text=Comic+Cover",
    },
    page: [
      {
        page_id: "p-6",
        page_number: 1,
        image_url:
          "https://placehold.co/800x1200/0f172a/f1f5f9?text=Chapter+2+Page+1",
      },
      {
        page_id: "p-7",
        page_number: 2,
        image_url:
          "https://placehold.co/800x1200/0f172a/f1f5f9?text=Chapter+2+Page+2",
      },
      {
        page_id: "p-8",
        page_number: 3,
        image_url:
          "https://placehold.co/800x1200/0f172a/f1f5f9?text=Chapter+2+Page+3",
      },
    ],
    comments: [
      {
        comment_id: "c-3",
        user: "ComicFan22",
        content: "This chapter is even better than the first one!",
        timestamp: "3 hours ago",
      },
    ],
  },
  {
    chapter_id: "chp-003",
    title: "Neon Hearts",
    chapter_number: 3,
    cover_url: "https://placehold.co/400x600/1e293b/94a3b8?text=Cover+3",
    created_at: "2024-06-03",
    comic: {
      title: "Cyberpunk Echoes",
      cover_url: "https://placehold.co/400x600/1e293b/94a3b8?text=Comic+Cover",
    },
    page: [
      {
        page_id: "p-9",
        page_number: 1,
        image_url:
          "https://placehold.co/800x1200/0f172a/f1f5f9?text=Chapter+3+Page+1",
      },
      {
        page_id: "p-10",
        page_number: 2,
        image_url:
          "https://placehold.co/800x1200/0f172a/f1f5f9?text=Chapter+3+Page+2",
      },
    ],
    comments: [],
  },
];

// --- 3. VIEW COMPONENTS ---

/**
 * Renders comic pages vertically with scrolling
 */
const VerticalView = ({
  pages,
}: {
  pages: ChapterWithComicAndComment["page"];
}) => (
  <div className=" w-full max-w-4xl mx-auto pt-4 pb-12">
    {pages.map((page) => (
      <div
        key={page.page_id}
        className="w-full bg-gray-900 dark:bg-black overflow-hidden"
      >
        <img
          src={page.image_url || "/placeholder.svg"}
          alt={`Page ${page.page_number}`}
          className="w-full h-auto object-contain"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/800x1200/ef4444/fee2e2?text=Error+Loading+Page+${page.page_number}`;
          }}
        />
      </div>
    ))}
  </div>
);

/**
 * Renders comic pages one at a time with navigation
 */
const PagedView = ({
  pages,
}: {
  pages: ChapterWithComicAndComment["page"];
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const currentPage = pages[currentPageIndex];
  const totalPages = pages.length;

  const goToNextPage = () => {
    setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const goToPrevPage = () => {
    setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[calc(100vh-160px)]  p-2 md:p-4 rounded-lg overflow-hidden">
      {/* Prev Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevPage}
        disabled={currentPageIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-50 hover:opacity-100 transition-opacity disabled:opacity-30 w-20 h-20 rounded-none"
      >
        <ChevronLeft className=" size-20 text-white" />
      </Button>

      {/* Current Page */}
      <div className="w-full h-full flex items-center justify-center">
        {currentPage ? (
          <img
            src={currentPage.image_url || "/placeholder.svg"}
            alt={`Page ${currentPage.page_number} of ${totalPages}`}
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/800x1200/ef4444/fee2e2?text=Error+Loading+Page+${currentPage.page_number}`;
            }}
          />
        ) : (
          <div className="text-white flex items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin" /> Loading Page...
          </div>
        )}
      </div>

      {/* Next Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNextPage}
        disabled={currentPageIndex === totalPages - 1}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-50 hover:opacity-100 transition-opacity disabled:opacity-30 w-20 h-20 rounded-none"
      >
        <ChevronRight className="size-20 text-white" />
      </Button>

      {/* Page Counter */}
      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full font-mono z-20">
        Page {currentPageIndex + 1} / {totalPages}
      </div>
    </div>
  );
};

// --- 4. COMMENTS SECTION ---

/**
 * Comments component
 */
const CommentsSection = ({
  chapter,
}: {
  chapter: ChapterWithComicAndComment;
}) => {
  const [newComment, setNewComment] = useState("");
  const [isPostingComment, setIsPostingComment] = useState(false);

  const handleCommentPost = () => {
    if (!newComment.trim()) return;

    setIsPostingComment(true);
    setTimeout(() => {
      console.log("Comment posted:", newComment);
      setNewComment("");
      setIsPostingComment(false);
    }, 1000);
  };

  return (
    <div className="space-y-6 flex flex-col h-full px-4">
      {/* Comment Input */}
      <div className="space-y-3 flex-shrink-0 border-b border-border pb-4">
        <textarea
          className="w-full p-3 border border-input rounded-lg bg-muted/50 focus:ring-2 focus:ring-ring focus:border-ring transition-colors resize-none"
          rows={3}
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button
          onClick={handleCommentPost}
          disabled={!newComment.trim() || isPostingComment}
          className="float-right"
        >
          {isPostingComment ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Posting...
            </>
          ) : (
            "Post Comment"
          )}
        </Button>
      </div>

      {/* Comments List */}
      <div className="space-y-4 flex-grow overflow-y-auto">
        {chapter.comments.length === 0 ? (
          <p className="text-center text-muted-foreground pt-10">
            No comments yet. Be the first!
          </p>
        ) : (
          chapter.comments.map((comment) => (
            <div
              key={comment.comment_id}
              className="border-b last:border-b-0 pb-3"
            >
              <div className="font-semibold text-primary">{comment.user}</div>
              <p className="text-foreground mt-1 break-words">
                {comment.content}
              </p>
              <div className="text-xs text-muted-foreground mt-1">
                {comment.timestamp}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// --- 5. MAIN COMPONENT ---

export default function FreeViwer() {
  const [selectedChapterId, setSelectedChapterId] = useState("chp-001");
  const [viewMode, setViewMode] = useState<"vertical" | "paged">("vertical");
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const chapter =
    MOCK_CHAPTERS.find((ch) => ch.chapter_id === selectedChapterId) ||
    MOCK_CHAPTERS[0];

  const handleCopyShareLink = async () => {
    // const link = window.location.href;
    // try {
    //   const textarea = document.createElement("textarea");
    //   textarea.value = link;
    //   document.body.appendChild(textarea);
    //   textarea.select();
    //   document.execCommand("copy");
    //   document.body.removeChild(textarea);
    //   alert("Link copied to clipboard!");
    //   setIsShareOpen(false);
    // } catch (err) {
    //   console.error("Failed to copy text: ", err);
    // }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className=" mx-auto">
        {/* --- HEADER BAR --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 border-b border-border gap-4 px-4 py-2 bg-card sticky top-0 z-20">
          {/* Title & Info */}
          <div className="flex-1 flex items-center gap-4 w-full">
            <Image
              src={chapter.comic.cover_url}
              width={60}
              height={100}
              alt={chapter.comic.title}
            />
            <div>
              <h1 className="text-3xl font-extrabold text-foreground leading-tight">
                {chapter.title}
              </h1>
              <p className="text-lg text-primary font-semibold mt-1">
                <a href="#" className="hover:underline">
                  {chapter.comic.title}
                </a>{" "}
                - Chapter {chapter.chapter_number}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center w-full lg:w-auto my-auto">
            <Select
              value={selectedChapterId}
              onValueChange={setSelectedChapterId}
            >
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Select chapter..." />
              </SelectTrigger>
              <SelectContent>
                {MOCK_CHAPTERS.map((ch) => (
                  <SelectItem key={ch.chapter_id} value={ch.chapter_id}>
                    Chapter {ch.chapter_number}: {ch.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Modes */}
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                variant={viewMode === "vertical" ? "default" : "outline"}
                onClick={() => setViewMode("vertical")}
                className="flex-1 sm:flex-none"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Scroll
              </Button>
              <Button
                variant={viewMode === "paged" ? "default" : "outline"}
                onClick={() => setViewMode("paged")}
                className="flex-1 sm:flex-none"
              >
                <Layers className="w-4 h-4 mr-2" />
                Paged
              </Button>
            </div>

            {/* Actions */}
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsCommentsOpen(true)}
                className="relative flex-1 sm:flex-none"
              >
                <MessageSquare className="w-4 h-4" />
                {chapter.comments.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {chapter.comments.length}
                  </span>
                )}
              </Button>

              {/* More Actions */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setIsShareOpen(true)}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Chapter
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsReportOpen(true)}>
                    <Flag className="w-4 h-4 mr-2 text-destructive" />
                    <span className="text-destructive">Report Content</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Comic Viewer */}
        <div className="p-0 overflow-hidden">
          {viewMode === "vertical" ? (
            <VerticalView pages={chapter.page} />
          ) : (
            <PagedView pages={chapter.page} />
          )}
        </div>
      </div>

      {/* --- DIALOGS & SHEETS --- */}

      {/* Share Dialog */}
      <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Chapter Link</DialogTitle>
            <DialogDescription>
              Share this amazing comic chapter with your friends!
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={window.location.href}
              className="flex-grow p-2 border border-input rounded-md bg-muted text-sm truncate"
            />
            <Button onClick={handleCopyShareLink}>Copy Link</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Report Dialog */}
      <Dialog open={isReportOpen} onOpenChange={setIsReportOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report Chapter</DialogTitle>
            <DialogDescription>
              Please describe why you are reporting this chapter. All reports
              are confidential.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <textarea
              className="w-full p-3 border border-input rounded-md bg-muted/50 focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
              rows={4}
              placeholder="e.g., Copyright infringement, inappropriate content, etc."
            />
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => setIsReportOpen(false)}
            >
              Submit Report
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Comments Sheet */}
      <Sheet open={isCommentsOpen} onOpenChange={setIsCommentsOpen}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>
              Chapter Comments ({chapter.comments.length})
            </SheetTitle>
          </SheetHeader>
          <CommentsSection chapter={chapter} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
