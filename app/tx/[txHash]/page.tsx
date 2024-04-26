import TransactionDetailView from "@/app/tx/[txHash]/(components)/transaction-detail.view";

interface TransactionDetailPageProps {
  params: {
    txHash: string;
  };
}

export default function TransactionDetailPage(
  props: TransactionDetailPageProps
) {
  return <TransactionDetailView {...props} />;
}
