interface User {
  user_id: string;
  name: string;
  email: string;
  avatar: string;
}

interface Profile extends User {
  bio: string;
  bannerUrl: string;
  social: string[];
  stats: {
    followers: number;
    following: number;
    creations: number;
    awards: number;
  };
  creations: Omit<Comic, "user_id">[];
  awards: Omit<Award, "user_id">[];
}
