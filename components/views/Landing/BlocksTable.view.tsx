"use client";
import { useEffect, useState } from "react";
import { DateToRelativeTime } from "@/utils/DateToRelativeTime";
import { Block } from "@/models/Block.model";
import Image from "next/image";
import { applyEllipse } from "@/utils/primitives.util";

const BlocksTableView = () => {
  const [headerItems] = useState<string[]>([
    "Block Hash",
    "Slot",
    "Timestamp",
    "Tx count",
    "Leader",
    "Reward",
  ]);

  const [blocks, setBlocks] = useState<Block[]>();

  useEffect(() => {
    async function getBlocks() {
      const response = await fetch("/api/blocks");
      const data = await response.json();
      setBlocks(data);
    }
    getBlocks();

    return () => {};
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-4 sticky top-0">
        {headerItems.map((item, index) => (
          <div
            key={index}
            className={`flex gap-1 w-1/6 items-center cursor-pointer hover:text-white`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {!blocks ? (
          <div className="flex items-center justify-center mt-20">
            Loading...
          </div>
        ) : (
          blocks.map((block: Block) => (
            <div
              key={block.blockHash}
              className="flex gap-3 items-center justify-between hover:bg-white_05 bg-white_02 cursor-pointer rounded-2xl p-4 text-sm"
            >
              <div className="w-1/6 text-primary underline">
                {applyEllipse(block.blockHash)}
              </div>
              <div className="w-1/6 text-primary underline">#{block.slot}</div>
              <div className="w-1/6">
                <DateToRelativeTime date={new Date(block.timestamp)} />
              </div>
              <div className="w-1/6">{block.txCount}</div>
              <div className="w-1/6 text-primary">
                {applyEllipse(block.leader)}
              </div>
              <div className="w-1/6 flex items-center gap-2">
                <div className="bg-black w-4 h-4 rounded-full flex items-center justify-center">
                  <Image
                    src={"/assets/images/sol.svg"}
                    alt="Solana"
                    width={9.33}
                    height={8.56}
                  />
                </div>
                {block.rewardSol.toFixed(2)} SOL
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlocksTableView;
