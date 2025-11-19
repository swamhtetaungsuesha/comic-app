import { Separator } from "@/components/ui/separator";
import StatsCards from "./cards/StatsCards";
import RevenueChart from "./chart";
import PaymentDashboardHeader from "./header";
import RecentSalesTable from "./table";
import StatsCardsEarning from "./cards/StatsCardsEarning";

const PaymentReportDashboardView = () => {
  return (
    <div className="min-h-screen bg-background divide-x divide-border">
      {/* Header */}
      <PaymentDashboardHeader />
      <Separator orientation="horizontal" />

      {/* Charts and Tables */}

      <StatsCards />
      <Separator orientation="horizontal" />
      <div className="grid grid-cols-2">
        <RevenueChart />
        <StatsCardsEarning />
      </div>
      <Separator orientation="horizontal" />
      <div className="grid grid-cols-2">
        <RecentSalesTable />
        <div className="border-l">
          <RecentSalesTable />
        </div>
      </div>
    </div>
  );
};

export default PaymentReportDashboardView;
