interface AccountTransactionRequest {
  requestId: string;
  userId: string;
  requestType: "DEPOSIT" | "WITHDRAW";
  requestAmount?: number;
  status: "PENDING" | "COMPLETED" | "FAILED";
  transactionId?: string;
  requestNumber: string;
  requestName: string;
  processedBy: string;
  createdAt: string;
  updatedAt: string;
}

type AccountTransactionRequestWithAdminWallet = Omit<
  AccountTransactionRequest,
  "processedBy" | "userId"
> & {
  processedBy?: {
    walletNumber: string;
    walletName: string;
  };
};
