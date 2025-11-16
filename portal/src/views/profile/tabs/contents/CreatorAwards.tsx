"use client";
import ComicCard from "@/components/ComicCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockUsers } from "@/lib/dummy_data";
import { format } from "date-fns";
import { UserMinus, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CreatorAwardsProps {
  awards: Omit<Award, "user_id">[];
}

const CreatorAwards: FC<CreatorAwardsProps> = ({ awards }) => (
  <div className="profile-content-grid">
    {awards.map((award) => (
      <div>
        <div className="profile-content-awards-card">
          <div className="profile-content-awards-card-image">
            {award.award === "Gold" ? (
              <Image
                src="/golden_award.png"
                alt="award"
                width={144}
                height={32}
              />
            ) : award.award === "Silver" ? (
              <Image
                src="/silver_award.png"
                alt="award"
                width={134}
                height={32}
              />
            ) : award.award === "Bronze" ? (
              <Image
                src="/bronze_award.png"
                alt="award"
                width={130}
                height={32}
              />
            ) : null}
            <span className="profile-content-awards-card-period">
              <Badge className="uppercase">{award.period}</Badge>
            </span>
          </div>
          <div className="profile-content-awards-card-details">
            <h3>
              Rank <span>#{award.rank}</span>{" "}
              <Badge variant={"outline"}>{award.score}</Badge>
            </h3>
            <p>{format(new Date(award.created_at * 1000), "MMM dd, yyyy")}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CreatorAwards;
