import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, CreditCardIcon } from "lucide-react";

const ChapterEditingDashboardHeader = () => {
  return (
    <Card className="bg-transparent border-none">
      <CardHeader>
        <div className="flex items-center justify-between space-x-5">
          <CardAction className="border-r">
            <Button variant="ghost" className="mr-5">
              <ArrowLeft />
            </Button>
          </CardAction>
          <div className="flex-1">
            <CardTitle>Chapter Editing Dashboard</CardTitle>
            {/* <CardDescription>
            Overview of your recent payment activities and statistics.
          </CardDescription> */}
          </div>

          {/* <CardAction className="border-l">
            <Button variant="ghost" className="ml-5">
              <CreditCard /> CREDIT{" "}
            </Button>

            <Button variant="ghost" className="ml-5">
              <CreditCardIcon />
              DEBIT
            </Button>
          </CardAction> */}
        </div>
      </CardHeader>
    </Card>
  );
};

export default ChapterEditingDashboardHeader;
