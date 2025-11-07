"use client";
import { Button } from "@/components/ui/button";
import { Settings, ImageIcon } from "lucide-react";

interface CreatorActionsProps {
  desktop?: boolean;
}

export default function CreatorActions({ desktop }: CreatorActionsProps) {
  return desktop ? (
    <div className="hidden md:flex space-x-2">
      <Button variant="outline" size="icon" aria-label="Edit Profile Settings">
        <Settings className="h-5 w-5" />
      </Button>
      <Button className="flex items-center space-x-2">
        <ImageIcon className="h-5 w-5" />
        <span>New Comic</span>
      </Button>
    </div>
  ) : (
    <div className="flex md:hidden space-x-3 mt-4 w-full">
      <Button variant="outline" className="flex-1">
        <Settings className="h-4 w-4 mr-2" />
        Edit Profile
      </Button>
      <Button className="flex-1">
        <ImageIcon className="h-4 w-4 mr-2" />
        New Comic
      </Button>
    </div>
  );
}
