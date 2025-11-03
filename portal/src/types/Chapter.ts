interface Chapter {
  chapter_id: string;
  title: string;
  chapter_number: number;
  cover_url: string;
  comic_id: string;
  created_at: string;
}

type ChapterWithComicAndCommentCount = Omit<Chapter, "comic_id"> & {
  comic: {
    title: string;
  };
  comment_count: number;
};

type ChapterWithCommentCount = Omit<Chapter, "comic_id"> & {
  comment_count: number;
};
