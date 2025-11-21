import ChapterEditingDashboardView from "@/views/editor";

const comicWithChapters: ChaptersWithComicAndRatings = {
  comic_id: "comic123",
  title: "Sample Comic",
  cover_url: "https://images.justwatch.com/poster/8906736/s718/season-1.jpg",
  rating: 4.5,
  chapters: [
    {
      chapter_id: "chapter1",
      title: "Chapter 1",
      chapter_number: 1,
      cover_url: "https://example.com/chapter1.jpg",
      created_at: "2023-01-01",
      is_premium: false,
    },
  ],
};

const ChapterEditingDashboardPage = () => {
  return <ChapterEditingDashboardView comicWithChapters={comicWithChapters} />;
};

export default ChapterEditingDashboardPage;
