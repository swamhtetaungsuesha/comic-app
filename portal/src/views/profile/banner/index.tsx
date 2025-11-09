"use client";
import Image from "next/image";
import { FC } from "react";

interface CreatorBannerProps {
  bannerUrl: string;
}

const CreatorBanner: FC<CreatorBannerProps> = ({ bannerUrl }) => (
  <div className="profile-banner">
    <Image
      src={bannerUrl}
      alt="Creator Banner"
      width={1200}
      height={250}
      // onError={(e) => {
      //   e.currentTarget.onerror = null;
      //   e.currentTarget.src =
      //     "https://placehold.co/1200x250/1e40af/ffffff?text=Creator+Banner+Art";
      // }}
    />
  </div>
);

export default CreatorBanner;
