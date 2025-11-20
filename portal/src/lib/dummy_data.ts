export const mockUsers: User[] = [
  {
    user_id: "user1",
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1",
    email: "koyoharu@example.com",
  },
  {
    user_id: "user2",
    name: "Bran Lee",
    avatar: "https://i.pravatar.cc/150?img=2",
    email: "koyoharu@example.com",
  },
  {
    user_id: "user3",
    name: "Benjamin Franklin",
    avatar: "https://i.pravatar.cc/150?img=3",
    email: "koyoharu@example.com",
  },
  {
    user_id: "user4",
    name: "William Shakespeare",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "koyoharu@example.com",
  },
  {
    user_id: "user5",
    name: "Elizabeth Bennet",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "koyoharu@example.com",
  },
  {
    user_id: "user6",
    name: "Qeen Victoria",
    avatar: "https://i.pravatar.cc/150?img=6",
    email: "koyoharu@example.com",
  },
  {
    user_id: "user7",
    name: "Prince Albert",
    avatar: "https://i.pravatar.cc/150?img=7",
    email: "koyoharu@example.com",
  },
  {
    user_id: "user8",
    name: "Oscar Wilde",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "koyoharu@example.com",
  },
  {
    user_id: "user9",
    name: "Victor Hugo",
    avatar: "https://i.pravatar.cc/150?img=9",
    email: "koyoharu@example.com",
  },
];

// --- MOCK DATA ---
export const mockProfile: Profile = {
  user_id: "creator-12345",
  name: "SketchyScribe",
  email: "@sketchyscribe",
  bio: "Just trying to bring my silly ideas to life, one panel at a time. I specialize in sci-fi, horror, and cozy slice-of-life comics. Always experimenting with new styles.",
  avatar: "https://placehold.co/100x100/1e40af/ffffff?text=SS",
  bannerUrl:
    "https://placehold.co/1200x250/1f2937/ffffff?text=Creator+Banner+Art",
  social: [
    "https://twitter.com/sketchyscribe",
    "https://instagram.com/sketchyscribe_comics",
  ],
  stats: {
    followers: 1245,
    following: 56,
    creations: 12,
    awards: 4,
  },
  creations: [
    {
      comic_id: "1",
      title: "Demon Slayer",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "2",
      title: "One Piece",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
    },
    {
      comic_id: "3",
      title: "Naruto",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "4",
      title: "Attack on Titan",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg",
    },
    {
      comic_id: "5",
      title: "My Hero Academia",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "6",
      title: "Fullmetal Alchemist",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BNDczZWMyMjEtZDI0ZS00YThjLWE2MjEtNTIxNmVmZDhkNDg5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      comic_id: "7",
      title: "Death Note",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
    },
    {
      comic_id: "8",
      title: "Bleach",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "9",
      title: "Dragon Ball",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NfrPSHdw5q7Qsb2kxL9hE0jv0cqhZB8zhA&s",
    },
    {
      comic_id: "10",
      title: "Fairy Tail",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BODlhNTQ3ZDgtMDJlMC00YzdmLWE3ZTMtOWNmMTZkN2I2MzI5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      comic_id: "11",
      title: "Tokyo Ghoul",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "12",
      title: "Black Clover",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_.jpg",
    },
    {
      comic_id: "13",
      title: "Jujutsu Kaisen",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      comic_id: "14",
      title: "Neon Genesis Evangelion",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzyxXv7aNq7QGn1A17vZeGJWnT5Ta6GdCXfA&s",
    },
    {
      comic_id: "15",
      title: "Fullmetal Alchemist: Brotherhood",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://images.justwatch.com/poster/8906736/s718/season-1.jpg",
    },
  ],
  awards: [
    {
      award_id: "1",
      score: 1230,
      rank: 4,
      award: "Silver",
      period: "weekly",
      created_at: 1750000000,
    },
    {
      award_id: "2",
      score: 1330,
      rank: 2,
      award: "Silver",
      period: "monthly",
      created_at: 1730000000,
    },
    {
      award_id: "3",
      score: 1430,
      rank: 1,
      award: "Gold",
      period: "yearly",
      created_at: 1730000000,
    },
    {
      award_id: "4",
      score: 1430,
      rank: 6,
      award: "Bronze",
      period: "yearly",
      created_at: 1730000000,
    },
  ],
};

export const AccountTransactionRequests: AccountTransactionRequestWithAdminWallet[] =
  [
    {
      requestId: "REQ001",
      requestType: "DEPOSIT",
      transactionId: "WVP1234567",
      requestNumber: "09987654321",
      requestName: "Aung Kyaw",
      status: "PENDING",
      processedBy: {
        walletNumber: "0977777777",
        walletName: "Admin WavePay 1",
      },
      createdAt: "2025-01-01",
      updatedAt: "2025-01-01",
    },
    {
      requestId: "REQ002",
      requestType: "WITHDRAW",
      requestAmount: 12000,
      transactionId: "WVP1234535",
      requestNumber: "09812345678",
      requestName: "Mya Mya",
      status: "COMPLETED",
      processedBy: {
        walletNumber: "0977778888",
        walletName: "Admin WavePay 1",
      },
      createdAt: "2025-01-02",
      updatedAt: "2025-01-02",
    },
    {
      requestId: "REQ003",
      requestType: "DEPOSIT",
      requestAmount: 25000,
      transactionId: "KBZ987654321",
      requestNumber: "09555544444",
      requestName: "Tun Lin",
      status: "FAILED",
      processedBy: undefined,
      createdAt: "2025-01-03",
      updatedAt: "2025-01-03",
    },
  ];
