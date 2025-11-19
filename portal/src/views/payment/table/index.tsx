import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const sales: SaleWithChapterAndUser[] = [
  {
    sale_id: "S1001",
    chapter: {
      chapter_id: "C1001",
      title: "Arc 1: Prologue",
    },
    amount: 4.99,
    user: {
      user_id: "U1001",
      name: "John Doe",
      email: "t9TbI@example.com",
      avatar: "https://example.com/avatar.jpg",
    },
    status: "Completed",
    created_at: "2023-01-01",
  },
  {
    sale_id: "S1002",
    chapter: {
      chapter_id: "C1002",
      title: "Arc 2: Chapter 1",
    },
    amount: 9.99,
    user: {
      user_id: "U1002",
      name: "Jane Smith",
      email: "V3xOj@example.com",
      avatar: "https://example.com/avatar.jpg",
    },
    status: "Completed",
    created_at: "2023-01-02",
  },
  {
    sale_id: "S1003",
    chapter: {
      chapter_id: "C1003",
      title: "Arc 3: Chapter 2",
    },
    amount: 14.99,
    user: {
      user_id: "U1003",
      name: "Bob Johnson",
      email: "yfV9H@example.com",
      avatar: "https://example.com/avatar.jpg",
    },
    status: "Completed",
    created_at: "2023-01-03",
  },
  {
    sale_id: "S1004",
    chapter: {
      chapter_id: "C1004",
      title: "Arc 4: Chapter 3",
    },
    amount: 19.99,
    user: {
      user_id: "U1004",
      name: "Alice Williams",
      email: "YI4mZ@example.com",
      avatar: "https://example.com/avatar.jpg",
    },
    status: "Completed",
    created_at: "2023-01-04",
  },
  {
    sale_id: "S1005",
    chapter: {
      chapter_id: "C1005",
      title: "Arc 5: Chapter 4",
    },
    amount: 24.99,
    user: {
      user_id: "U1005",
      name: "Charlie Brown",
      email: "X7lOx@example.com",
      avatar: "https://example.com/avatar.jpg",
    },
    status: "Completed",
    created_at: "2023-01-05",
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

const RecentSalesTable = () => {
  return (
    <Card className="bg-transparent border-none">
      <CardHeader>
        <CardTitle>Premium Chapter Sales</CardTitle>
        <CardDescription>
          Real-time stream of the latest premium chapter purchases.
        </CardDescription>
        <CardAction>{/* Action Selectors can be placed here */}</CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Chapter</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead>Purchaser</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sales.map((sale) => (
              <TableRow key={sale.sale_id}>
                <TableCell className="font-medium max-w-xs truncate">
                  <Button variant="link">{sale.chapter.title}</Button>
                </TableCell>
                <TableCell className="text-right font-semibold text-green-400">
                  {formatCurrency(sale.amount)}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  <Button variant="ghost" size="lg">
                    <Avatar>
                      <AvatarImage
                        src={sale.user.avatar}
                        alt={sale.user.name}
                      />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {sale.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {sale.user.email}
                      </span>
                    </div>
                  </Button>
                  {/* {sale.user.name} */}
                </TableCell>
                <TableCell className="text-right text-sm text-muted-foreground">
                  {sale.created_at}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentSalesTable;
