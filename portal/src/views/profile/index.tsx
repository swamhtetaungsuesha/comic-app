import "@/app/(main)/user/[user]/creator-profile.css";
import CreatorBanner from "./banner/CreatorBanner";
import CreatorProfileCard from "./card/CreatorProfileCard";
import CreatorTabs from "./CreatorTabs";

export default function Profile({ user }: { user: Profile }) {
  return (
    <div className="creator-page">
      <div className="relative">
        <CreatorBanner bannerUrl={user.bannerUrl} />
        <CreatorProfileCard user={user} />
      </div>
      <main className="creator-main">
        <CreatorTabs user={user} />
      </main>
    </div>
  );
}
