import ArrowLeftIcon from "@/components/icons/arrow-left.icon";
import Button from "../Button/Button";
import SolanaIcon from "@/components/icons/solana.icon";

export interface HeaderProps {
  href?: string;
  title: string;
  description: string;
}

const Header = ({ href, title, description }: HeaderProps) => {
  return (
    <div
      className={`grid grid-cols-[${href ? "auto_1fr" : "1fr"}] gap-6 items-center`}
    >
      {href && (
        <Button
          aria-label="Go back"
          className="h-full !rounded-3xl items-center flex"
          as="a"
          href="/"
        >
          <ArrowLeftIcon />
        </Button>
      )}

      <div className="flex w-full p-6 gap-6 border border-white/10 rounded-3xl">
        <div className="bg-black min-w-14 w-14 min-h-14 h-14 rounded-full flex items-center justify-center">
          <SolanaIcon size="l" />
        </div>

        <div className="w-full flex flex-col gap-1">
          <h1 className="text-2xl">{title}</h1>
          <p className="text-titanium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
