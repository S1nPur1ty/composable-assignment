"use client";

import { useState } from "react";
import { DateToRelativeTime } from "@/components/elements/Other/DateToRelativeTime";
import { Block } from "@/models/Block.model";
import { applyEllipse } from "@/utils/primitives.util";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { blocksListAtom, selectedBlock } from "@/atoms/blocks.atom";
import { solanaPriceAtom } from "@/atoms/priceFeed.atom";
import RetryableError from "@/components/elements/Errors/RetryableError";
import SolanaIcon from "@/components/icons/solana.icon";

interface BlocksTableViewProps {
  filter: string;
}

const BlocksTableView = ({ filter }: BlocksTableViewProps) => {
  const router = useRouter();

  const [
    {
      data: solPrice,
      isLoading: isLoadingSolPrice,
      isError: isErrorSolPrice,
      refetch: refetchSolPrice,
    },
  ] = useAtom(solanaPriceAtom);

  const goToTxDetail = (block: Block) => {
    setSelected(block);
    router.push(`/tx/${block.blockHash}`);
  };

  const [headerItems] = useState<string[]>([
    "Block Hash",
    "Slot",
    "Timestamp",
    "Tx count",
    "Leader",
    "Reward",
  ]);

  const [{ data: blocks, isLoading, isError, refetch }] =
    useAtom(blocksListAtom);

  const [, setSelected] = useAtom(selectedBlock);

  if (isLoading) return <div>Loading</div>;

  if (isError || !blocks)
    return <RetryableError message="Failed to load blocks" onRetry={refetch} />;

  if (isLoadingSolPrice) return <div>Loading sol price</div>;

  if (isErrorSolPrice || !solPrice)
    return (
      <RetryableError
        message="Failed to load price information | please wait 1 minute and try again"
        onRetry={refetchSolPrice}
      />
    );

  if (isLoading) return <div>Loading</div>;

  const applyFilter = () => {
    if (!filter) return blocks;

    return blocks.filter((block) => {
      return (
        block.blockHash.toLowerCase().includes(filter.toLowerCase()) ||
        block.leader.toLowerCase().includes(filter.toLowerCase()) ||
        block.slot.toString().includes(filter)
      );
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-titanium whitespace-nowrap border-separate border-spacing-y-1">
        <thead className="text-xs text-left">
          <tr>
            {headerItems.map((item, index) => (
              <th key={index} className="px-4 py-2 bg-dark font-normal">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {applyFilter().map((block: Block) => (
            <tr
              key={block.blockHash}
              className="cursor-pointer hover:text-white rounded-2xl group"
              onClick={() => goToTxDetail(block)}
            >
              <td className="p-4 group-hover:bg-white_05 bg-white_02 text-primary hover:underline rounded-tl-2xl rounded-bl-2xl">
                {applyEllipse(block.blockHash)}
              </td>
              <td className="p-4 text-primary hover:underline group-hover:bg-white_05 bg-white_02">
                #{block.slot}
              </td>
              <td className="p-4 group-hover:bg-white_05 bg-white_02">
                <DateToRelativeTime date={new Date(block.timestamp)} />
              </td>
              <td className="p-4 group-hover:bg-white_05 bg-white_02">
                {block.txCount}
              </td>
              <td className="p-4 group-hover:bg-white_05 bg-white_02 text-primary">
                {applyEllipse(block.leader)}
              </td>
              <td className="p-4 flex items-center gap-2 rounded-tr-2xl group-hover:bg-white_05 bg-white_02 rounded-br-2xl">
                <div className="bg-black w-4 h-4 rounded-full flex items-center justify-center">
                  <SolanaIcon size="s" />
                </div>
                <p>
                  {block.rewardSol.toFixed(2)} SOL (
                  {solPrice
                    ? "$" + (solPrice * block.rewardSol).toFixed(2)
                    : "?"}
                  )
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlocksTableView;
