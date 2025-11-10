"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const awardsRanking: PeriodAwardRanking = {
  owner: {
    weekly: {
      award_id: "1",
      score: 2480,
      rank: 1,
      award: "Gold",
    },
    monthly: {
      award_id: "2",
      score: 2100,
      rank: 2,
      award: "Silver",
    },
    yearly: {
      award_id: "3",
      score: 1980,
      rank: 3,
      award: "Silver",
    },
  },
  creators: {
    weekly: [
      {
        award_id: "1",
        user: {
          user_id: "1",
          name: "Mika Tanaka",
          avatar: "/avatars/mika.jpg",
          email: "mika@example.com",
        },
        score: 2480,
        rank: 1,
        award: "Gold",
      },
      {
        award_id: "2",
        user: {
          user_id: "2",
          name: "Raymond Lee",
          avatar: "/avatars/raymond.jpg",
          email: "raymond@example.com",
        },
        score: 2100,
        rank: 2,
        award: "Silver",
      },
      {
        award_id: "3",
        user: {
          user_id: "3",
          name: "Sara Lim",
          avatar: "/avatars/sara.jpg",
          email: "sara@example.com",
        },
        score: 1980,
        rank: 3,
        award: "Silver",
      },
      {
        award_id: "4",
        user: {
          user_id: "4",
          name: "Lucas Han",
          avatar: "/avatars/lucas.jpg",
          email: "lucas@example.com",
        },
        score: 1760,
        rank: 4,
        award: "Silver",
      },
      {
        award_id: "5",
        user: {
          user_id: "5",
          name: "Emily Chen",
          avatar: "/avatars/emily.jpg",
          email: "emily@example.com",
        },
        score: 1650,
        rank: 5,
        award: "Bronze",
      },
      {
        award_id: "6",
        user: {
          user_id: "6",
          name: "David Kim",
          avatar: "/avatars/david.jpg",
          email: "david@example.com",
        },
        score: 1500,
        rank: 6,
        award: "Bronze",
      },
      {
        award_id: "7",
        user: {
          user_id: "7",
          name: "Ana Silva",
          avatar: "/avatars/ana.jpg",
          email: "ana@example.com",
        },
        score: 1400,
        rank: 7,
        award: "Bronze",
      },
      {
        award_id: "8",
        user: {
          user_id: "8",
          name: "Mohamed Ali",
          avatar: "/avatars/mohamed.jpg",
          email: "mohamed@example.com",
        },
        score: 1300,
        rank: 8,
        award: "Bronze",
      },
      {
        award_id: "9",
        user: {
          user_id: "9",
          name: "Olivia Brown",
          avatar: "/avatars/olivia.jpg",
          email: "olivia@example.com",
        },
        score: 1200,
        rank: 9,
        award: "Bronze",
      },
      {
        award_id: "10",
        user: {
          user_id: "10",
          name: "Ethan Wilson",
          avatar: "/avatars/ethan.jpg",
          email: "ethan@example.com",
        },
        score: 1100,
        rank: 10,
        award: "Bronze",
      },
    ],
    monthly: [
      {
        award_id: "1",
        user: {
          user_id: "1",
          name: "Mika Tanaka",
          avatar: "/avatars/mika.jpg",
          email: "mika@example.com",
        },
        score: 2480,
        rank: 1,
        award: "Gold",
      },
      {
        award_id: "2",
        user: {
          user_id: "2",
          name: "Raymond Lee",
          avatar: "/avatars/raymond.jpg",
          email: "raymond@example.com",
        },
        score: 2100,
        rank: 2,
        award: "Silver",
      },
      {
        award_id: "3",
        user: {
          user_id: "3",
          name: "Sara Lim",
          avatar: "/avatars/sara.jpg",
          email: "sara@example.com",
        },
        score: 1980,
        rank: 3,
        award: "Silver",
      },
      {
        award_id: "4",
        user: {
          user_id: "4",
          name: "Lucas Han",
          avatar: "/avatars/lucas.jpg",
          email: "lucas@example.com",
        },
        score: 1760,
        rank: 4,
        award: "Silver",
      },
      {
        award_id: "5",
        user: {
          user_id: "5",
          name: "Emily Chen",
          avatar: "/avatars/emily.jpg",
          email: "emily@example.com",
        },
        score: 1650,
        rank: 5,
        award: "Bronze",
      },
      {
        award_id: "6",
        user: {
          user_id: "6",
          name: "David Kim",
          avatar: "/avatars/david.jpg",
          email: "david@example.com",
        },
        score: 1500,
        rank: 6,
        award: "Bronze",
      },
      {
        award_id: "7",
        user: {
          user_id: "7",
          name: "Ana Silva",
          avatar: "/avatars/ana.jpg",
          email: "ana@example.com",
        },
        score: 1400,
        rank: 7,
        award: "Bronze",
      },
      {
        award_id: "8",
        user: {
          user_id: "8",
          name: "Mohamed Ali",
          avatar: "/avatars/mohamed.jpg",
          email: "mohamed@example.com",
        },
        score: 1300,
        rank: 8,
        award: "Bronze",
      },
      {
        award_id: "9",
        user: {
          user_id: "9",
          name: "Olivia Brown",
          avatar: "/avatars/olivia.jpg",
          email: "olivia@example.com",
        },
        score: 1200,
        rank: 9,
        award: "Bronze",
      },
      {
        award_id: "10",
        user: {
          user_id: "10",
          name: "Ethan Wilson",
          avatar: "/avatars/ethan.jpg",
          email: "ethan@example.com",
        },
        score: 1100,
        rank: 10,
        award: "Bronze",
      },
    ],
    yearly: [
      {
        award_id: "1",
        user: {
          user_id: "1",
          name: "Mika Tanaka",
          avatar: "/avatars/mika.jpg",
          email: "mika@example.com",
        },
        score: 2480,
        rank: 1,
        award: "Gold",
      },
      {
        award_id: "2",
        user: {
          user_id: "2",
          name: "Raymond Lee",
          avatar: "/avatars/raymond.jpg",
          email: "raymond@example.com",
        },
        score: 2100,
        rank: 2,
        award: "Silver",
      },
      {
        award_id: "3",
        user: {
          user_id: "3",
          name: "Sara Lim",
          avatar: "/avatars/sara.jpg",
          email: "sara@example.com",
        },
        score: 1980,
        rank: 3,
        award: "Silver",
      },
      {
        award_id: "4",
        user: {
          user_id: "4",
          name: "Lucas Han",
          avatar: "/avatars/lucas.jpg",
          email: "lucas@example.com",
        },
        score: 1760,
        rank: 4,
        award: "Silver",
      },
      {
        award_id: "5",
        user: {
          user_id: "5",
          name: "Emily Chen",
          avatar: "/avatars/emily.jpg",
          email: "emily@example.com",
        },
        score: 1650,
        rank: 5,
        award: "Bronze",
      },
      {
        award_id: "6",
        user: {
          user_id: "6",
          name: "David Kim",
          avatar: "/avatars/david.jpg",
          email: "david@example.com",
        },
        score: 1500,
        rank: 6,
        award: "Bronze",
      },
      {
        award_id: "7",
        user: {
          user_id: "7",
          name: "Ana Silva",
          avatar: "/avatars/ana.jpg",
          email: "ana@example.com",
        },
        score: 1400,
        rank: 7,
        award: "Bronze",
      },
      {
        award_id: "8",
        user: {
          user_id: "8",
          name: "Mohamed Ali",
          avatar: "/avatars/mohamed.jpg",
          email: "mohamed@example.com",
        },
        score: 1300,
        rank: 8,
        award: "Bronze",
      },
      {
        award_id: "9",
        user: {
          user_id: "9",
          name: "Olivia Brown",
          avatar: "/avatars/olivia.jpg",
          email: "olivia@example.com",
        },
        score: 1200,
        rank: 9,
        award: "Bronze",
      },
      {
        award_id: "10",
        user: {
          user_id: "10",
          name: "Ethan Wilson",
          avatar: "/avatars/ethan.jpg",
          email: "ethan@example.com",
        },
        score: 1100,
        rank: 10,
        award: "Bronze",
      },
    ],
  },
};

export default function AwardRankingDashboard() {
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly" | "yearly">(
    "weekly"
  );

  const user: User = {
    user_id: "you123",
    name: "You",
    email: "you@example",
    avatar: "/avatars/you.jpg",
  };

  const ownerAward = awardsRanking.owner[activeTab];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* --- 1. USER SUMMARY CARD --- */}
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Trophy className="text-yellow-500 h-6 w-6" />
              Your Ranking
            </CardTitle>
            <p className="text-muted-foreground text-sm mt-1">
              Here’s your current performance summary.
            </p>
          </div>
          {ownerAward.award === "Gold" ? (
            <Image src="/golden_award.png" alt="award" width={32} height={32} />
          ) : ownerAward.award === "Silver" ? (
            <Image src="/silver_award.png" alt="award" width={32} height={32} />
          ) : ownerAward.award === "Bronze" ? (
            <Image src="/bronze_award.png" alt="award" width={32} height={32} />
          ) : (
            <Badge className="text-sm px-3 py-1 bg-gray-500/10 text-gray-600 border-gray-400/20">
              {ownerAward.award}
            </Badge>
          )}
        </CardHeader>

        <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src="/avatars/you.jpg" alt="Your avatar" />
              <AvatarFallback>YOU</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{user.name}</h3>
              <p className="text-sm text-muted-foreground">
                Rank #{ownerAward.rank}
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 text-right">
            <p className="text-2xl font-bold text-primary">
              {ownerAward.score}
            </p>
            <p className="text-sm text-muted-foreground">Total Score</p>
          </div>
        </CardContent>
      </Card>

      {/* --- 2. LEADERBOARD --- */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Medal className="h-5 w-5 text-primary" />
            Top Creators Leaderboard
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Tabs
            defaultValue="weekly"
            onValueChange={(v) => setActiveTab(v as any)}
          >
            <TabsList className="mb-4">
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>

            {(["weekly", "monthly", "yearly"] as const).map((period) => (
              <TabsContent key={period} value={period}>
                <div className="space-y-3">
                  {awardsRanking.creators[period].map((creator) => (
                    <div
                      key={creator.user.user_id}
                      className="flex items-center justify-between rounded-lg border border-muted p-3 hover:bg-muted/50 transition"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-bold w-8 text-center">
                          {creator.rank}
                        </span>
                        <Avatar>
                          <AvatarImage
                            src={creator.user.avatar}
                            alt={creator.user.name}
                          />
                          <AvatarFallback>
                            {creator.user.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{creator.user.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Score: {creator.score.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {creator.award === "Gold" ? (
                          <Image
                            src="/golden_award.png"
                            alt="award"
                            width={32}
                            height={32}
                          />
                        ) : creator.award === "Silver" ? (
                          <Image
                            src="/silver_award.png"
                            alt="award"
                            width={32}
                            height={32}
                          />
                        ) : creator.award === "Bronze" ? (
                          <Image
                            src="/bronze_award.png"
                            alt="award"
                            width={32}
                            height={32}
                          />
                        ) : null}
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
