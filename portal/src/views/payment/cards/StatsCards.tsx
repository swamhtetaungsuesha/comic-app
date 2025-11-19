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

export default function StatsCards() {
  const stats = [
    {
      title: "Total Revenue (All Time)",
      content: "+1245,00 MMK",
      description: "+ 20% from last month ($63,000)",
      icon: DollarSign,
    },
    {
      title: "Active Premium Subscribers",
      content: "15,200",
      description: "+1,200 new subscribers this month",
      icon: Users,
    },
    {
      title: "Conversion Rate (Free -> Premium)",
      content: "5.8%",
      description: "Target conversion is 7.5%",
      icon: TrendingUp,
    },
    {
      title: "Top Selling Premium Chapter",
      content: "Destiny Awoken",
      description: "Highest revenue generating chapter last 30 days",
      icon: BookOpen,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <div key={index} className="relative flex">
          {/* card */}
          <div className="flex-1 p-6">
            <StatsCard {...item} />
          </div>

          {/* separator (vertical) — hide for last column */}
          {/* on lg: 4 columns, so last column is index % 4 === 3 */}
          <div className="hidden lg:flex items-stretch">
            {index % 4 !== 3 && (
              <Separator orientation="vertical" className="mx-0" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
