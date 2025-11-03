import Hero from "@/views/main/Hero";
import Updates from "@/views/main/Updates";
import Slider from "@/views/main/Slider";
import ComicCard from "@/components/ComicCard";

export default function Home() {
  const comics: ComicWithUser[] = [
    {
      comic_id: "1",
      title: "Demon Slayer",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      user: {
        user_id: "user1",
        name: "Koyoharu Gotouge",
        avatar: "https://i.pravatar.cc/150?img=1",
        email: "koyoharu@example.com",
      },
    },
    {
      comic_id: "2",
      title: "One Piece",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
      user: {
        user_id: "user2",
        name: "Eiichiro Oda",
        avatar: "https://i.pravatar.cc/150?img=2",
        email: "oda@example.com",
      },
    },
    {
      comic_id: "3",
      title: "Naruto",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      user: {
        user_id: "user3",
        name: "Masashi Kishimoto",
        avatar: "https://i.pravatar.cc/150?img=3",
        email: "kishimoto@example.com",
      },
    },
    {
      comic_id: "4",
      title: "Attack on Titan",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg",
      user: {
        user_id: "user4",
        name: "Hajime Isayama",
        avatar: "https://i.pravatar.cc/150?img=4",
        email: "isayama@example.com",
      },
    },
    {
      comic_id: "5",
      title: "My Hero Academia",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      user: {
        user_id: "user5",
        name: "Kohei Horikoshi",
        avatar: "https://i.pravatar.cc/150?img=5",
        email: "horikoshi@example.com",
      },
    },
    {
      comic_id: "6",
      title: "Fullmetal Alchemist",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BNDczZWMyMjEtZDI0ZS00YThjLWE2MjEtNTIxNmVmZDhkNDg5XkEyXkFqcGc@._V1_.jpg",
      user: {
        user_id: "user6",
        name: "Hiromu Arakawa",
        avatar: "https://i.pravatar.cc/150?img=6",
        email: "arakawa@example.com",
      },
    },
    {
      comic_id: "7",
      title: "Death Note",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
      user: {
        user_id: "user7",
        name: "Tsugumi Ohba",
        avatar: "https://i.pravatar.cc/150?img=7",
        email: "ohba@example.com",
      },
    },
    {
      comic_id: "8",
      title: "Bleach",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      user: {
        user_id: "user8",
        name: "Tite Kuboyashia",
        avatar: "https://i.pravatar.cc/150?img=8",
        email: "kuboyashia@example.com",
      },
    },
    {
      comic_id: "9",
      title: "Dragon Ball",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NfrPSHdw5q7Qsb2kxL9hE0jv0cqhZB8zhA&s",
      user: {
        user_id: "user9",
        name: "Akira Toriyama",
        avatar: "https://i.pravatar.cc/150?img=9",
        email: "toriyama@example.com",
      },
    },
    {
      comic_id: "10",
      title: "Fairy Tail",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BODlhNTQ3ZDgtMDJlMC00YzdmLWE3ZTMtOWNmMTZkN2I2MzI5XkEyXkFqcGc@._V1_.jpg",
      user: {
        user_id: "user10",
        name: "Hiro Mashima",
        avatar: "https://i.pravatar.cc/150?img=10",
        email: "mashima@example.com",
      },
    },
    {
      comic_id: "11",
      title: "Tokyo Ghoul",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      user: {
        user_id: "user11",
        name: "Sui Ishida",
        avatar: "https://i.pravatar.cc/150?img=11",
        email: "ishida@example.com",
      },
    },
    {
      comic_id: "12",
      title: "Black Clover",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_.jpg",
      user: {
        user_id: "user12",
        name: "Yūki Tabata",
        avatar: "https://i.pravatar.cc/150?img=12",
        email: "tabata@example.com",
      },
    },
    {
      comic_id: "13",
      title: "Jujutsu Kaisen",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BNmI1MmYxNWQtY2E5NC00ZTlmLWIzZGEtNzM1YmE3NDA5NzhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      user: {
        user_id: "user13",
        name: "Gege Akutami",
        avatar: "https://i.pravatar.cc/150?img=13",
        email: "akutami@example.com",
      },
    },
    {
      comic_id: "14",
      title: "Neon Genesis Evangelion",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzyxXv7aNq7QGn1A17vZeGJWnT5Ta6GdCXfA&s",
      user: {
        user_id: "user14",
        name: "Hideaki Anno",
        avatar: "https://i.pravatar.cc/150?img=14",
        email: "anno@example.com",
      },
    },
    {
      comic_id: "15",
      title: "Fullmetal Alchemist: Brotherhood",
      description: "This is a sample comic description.",
      genres: ["Action", "Adventure"],
      cover_url:
        "https://images.justwatch.com/poster/8906736/s718/season-1.jpg",
      user: {
        user_id: "user15",
        name: "Hiromu Arakawa",
        avatar: "https://i.pravatar.cc/150?img=15",
        email: "arakawa@example.com",
      },
    },
  ];

  const chapters: ChapterWithComicAndCommentCount[] = [
    {
      chapter_id: "ch1",
      title: "Demon Slayer Chapter 1",
      chapter_number: 1,
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      comic: {
        title: "Demon Slayer",
      },
      comment_count: 10,
      created_at: "2023-10-01T10:00:00Z",
    },
    {
      chapter_id: "ch2",
      title: "One Piece Chapter 1",
      chapter_number: 1,
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
      comic: {
        title: "One Piece",
      },
      comment_count: 20,
      created_at: "2023-10-02T10:00:00Z",
    },
    {
      chapter_id: "ch3",
      title: "Naruto Chapter 1",
      chapter_number: 3,
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      comic: {
        title: "Naruto",
      },
      comment_count: 15,
      created_at: "2023-10-03T10:00:00Z",
    },
    {
      chapter_id: "ch4",
      title: "Attack on Titan Chapter 1",
      chapter_number: 2,
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg",
      comic: {
        title: "Attack on Titan",
      },
      comment_count: 25,
      created_at: "2023-10-04T10:00:00Z",
    },
    {
      chapter_id: "ch5",
      title: "My Hero Academia Chapter 1",
      chapter_number: 5,
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      comic: {
        title: "My Hero Academia",
      },
      comment_count: 30,
      created_at: "2023-10-05T10:00:00Z",
    },
    {
      chapter_id: "ch6",
      title: "Fullmetal Alchemist Chapter 1",
      chapter_number: 6,
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BNDczZWMyMjEtZDI0ZS00YThjLWE2MjEtNTIxNmVmZDhkNDg5XkEyXkFqcGc@._V1_.jpg",
      comic: {
        title: "Fullmetal Alchemist",
      },
      comment_count: 18,
      created_at: "2023-10-06T10:00:00Z",
    },
    {
      chapter_id: "ch7",
      title: "Death Note Chapter 1",
      chapter_number: 1,
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
      comic: {
        title: "Death Note",
      },
      comment_count: 22,
      created_at: "2023-10-07T10:00:00Z",
    },
    {
      chapter_id: "ch8",
      title: "Bleach Chapter 1",
      chapter_number: 1,
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BOWQwOWY5NTUtMjAyZi00YjQzLTkwODgtNmQwZjU1MGIzZDhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      comic: {
        title: "Bleach",
      },
      comment_count: 28,
      created_at: "2023-10-08T10:00:00Z",
    },
    {
      chapter_id: "ch9",
      title: "Dragon Ball Chapter 1",
      chapter_number: 1,
      cover_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NfrPSHdw5q7Qsb2kxL9hE0jv0cqhZB8zhA&s",
      comic: {
        title: "Dragon Ball",
      },
      comment_count: 35,
      created_at: "2023-10-09T10:00:00Z",
    },
    {
      chapter_id: "ch10",
      title: "Fairy Tail Chapter 1",
      chapter_number: 1,
      cover_url:
        "https://m.media-amazon.com/images/M/MV5BODlhNTQ3ZDgtMDJlMC00YzdmLWE3ZTMtOWNmMTZkN2I2MzI5XkEyXkFqcGc@._V1_.jpg",
      comic: {
        title: "Fairy Tail",
      },
      comment_count: 12,
      created_at: "2023-10-10T10:00:00Z",
    },
    // {
    //   chapter_id: "ch11",
    //   title: "Tokyo Ghoul Chapter 1",
    //   chapter_number: 1,
    //   cover_url:
    //     "https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    //   comic_id: "11",
    //   created_at: "2023-10-11T10:00:00Z",
    // },
    // {
    //   chapter_id: "ch12",
    //   title: "Black Clover Chapter 1",
    //   chapter_number: 1,
    //   cover_url:
    //     "https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_.jpg",
    //   comic_id: "12",
    //   created_at: "2023-10-12T10:00:00Z",
    // },
  ];
  return (
    <div>
      <Hero features={comics} />
      <div>
        <div className="grid grid-cols-4 p-12">
          <div className="col-span-3">
            <Slider
              type="comic"
              title="Top Rating"
              double={true}
              comics={comics}
              perRow={6}
            />
            <Slider
              type="comic"
              title="What's New"
              double={true}
              comics={comics}
              perRow={6}
            />
            {/* <Slider title="What's New" double={true} /> */}
          </div>
          <div className="col-span-1">
            <Updates chapters={chapters} />
          </div>
        </div>
        <div className="p-12">
          <Slider
            type="comic"
            title="Recommended For U"
            double={false}
            comics={comics}
            perRow={8}
          />
        </div>
      </div>
    </div>
  );
}
