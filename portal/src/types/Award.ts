interface Award {
  award_id: string;
  user_id: string;
  score: number;
  rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  award: "Gold" | "Silver" | "Bronze" | "Not Ranked";
  period: "weekly" | "monthly" | "yearly";
}

type AwardWithUser = Omit<Award, "user_id"> & {
  user: User;
};

type PeriodAwardRanking = {
  owner: {
    weekly: Omit<Award, "period" | "user_id">;
    monthly: Omit<Award, "period" | "user_id">;
    yearly: Omit<Award, "period" | "user_id">;
  };
  creators: {
    weekly: Omit<AwardWithUser, "period">[];
    monthly: Omit<AwardWithUser, "period">[];
    yearly: Omit<AwardWithUser, "period">[];
  };
};
