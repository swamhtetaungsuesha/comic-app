interface Comic {
  comic_id: string;
  title: string;
  description: string;
  genres: string[];
  cover_url: string;
  user_id: string;
}

type ComicWithUser = Omit<Comic, "user_id"> & { user: User };

type ComicWithChapterAndUserAndRating = ComicWithUser & {
  chapter: ChapterWithCommentCount[];
  ratings: Omit<RatingWithUser, "comic_id">[];
};
