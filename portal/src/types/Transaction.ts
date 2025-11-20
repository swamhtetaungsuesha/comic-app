interface Transaction {
  id: string;
  credits: number;
  debits: number;
  user_id: string;
  type: "deposit" | "withdrawal" | "purchase" | "sale";
  createdAt: string;
  updatedAt: string;
}
