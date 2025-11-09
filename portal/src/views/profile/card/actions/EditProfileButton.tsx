"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface EditProfileButtonProps {
  iconOnly?: boolean;
  fullWidth?: boolean;
}

export default function EditProfileButton({
  iconOnly,
  fullWidth,
}: EditProfileButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size={iconOnly ? "icon" : "default"}
          className={fullWidth ? "flex-1" : ""}
        >
          <Settings className={iconOnly ? "h-5 w-5" : "h-4 w-4 mr-2"} />
          {!iconOnly && "Edit Profile"}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Your edit form here */}
          <p>Profile editing form goes here...</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
