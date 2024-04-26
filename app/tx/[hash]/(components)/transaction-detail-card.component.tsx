import Card from "@/components/elements/Card/Card";

interface TransactionDetailCardProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

const TransactionDetailCard = ({
  title,
  className = "",
  children,
}: TransactionDetailCardProps) => {
  return (
    <Card className={className}>
      <p className="text-titanium text-xs">{title}</p>
      <div className="text-white">{children}</div>
    </Card>
  );
};

export default TransactionDetailCard;
