import { initialize } from "next/dist/server/lib/render-server";
import { create } from "zustand";

interface CreateChaptersState {
  comic: ComicWithRatings | null;
  chapters: Omit<Chapter, "comic_id" | "created_at">[];
  pages: Page[];
  selectedChapter: Omit<Chapter, "comic_id" | "created_at"> | null;
  loading: boolean;

  // Actions
  initialize: (data: ChaptersWithComicAndRatings) => void;
  fetchPages: (chapterId: string) => Promise<void>;
  selectChapter: (chapterId: string) => void;
  addChapter: (
    ch: Omit<Chapter, "comic_id" | "created_at" | "chapter_id">
  ) => void;
  updateChapter: (ch: Omit<Chapter, "comic_id" | "created_at">) => void;
  addPage: (page: Page) => void;
  reset: () => void;
}

export const useCreateChaptersStore = create<CreateChaptersState>(
  (set, get) => ({
    comic: null,
    chapters: [],
    pages: [],
    selectedChapter: null,
    loading: false,

    initialize: (data) => {
      set({
        comic: {
          comic_id: data.comic_id,
          title: data.title,
          cover_url: data.cover_url,
          rating: data.rating,
        },
        chapters: data.chapters,
        selectedChapter: data.chapters[0] || null,
      });
    },
    // 🔹 Fetch pages by chapter
    fetchPages: async (chapterId: string) => {
      set({ loading: true });
      try {
        const res = await fetch(`/api/chapters/${chapterId}/pages`);
        if (!res.ok) throw new Error("Failed to fetch pages");
        const data = await res.json();
        set({
          pages: data.pages || [],
          loading: false,
        });
      } catch (err) {
        console.error(err);
        set({ loading: false });
      }
    },

    selectChapter: (chapterId) => {
      const chapter =
        get().chapters.find((ch) => ch.chapter_id === chapterId) || null;
      set({ selectedChapter: chapter });
      // Optionally clear or fetch pages
      get().fetchPages(chapterId);
    },

    addChapter: (ch) => {
      const newChapterId = "ch_" + Math.random().toString(36).substring(2, 9);
      const newChapter = {
        ...ch,
        chapter_id: newChapterId,
        created_at: new Date().toISOString(),
      };
      set((state) => ({ chapters: [...state.chapters, newChapter] }));
    },

    updateChapter: (ch) =>
      set((state) => ({
        chapters: state.chapters.map((item) =>
          item.chapter_id === ch.chapter_id ? ch : item
        ),
      })),

    addPage: (page) => set((state) => ({ pages: [...state.pages, page] })),

    reset: () =>
      set({
        comic: null,
        chapters: [],
        pages: [],
        selectedChapter: null,
        loading: false,
      }),
  })
);
