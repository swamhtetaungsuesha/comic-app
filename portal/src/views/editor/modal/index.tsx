import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateChaptersStore } from "@/store/createChaptersStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import { title } from "process";
import { FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface ChapterModalProps {
  isEdit: boolean;
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must not be empty.",
  }),
  isPremium: z.boolean(),
  price: z.number().min(500).optional(),
});
const ChapterModal: FC<ChapterModalProps> = ({ isEdit }) => {
  const { updateChapter, selectedChapter, addChapter } =
    useCreateChaptersStore();

  const defaultValues =
    isEdit && selectedChapter
      ? {
          title: selectedChapter.title,
          isPremium: selectedChapter.is_premium,
          price: selectedChapter.price,
        }
      : {
          title: "",
          isPremium: false,
          price: 500,
        };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (isEdit && selectedChapter) {
      updateChapter({
        ...selectedChapter,
        title: values.title,
        is_premium: values.isPremium,
        price: values.isPremium ? values.price || 500 : 0,
      });
    } else {
      addChapter({
        title: values.title,
        chapter_number:
          Math.max(
            0,
            ...useCreateChaptersStore
              .getState()
              .chapters.map((ch) => ch.chapter_number)
          ) + 1,
        is_premium: values.isPremium,
        price: values.isPremium ? values.price || 500 : 0,
        cover_url: "",
      });
    }
  };

  return (
    <DialogContent className="sm:max-w-md bg-[var(--card)] text-[var(--card-foreground)] border-[var(--border)]">
      <DialogHeader>
        <DialogTitle className="text-[var(--foreground)]">
          Create New Chapter
        </DialogTitle>
      </DialogHeader>

      <Collapsible>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chapter Title</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g. The Dawn of Heroes" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isPremium"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <FormControl>
                      <CollapsibleTrigger>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </CollapsibleTrigger>
                    </FormControl>
                    Premium Chapter{" "}
                    <Lock className="w-4 h-4 text-[var(--primary)]" />
                  </FormLabel>

                  <FormMessage />
                </FormItem>
              )}
            />

            <CollapsibleContent>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (MMK)</FormLabel>
                    <FormControl>
                      <Input type="number" step="200" min="500" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CollapsibleContent>

            <DialogFooter>
              <Button type="submit">Create Chapter</Button>
            </DialogFooter>
          </form>
        </Form>
      </Collapsible>
    </DialogContent>
  );
};

export default ChapterModal;
