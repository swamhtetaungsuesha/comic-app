"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings, Trash2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { SocialIcon } from "react-social-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FormImageDropzone from "@/components/ui/form-image-dropzone";

interface EditProfileButtonProps {
  iconOnly?: boolean;
  fullWidth?: boolean;
}

const ProfileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email("Invalid email address."),
  avatar: z.string().url("Avatar URL must be valid."),
  bannerUrl: z.string().url("Banner URL must be valid."),
  bio: z.string().max(500, "Bio must be under 500 characters."),
  social: z.array(z.string().url("Invalid URL")),
});

export default function EditProfileButton({
  iconOnly,
  fullWidth,
}: EditProfileButtonProps) {
  // Local state for input (NOT in Zod schema)
  const [socialInput, setSocialInput] = useState("");

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      avatar: "",
      bannerUrl: "",
      bio: "",
      social: [],
    },
  });

  const social = form.watch("social");

  const addSocial = () => {
    if (!socialInput) return;

    try {
      new URL(socialInput);
    } catch {
      form.setError("social", { message: "Invalid URL format." });
      return;
    }

    form.setValue("social", [...social, socialInput]);
    setSocialInput("");
  };

  const removeSocial = (index: number) => {
    form.setValue(
      "social",
      social.filter((_, i) => i !== index)
    );
  };

  const onSubmit = (values: z.infer<typeof ProfileSchema>) => {
    console.log("Profile Updated:", values);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size={iconOnly ? "icon" : "default"}
          className={fullWidth ? "flex-1" : ""}
        >
          <Settings className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-2"} />
          {!iconOnly && "Edit Profile"}
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
        </SheetHeader>
        <div className="px-4 overflow-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* NAME */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>Your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* EMAIL */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* AVATAR */}
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Avatar URL</FormLabel>
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

              {/* BANNER */}
              <FormField
                control={form.control}
                name="bannerUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Banner URL</FormLabel>
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

              {/* BIO */}
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none"
                        placeholder="Tell something about yourself..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* SOCIAL LINKS */}
              <FormField
                control={form.control}
                name="social"
                render={() => (
                  <FormItem>
                    <FormLabel>Social Links</FormLabel>

                    {/* One input + add button */}
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="https://social-link.com"
                        value={socialInput}
                        onChange={(e) => setSocialInput(e.target.value)}
                      />
                      <Button type="button" size="icon" onClick={addSocial}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <FormMessage />

                    {/* Social Icons */}
                    <div className="flex gap-3 flex-wrap pt-3">
                      {social.map((url, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <SocialIcon
                            url={url}
                            style={{ height: 40, width: 40 }}
                          />
                          <Button
                            type="button"
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6 text-red-500"
                            onClick={() => removeSocial(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </FormItem>
                )}
              />

              {/* SUBMIT */}
              <Button type="submit" className="w-full">
                Save Profile
              </Button>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
