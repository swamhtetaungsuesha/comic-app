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
  };
  contents: Omit<Comic, "user_id">[];
}
