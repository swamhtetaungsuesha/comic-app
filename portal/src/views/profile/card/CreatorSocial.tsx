"use client";
import { SocialIcon } from "react-social-icons";

export default function CreatorSocial({ social }: { social: string[] }) {
  return (
    <div className="profile-card-socials">
      <span>Connect:</span>
      {social.map((s) => (
        <SocialIcon url={s} key={s} />
      ))}
    </div>
  );
}
