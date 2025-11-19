interface Sale {
  sale_id: string;
  chapter_id: string;
  user_id: string;
  created_at: string;
  status: "Requested" | "Completed" | "Failed";
  amount: number;
}

type SaleWithChapterAndUser = Omit<Sale, "chapter_id" | "user_id"> & {
  chapter: {
    chapter_id: string;
    title: string;
  };
  user: User;
};
