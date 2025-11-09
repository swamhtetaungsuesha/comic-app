import CreatorBanner from "./banner";
import CreatorProfileCard from "./card";
import CreatorTabs from "./tabs";
import { FC } from "react";

interface ProfileProps {
  user: Profile;
  isOwner: boolean;
}

const Profile: FC<ProfileProps> = ({ user, isOwner }) => {
  return (
    <div className="profile-container">
      <div className="profile-main">
        <CreatorBanner bannerUrl={user.bannerUrl} />
        <CreatorProfileCard user={user} isOwner={isOwner} />
      </div>
      <main className="profile-contents">
        <CreatorTabs user={user} isOwner={isOwner} />
      </main>
    </div>
  );
};

export default Profile;
