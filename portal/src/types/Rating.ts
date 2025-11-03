interface Rating {
  rating_id: string;
  score: 1 | 2 | 3 | 4 | 5; // e.g., 1 to 5
  review: string;
  user_id: string;
  comic_id: string;
  created_at: string;
}

type RatingWithUser = Omit<Rating, "user_id"> & { user: User };
