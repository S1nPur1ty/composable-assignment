"use client";

import { useEffect, useState } from "react";
import { DateToRelativeTime } from "@/utils/DateToRelativeTime";
import { Block } from "@/models/Block.model";
import Image from "next/image";
import { applyEllipse } from "@/utils/primitives.util";
import { useRouter } from "next/navigation";

const BlocksTableView = () => {
  const router = useRouter();
  const goToTxDetail = (blockHash: string) => router.push(`/tx/${blockHash}`);

  const [headerItems] = useState<string[]>([
    "Block Hash",
    "Slot",
    "Timestamp",
    "Tx count",
    "Leader",
    "Reward",
  ]);
  const [blocks, setBlocks] = useState<Block[]>();
  const [solanaPrice, setSolanaPrice] = useState<number>(0);

  useEffect(() => {
    const fetchSolPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
        );
        const data = await response.json();
        setSolanaPrice(data.solana.usd);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchBlocks = async () => {
      const response = await fetch("/api/blocks");
      const data = await response.json();
      setBlocks(data);
    };

    fetchSolPrice();
    fetchBlocks();

    return () => {};
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-white/60 whitespace-nowrap border-separate border-spacing-y-1">
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
          {!blocks ? (
            <tr>
              <td colSpan={headerItems.length} className="py-20 text-center">
                Loading...
              </td>
            </tr>
          ) : (
            blocks.map((block: Block) => (
              <tr
                key={block.blockHash}
                className="cursor-pointer hover:text-white rounded-2xl group"
                onClick={() => goToTxDetail(block.blockHash)}
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
                    <Image
                      src={"/assets/images/sol.svg"}
                      alt="Solana"
                      width={9.33}
                      height={8.56}
                    />
                  </div>
                  <p>
                    {block.rewardSol.toFixed(2)} SOL (${" "}
                    {(solanaPrice * block.rewardSol).toFixed(2)})
                  </p>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BlocksTableView;
