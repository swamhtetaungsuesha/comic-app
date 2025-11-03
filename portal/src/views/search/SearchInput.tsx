import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="absolute w-full max-w-xl bottom-1/3 left-1/2 -translate-x-1/2 rounded-md bg-input/50">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="FIND BY TITLE OR AUTHOR"
        className="py-5 pl-10 w-full border-primary/60"
      />
    </div>
  );
}
