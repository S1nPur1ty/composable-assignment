import TransactionDetailView from "@/app/tx/[hash]/(components)/transaction-detail.view";

interface TransactionDetailPageProps {
  params: {
    hash: string;
  };
}

export default function TransactionDetailPage(
  props: TransactionDetailPageProps
) {
  return <TransactionDetailView {...props} />;
}
