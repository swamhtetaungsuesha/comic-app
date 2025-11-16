"use client";

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { useState } from "react";

export default function FormImageDropzone({
  value,
  onChange,
}: {
  value?: string;
  onChange: (base64: string) => void;
}) {
  const [files, setFiles] = useState<File[] | undefined>();
  const [preview, setPreview] = useState<string | undefined>(value);

  const handleDrop = (files: File[]) => {
    setFiles(files);

    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setPreview(e.target.result);
          onChange(e.target.result); // 🔥 send base64 to form
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <Dropzone
      accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
      onDrop={handleDrop}
      onError={console.error}
      src={files}
    >
      <DropzoneEmptyState />
      <DropzoneContent>
        {preview && (
          <div className="h-[102px] w-full relative">
            <img
              alt="Preview"
              src={preview}
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          </div>
        )}
      </DropzoneContent>
    </Dropzone>
  );
}
