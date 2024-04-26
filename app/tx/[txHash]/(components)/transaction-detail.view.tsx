"use client";

import { hashAtom, selectedBlockAtom } from "@/atoms/blocks.atom";
import { solanaPriceAtom } from "@/atoms/priceFeed.atom";
import RetryableError from "@/components/elements/Errors/RetryableError";
import { DateToRelativeTime } from "@/components/elements/Other/DateToRelativeTime";
import { applyEllipse, formatTimestamp } from "@/utils/primitives.util";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { BiSolidCopy } from "react-icons/bi";
import { GoCheckCircleFill } from "react-icons/go";

import { toast } from "react-toastify";
import SolanaIcon from "@/components/icons/solana.icon";
import Header from "@/components/elements/Header/Header";
import TransactionDetailCard from "./transaction-detail-card.component";

interface TransactionDetailViewProps {
  params: {
    txHash: string;
  };
}

const TransactionDetailView = ({
  params: { txHash },
}: TransactionDetailViewProps) => {
  const [
    {
      data: solPrice,
      isLoading: isLoadingSolPrice,
      isError: isErrorSolPrice,
      refetch: refetchSolPrice,
    },
  ] = useAtom(solanaPriceAtom);

  const [, setHash] = useAtom(hashAtom);

  useEffect(() => {
    setHash(txHash);
  }, [txHash, setHash]);

  const [{ data: selected, isLoading, isError, refetch }] =
    useAtom(selectedBlockAtom);

  if (isLoadingSolPrice) return <div>Loading sol price</div>;

  if (isErrorSolPrice || !solPrice)
    return (
      <RetryableError
        message="Failed to load price information | please wait 1 minute and try again"
        onRetry={refetchSolPrice}
      />
    );

  if (isLoading) return <div>Loading</div>;

  if (isError || !selected)
    return <RetryableError message="Failed to load blocks" onRetry={refetch} />;

  const clipAndNotify = (text: string) => {
    navigator.clipboard.writeText(text);
    return toast(
      <div className="flex items-center gap-2">
        <GoCheckCircleFill size={16} />
        <p className="text-xs">Copied to clipboard</p>
      </div>,
      { closeButton: false }
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <Header
        title={`Block #${selected.slot}`}
        description={"Check the block details."}
        href="/"
      />

      <div className="flex flex-col gap-3 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <TransactionDetailCard title="Block">
            <div className="flex items-center gap-2 justify-center">
              <p className="text-white">#{selected.slot}</p>
              <BiSolidCopy
                size={16}
                className="text-titanium hover:text-white cursor-pointer"
                onClick={() => clipAndNotify(selected.slot.toString())}
              />
            </div>
          </TransactionDetailCard>

          <TransactionDetailCard title="Timestamp">
            <DateToRelativeTime date={new Date(selected.timestamp)} />
          </TransactionDetailCard>

          <TransactionDetailCard title="Date (UTC)">
            {formatTimestamp(selected.timestamp)}
          </TransactionDetailCard>
          <TransactionDetailCard title="Transactions">
            {selected.txCount}
          </TransactionDetailCard>
        </div>

        <TransactionDetailCard title="Block Hash">
          <p className="break-all">{selected.blockHash}</p>
        </TransactionDetailCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <TransactionDetailCard title="Leader">
            <div className="flex items-center gap-2 justify-center">
              <p className="text-primary">{applyEllipse(selected.leader)}</p>
              <BiSolidCopy
                size={16}
                className="text-titanium hover:text-white cursor-pointer"
                onClick={() => clipAndNotify(selected.leader)}
              />
            </div>
          </TransactionDetailCard>

          <TransactionDetailCard title="Reward">
            <div className="flex justify-center items-center gap-2">
              <div className="bg-black w-4 h-4 rounded-full flex items-center justify-center">
                <SolanaIcon size="s" />
              </div>
              <p>{selected.rewardSol.toFixed(3)}</p>
              <p className="text-titanium">
                SOL (${(solPrice * selected.rewardSol).toFixed(2)} @ $
                {solPrice && solPrice.toFixed(2)})
              </p>
            </div>
          </TransactionDetailCard>
        </div>

        <TransactionDetailCard title="Previous Block Hash">
          <p className="break-all">{selected.prevBlockHash}</p>
        </TransactionDetailCard>
      </div>
    </div>
  );
};

export default TransactionDetailView;
