"use client";
import { FC } from "react";

interface CreatorBannerProps {
  bannerUrl: string;
}

const CreatorBanner: FC<CreatorBannerProps> = ({ bannerUrl }) => (
  <div className="w-full h-48 sm:h-60 bg-secondary overflow-hidden -z-10">
    <img
      src={bannerUrl}
      alt="Creator Banner"
      className="w-full h-full object-cover opacity-70"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src =
          "https://placehold.co/1200x250/1e40af/ffffff?text=Creator+Banner+Art";
      }}
    />
  </div>
);

export default CreatorBanner;
