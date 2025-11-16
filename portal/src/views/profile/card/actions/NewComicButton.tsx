"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ImageIcon, X } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import FormImageDropzone from "@/components/ui/form-image-dropzone";
import { CategoryComboBox } from "@/components/category-combo-box";

// ---------------------------------------------------
// SCHEMA
// ---------------------------------------------------
const ComicSchema = z.object({
  title: z.string().min(2, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 chars"),
  category: z.array(z.string()).nonempty("Select at least 1 category"),
  cover_url: z.string().optional(),
});

type ComicValues = z.infer<typeof ComicSchema>;

// ---------------------------------------------------
// CATEGORY SEARCH API
// ---------------------------------------------------
async function fetchCategories(query: string) {
  const res = await fetch(`/api/categories?query=${query}`);
  return res.json();
}

// ---------------------------------------------------
// COMPONENT
// ---------------------------------------------------
export default function NewComicButton({ fullWidth }: { fullWidth?: boolean }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const form = useForm<ComicValues>({
    resolver: zodResolver(ComicSchema),
    defaultValues: {
      title: "",
      description: "",
      category: [],
      cover_url: "",
    },
  });

  // ---------------------------------------------------
  // SEARCH CATEGORIES WHEN USER TYPES
  // ---------------------------------------------------
  useEffect(() => {
    if (search.length === 0) return setResults([]);

    const timeout = setTimeout(async () => {
      setLoading(true);
      const data = await fetchCategories(search.toLowerCase());
      setResults(data.categories || []);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  // ---------------------------------------------------
  // ADD CATEGORY
  // ---------------------------------------------------
  const addCategory = (cat: string) => {
    const current = form.getValues("category");

    if (!current.includes(cat)) {
      form.setValue("category", [...current, cat]);
    }
    setSearch("");
    setResults([]);
  };

  // ---------------------------------------------------
  // REMOVE CATEGORY
  // ---------------------------------------------------
  const removeCategory = (cat: string) => {
    form.setValue(
      "category",
      form.getValues("category").filter((c) => c !== cat)
    );
  };

  const onSubmit = (values: ComicValues) => {
    console.log("Create comic:", values);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={fullWidth ? "flex-1" : ""}>
          <ImageIcon className="h-4 w-4 mr-2" />
          New Comic
        </Button>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <h2 className="text-lg font-semibold">Create New Comic</h2>
        </SheetHeader>
        <div className="px-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* TITLE */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comic Title</FormLabel>
                    <FormControl>
                      <Input placeholder="My Amazing Comic" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* DESCRIPTION */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none"
                        placeholder="Write your comic summary..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* COVER UPLOAD */}
              <FormField
                control={form.control}
                name="cover_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Image</FormLabel>
                    <FormControl>
                      <FormImageDropzone
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* CATEGORY */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>

                    <CategoryComboBox
                      selected={field.value}
                      onChange={field.onChange}
                    />

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* SUBMIT */}
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
