import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AccountTransactionRequests } from "@/lib/dummy_data";

const formatMMK = (amount?: number) => {
  if (!amount) return "-";
  return new Intl.NumberFormat("my-MM", {
    style: "currency",
    currency: "MMK",
    maximumFractionDigits: 0,
  }).format(amount);
};

const RecentPaymentRequestsTable = () => {
  return (
    <Card className="bg-transparent border-none">
      <CardHeader>
        <CardTitle>Payment Requests</CardTitle>
        <CardDescription>
          Manual mobile payment requests from users.
        </CardDescription>
        <CardAction></CardAction>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Requester</TableHead>
              <TableHead>Wallet (Admin)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead className="text-right">Created</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {AccountTransactionRequests.map((req) => (
              <TableRow key={req.requestId}>
                {/* Request Type */}
                <TableCell
                  className={`font-medium ${
                    req.requestType === "DEPOSIT"
                      ? "text-green-400"
                      : "text-blue-400"
                  }`}
                >
                  {req.requestType}
                </TableCell>

                {/* Amount */}
                <TableCell className="text-right font-semibold">
                  {formatMMK(req.requestAmount)}
                </TableCell>

                {/* Requester Info */}
                <TableCell>
                  {/* <Button variant="ghost" size="lg"> */}
                  {/* <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${req.requestName}`}
                      />
                      <AvatarFallback className="rounded-lg">U</AvatarFallback>
                    </Avatar> */}

                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {req.requestName}
                    </span>
                    <span className="truncate text-xs">
                      {req.requestNumber}
                    </span>
                  </div>
                  {/* </Button> */}
                </TableCell>

                {/* Admin Wallet */}
                <TableCell className="text-sm text-muted-foreground">
                  {req.processedBy ? (
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold">
                        {req.processedBy.walletName}
                      </span>
                      <span>{req.processedBy.walletNumber}</span>
                    </div>
                  ) : (
                    <span className="text-red-400">Not processed</span>
                  )}
                </TableCell>

                {/* Status */}
                <TableCell>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-md ${
                      req.status === "PENDING"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : req.status === "COMPLETED"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {req.status}
                  </span>
                </TableCell>

                <TableCell className="">
                  {req.transactionId ? (
                    <Badge variant={"outline"}>{req.transactionId}</Badge>
                  ) : (
                    "-"
                  )}
                </TableCell>
                {/* Created At */}
                <TableCell className="text-right text-sm text-muted-foreground">
                  {req.createdAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentPaymentRequestsTable;
