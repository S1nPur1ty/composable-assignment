"use client";

import { FetchBlock, selectedBlock } from "@/atoms/blocks.atom";
import { fetchSolanaPrice, solanaPrice } from "@/atoms/priceFeed.atom";
import Button from "@/components/elements/Button/Button";
import Card from "@/components/elements/Card/Card";
import { DateToRelativeTime } from "@/utils/DateToRelativeTime";
import { applyEllipse, formatTimestamp } from "@/utils/primitives.util";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { BiSolidCopy } from "react-icons/bi";
import { GoCheckCircleFill } from "react-icons/go";

import { toast } from "react-toastify";

interface TransactionDetailViewProps {}

const TransactionDetailView = ({}: TransactionDetailViewProps) => {
  const [selected, setSelected] = useAtom(selectedBlock);
  const [solPrice, setSolPrice] = useAtom<number>(solanaPrice);

  const router = useRouter();
  const params = useParams();

  const goBack = () => router.replace("/");

  useEffect(() => {
    if (solPrice === 0) fetchSolanaPrice().then((price) => setSolPrice(price));

    if (!selected)
      FetchBlock(params.txHash as string).then((block) => setSelected(block));
  }, []);

  console.log(solPrice);

  const notify = () =>
    toast(
      <div className="flex items-center gap-2">
        <GoCheckCircleFill size={16} />
        <p className="text-xs">Copied to clipboard</p>
      </div>,
      { closeButton: false }
    );

  if (!selected) return null;

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-[auto,1fr] gap-6 items-center">
        <Button className="h-full !rounded-3xl" onClick={goBack}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7071 5.79289C16.0976 6.18342 16.0976 6.81658 15.7071 7.20711L10.4142 12.5L15.7071 17.7929C16.0976 18.1834 16.0976 18.8166 15.7071 19.2071C15.3166 19.5976 14.6834 19.5976 14.2929 19.2071L8.29289 13.2071C7.90237 12.8166 7.90237 12.1834 8.29289 11.7929L14.2929 5.79289C14.6834 5.40237 15.3166 5.40237 15.7071 5.79289Z"
              fill="white"
              fillOpacity="0.6"
            />
          </svg>
        </Button>

        <div className="flex w-full p-6 gap-6 border border-white/10 rounded-3xl">
          <div className="bg-black w-14 h-14 rounded-full flex items-center justify-center">
            <Image
              src={"/assets/images/sol.svg"}
              alt="Solana"
              width={32.67}
              height={29.94}
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <h1 className="text-2xl">Block #{selected.slot}</h1>
            <p className="text-titanium">Check the block details.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-center">
        <div className="flex gap-3">
          <Card className="w-1/4">
            <div className="flex flex-col gap-2">
              <p className="text-titanium text-xs">Block</p>
              <div className="flex items-center gap-2 justify-center">
                <p className="text-white">#{selected.slot}</p>
                <BiSolidCopy
                  size={16}
                  className="text-titanium hover:text-white cursor-pointer"
                  onClick={notify}
                />
              </div>
            </div>
          </Card>
          <Card className="w-1/4">
            <div className="flex flex-col gap-2">
              <p className="text-titanium text-xs">Timestamp</p>
              <p className="text-white">
                <DateToRelativeTime date={new Date(selected.timestamp)} />
              </p>
            </div>
          </Card>
          <Card className="w-1/4">
            <div className="flex flex-col gap-2">
              <p className="text-titanium text-xs">Date (UTC)</p>
              <p className="text-white">
                {formatTimestamp(selected.timestamp)}
              </p>
            </div>
          </Card>
          <Card className="w-1/4">
            <div className="flex flex-col gap-2">
              <p className="text-titanium text-xs">Transactions</p>
              <p className="text-white">{selected.txCount}</p>
            </div>
          </Card>
        </div>

        <Card className="w-full">
          <div className="flex flex-col gap-2">
            <p className="text-titanium text-xs">Block Hash</p>
            <p className="text-white">{selected.blockHash}</p>
          </div>
        </Card>

        <div className="flex gap-3">
          <Card className="w-1/2">
            <div className="flex flex-col gap-2">
              <p className="text-titanium text-xs">Leader</p>
              <div className="flex items-center gap-2 justify-center">
                <p className="text-primary">{applyEllipse(selected.leader)}</p>
                <BiSolidCopy
                  size={16}
                  className="text-titanium hover:text-white cursor-pointer"
                  onClick={notify}
                />
              </div>
            </div>
          </Card>
          <Card className="w-1/2">
            <div className="flex flex-col gap-2">
              <p className="text-titanium text-xs">Reward</p>
              <div className="text-white flex justify-center items-center gap-2">
                <div className="bg-black w-4 h-4 rounded-full flex items-center justify-center">
                  <Image
                    src={"/assets/images/sol.svg"}
                    alt="Solana"
                    width={9.33}
                    height={8.56}
                  />
                </div>
                <p>{selected.rewardSol.toFixed(3)}</p>
                <p className="text-titanium">
                  SOL ($ {(solPrice * selected.rewardSol).toFixed(2)} @ $
                  {solPrice && solPrice.toFixed(2)})
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="w-full">
          <div className="flex flex-col gap-2">
            <p className="text-titanium text-xs">Previous Block Hash</p>
            <p className="text-white">{selected.prevBlockHash}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TransactionDetailView;
