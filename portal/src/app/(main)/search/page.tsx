import Slider from "@/views/main/Slider";
import CoverTopBackground from "@/views/search/CoverTopBackground";
import SearchInput from "@/views/search/SearchInput";
import Image from "next/image";

export default function Search() {
  const artists: User[] = [
    {
      user_id: "user1",
      name: "Koyoharu Gotouge",
      avatar: "https://i.pravatar.cc/150?img=1",
      email: "koyoharu@example.com",
    },
    {
      user_id: "user2",
      name: "Eiichiro Oda",
      avatar: "https://i.pravatar.cc/150?img=2",
      email: "oda@example.com",
    },
    {
      user_id: "user3",
      name: "Masashi Kishimoto",
      avatar: "https://i.pravatar.cc/150?img=3",
      email: "kishimoto@example.com",
    },
    {
      user_id: "user4",
      name: "Hajime Isayama",
      avatar: "https://i.pravatar.cc/150?img=4",
      email: "isayama@example.com",
    },
    {
      user_id: "user5",
      name: "Kohei Horikoshi",
      avatar: "https://i.pravatar.cc/150?img=5",
      email: "horikoshi@example.com",
    },
    {
      user_id: "user6",
      name: "Hiromu Arakawa",
      avatar: "https://i.pravatar.cc/150?img=6",
      email: "arakawa@example.com",
    },
    {
      user_id: "user7",
      name: "Tsugumi Ohba",
      avatar: "https://i.pravatar.cc/150?img=7",
      email: "ohba@example.com",
    },
    {
      user_id: "user8",
      name: "Tite Kuboyashia",
      avatar: "https://i.pravatar.cc/150?img=8",
      email: "kuboyashia@example.com",
    },
    {
      user_id: "user9",
      name: "Akira Toriyama",
      avatar: "https://i.pravatar.cc/150?img=9",
      email: "toriyama@example.com",
    },
    {
      user_id: "user10",
      name: "Hiro Mashima",
      avatar: "https://i.pravatar.cc/150?img=10",
      email: "mashima@example.com",
    },
    {
      user_id: "user11",
      name: "Sui Ishida",
      avatar: "https://i.pravatar.cc/150?img=11",
      email: "ishida@example.com",
    },
    {
      user_id: "user12",
      name: "Yūki Tabata",
      avatar: "https://i.pravatar.cc/150?img=12",
      email: "tabata@example.com",
    },
    {
      user_id: "user13",
      name: "Gege Akutami",
      avatar: "https://i.pravatar.cc/150?img=13",
      email: "akutami@example.com",
    },
    {
      user_id: "user14",
      name: "Hideaki Anno",
      avatar: "https://i.pravatar.cc/150?img=14",
      email: "anno@example.com",
    },
    {
      user_id: "user15",
      name: "Yoshihiro Togashi",
      avatar: "https://i.pravatar.cc/150?img=15",
      email: "togashi@example.com",
    },
  ];

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

  return (
    <div>
      <div className="relative">
        <CoverTopBackground />
        <SearchInput />
      </div>
      <div className="p-12">
        <Slider
          type="artist"
          title="Artist"
          double={false}
          artists={artists}
          perRow={8}
        />
        <Slider
          type="comic"
          title="Arts"
          double={true}
          comics={comics}
          perRow={8}
        />
      </div>
      {/* <div>
            <div className="grid grid-cols-4 p-12">
                <Slider
                  title="Top Rating"
                  double={true}
                  comics={comics}
                  perRow={6}
                />
                <Slider
                  title="What's New"
                  double={true}
                  comics={comics}
                  perRow={6}
                />
              </div>
             
            </div> */}
    </div>
  );
}
