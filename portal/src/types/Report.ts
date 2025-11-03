interface Report {
  report_id: string;
  reason: "copyright" | "inappropriate content" | "spam" | "other";
  reported_at: string;
  status: "pending" | "reviewed" | "resolved";
  user_id: string;
  comic_id: string;
}
