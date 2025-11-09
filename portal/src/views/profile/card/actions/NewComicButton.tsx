"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface NewComicButtonProps {
  fullWidth?: boolean;
}

export default function NewComicButton({ fullWidth }: NewComicButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={fullWidth ? "flex-1" : ""}>
          <ImageIcon className="h-4 w-4 mr-2" />
          New Comic
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Comic</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Comic creation form (upload PDF or images) goes here */}
          <p>Comic creation form placeholder...</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
