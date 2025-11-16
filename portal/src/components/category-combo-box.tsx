// "use client";

// import * as React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { X } from "lucide-react";

// interface Props {
//   selected: string[];
//   onChange: (categories: string[]) => void;
//   fetchCategories: (query: string) => Promise<string[]>;
// }

// export function CategoryComboBox({
//   selected,
//   onChange,
//   fetchCategories,
// }: Props) {
//   const [open, setOpen] = React.useState(false);
//   const [query, setQuery] = React.useState("");
//   const [results, setResults] = React.useState<string[]>([]);
//   const [loading, setLoading] = React.useState(false);

//   // Search categories
//   React.useEffect(() => {
//     if (!query) return setResults([]);

//     const delay = setTimeout(async () => {
//       setLoading(true);
//       const data = await fetchCategories(query);
//       setResults(data);
//       setLoading(false);
//     }, 300);

//     return () => clearTimeout(delay);
//   }, [query]);

//   // Add category
//   const addCategory = (cat: string) => {
//     if (!selected.includes(cat)) onChange([...selected, cat]);
//     setOpen(false);
//     setQuery("");
//   };

//   // Remove category
//   const removeCategory = (cat: string) => {
//     onChange(selected.filter((c) => c !== cat));
//   };

//   return (
//     <div className="space-y-2">
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button variant="outline" className="w-full justify-start">
//             {selected.length > 0 ? (
//               <div className="flex gap-2 flex-wrap">
//                 {selected.map((cat) => (
//                   <span
//                     key={cat}
//                     className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-md text-sm"
//                   >
//                     {cat}
//                     <X
//                       className="h-3 w-3 cursor-pointer"
//                       onClick={() => removeCategory(cat)}
//                     />
//                   </span>
//                 ))}
//               </div>
//             ) : (
//               <span className="text-muted-foreground">+ Select categories</span>
//             )}
//           </Button>
//         </PopoverTrigger>

//         <PopoverContent className="w-[250px] p-0">
//           <Command>
//             <CommandInput
//               placeholder="Search category..."
//               value={query}
//               onValueChange={setQuery}
//             />
//             <CommandList>
//               {loading && <div className="p-2 text-sm">Searching...</div>}

//               {!loading && (
//                 <>
//                   <CommandEmpty>
//                     <div className="p-2">
//                       No results.
//                       <Button
//                         size="sm"
//                         className="mt-2 w-full"
//                         onClick={() => addCategory(query)}
//                       >
//                         + Create "{query}"
//                       </Button>
//                     </div>
//                   </CommandEmpty>

//                   <CommandGroup>
//                     {results.map((cat) => (
//                       <CommandItem
//                         key={cat}
//                         value={cat}
//                         onSelect={() => addCategory(cat)}
//                       >
//                         {cat}
//                       </CommandItem>
//                     ))}
//                   </CommandGroup>
//                 </>
//               )}
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X } from "lucide-react";

const DUMMY_CATEGORIES = [
  "Action",
  "Romance",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Adventure",
  "Sci-Fi",
  "Slice of Life",
  "Mystery",
];

interface Props {
  selected: string[];
  onChange: (categories: string[]) => void;
}

export function CategoryComboBox({ selected, onChange }: Props) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    if (!query) return DUMMY_CATEGORIES;
    return DUMMY_CATEGORIES.filter((cat) =>
      cat.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const addCategory = (cat: string) => {
    if (!selected.includes(cat)) {
      onChange([...selected, cat]);
    }
    setOpen(false);
    setQuery("");
  };

  const removeCategory = (cat: string) => {
    onChange(selected.filter((c) => c !== cat));
  };

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            {selected.length > 0 ? (
              <div className="flex gap-2 flex-wrap">
                {selected.map((cat) => (
                  <span
                    key={cat}
                    className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-md text-sm"
                  >
                    {cat}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeCategory(cat)}
                    />
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-muted-foreground">+ Select categories</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[250px] p-0">
          <Command>
            <CommandInput
              placeholder="Search category..."
              value={query}
              onValueChange={setQuery}
            />
            <CommandList>
              <CommandEmpty>
                <div className="p-2">
                  No results.
                  <Button
                    size="sm"
                    className="mt-2 w-full"
                    onClick={() => addCategory(query)}
                  >
                    + Create "{query}"
                  </Button>
                </div>
              </CommandEmpty>

              <CommandGroup>
                {filtered.map((cat) => (
                  <CommandItem
                    key={cat}
                    value={cat}
                    onSelect={() => addCategory(cat)}
                  >
                    {cat}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
