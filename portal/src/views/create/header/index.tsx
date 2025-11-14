"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useCreateChaptersStore } from "@/store/createChaptersStore";
import { Star } from "lucide-react";
import Image from "next/image";

// .chapter-crreator-header {
//     @apply flex flex-col lg:flex-row justify-between items-start mb-6 border-b border-border gap-4 px-4 py-2 bg-card sticky top-0 z-20
// }

// .chapter-creator-header-title {
//     @apply text-3xl font-extrabold text-foreground leading-tight
// }
// .chapter-creator-header-subtitle {
//     @apply text-lg text-primary font-semibold mt-1
// }
const ComicHeader = () => {
  const { comic } = useCreateChaptersStore();
  if (!comic) {
    return null;
  }
  return (
    <Card>
      {/* Title & Info */}
      <CardContent className="flex items-center gap-4">
        <Image src={comic.cover_url} width={60} height={80} alt={comic.title} />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{comic.title}</h1>
          <p className="float-left flex items-center gap-1 text-sm text-muted-foreground">
            <Star size={16} className="text-yellow-400" fill="#facc15" /> 4.5
            (120)
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComicHeader;
