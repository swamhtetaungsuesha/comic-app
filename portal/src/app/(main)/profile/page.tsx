import { mockProfile } from "@/lib/dummy_data";
import Profile from "@/views/profile";
import Image from "next/image";

export default function ProfilePage() {
  return <Profile user={mockProfile} isOwner={true} />;
}
