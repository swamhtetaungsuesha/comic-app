import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, DollarSign, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const StatsCard = ({
  title,
  content,
  description,
  icon: Icon,
}: {
  title: string;
  content: string;
  description: string;
  icon: any;
}) => (
  <Card className="bg-transparent border-none shadow-none">
    <CardHeader>
      <CardDescription>{title}</CardDescription>
      <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
        {content}
      </CardTitle>
      <CardAction>
        <Icon className="w-5 h-5" />
      </CardAction>
    </CardHeader>
    <CardFooter className="flex-col items-start gap-1.5 text-sm">
      {description}
    </CardFooter>
  </Card>
);

export default function StatsCardsEarning() {
  const stats = [
    {
      title: "Total Amount Earned",
      content: "1,245 MMK",
      description: "+20% from last month",
      icon: DollarSign,
    },
    {
      title: "Total Amount Deposited",
      content: "15,200 Credits",
      description: "Total credits users purchased",
      icon: Users,
    },
    {
      title: "Total Amount",
      content: "23,540 MMK",
      description: "Your current existing amount in the system",
      icon: TrendingUp,
    },
    {
      title: "Withdrawable Amount",
      content: "62,000 MMK",
      description: "Amount available for withdrawal",
      icon: DollarSign,
    },
    {
      title: "Total Spend on Unlock",
      content: "8,430 Credits",
      description: "Total credits spent by readers on premium chapters",
      icon: BookOpen,
    },
    {
      title: "Unique Buyers (30d)",
      content: "1,120",
      description:
        "Distinct users who unlocked premium chapters in last 30 days",
      icon: Users,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {stats.map((item, index) => (
        <div
          key={index}
          className={cn(
            "relative flex border-l border-b",
            index === 5 || index === 4 ? "border-b-0" : ""
          )}
        >
          {/* card */}
          <div className="flex-1 p-6">
            <StatsCard {...item} />
          </div>
        </div>
      ))}
    </div>
  );
}
