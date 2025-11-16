interface Award {
  award_id: string;
  user_id: string;
  score: number;
  rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  award: "Gold" | "Silver" | "Bronze" | "Not Ranked";
  period: "weekly" | "monthly" | "yearly";
  created_at: EpochTimeStamp;
}

type AwardWithUser = Omit<Award, "user_id"> & {
  user: User;
};

type PeriodAwardRanking = {
  owner: {
    weekly: Omit<Award, "period" | "user_id" | "created_at">;
    monthly: Omit<Award, "period" | "user_id" | "created_at">;
    yearly: Omit<Award, "period" | "user_id" | "created_at">;
  };
  creators: {
    weekly: Omit<AwardWithUser, "period" | "created_at">[];
    monthly: Omit<AwardWithUser, "period" | "created_at">[];
    yearly: Omit<AwardWithUser, "period" | "created_at">[];
  };
};
