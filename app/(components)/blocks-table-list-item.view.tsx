import { DateToRelativeTime } from "@/components/elements/Other/DateToRelativeTime";
import SolanaIcon from "@/components/icons/solana.icon";
import { Block } from "@/models/Block.model";
import { applyEllipse } from "@/utils/primitives.util";
import { useRouter } from "next/navigation";
import { selectedBlock } from "@/atoms/blocks.atom";
import { useAtom } from "jotai";

interface BlocksTableListItemViewProps {
  block: Block;
  solanaPriceUsd: number;
}

const TableListItemView = ({
  block,
  solanaPriceUsd,
}: BlocksTableListItemViewProps) => {
  const router = useRouter();

  const [, setSelected] = useAtom(selectedBlock);

  const goToTxDetail = (block: Block) => {
    setSelected(block);
    router.push(`/tx/${block.blockHash}`);
  };

  return (
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
      <td className="p-4 group-hover:bg-white_05 bg-white_02 text-primary hover:underline">
        {applyEllipse(block.leader)}
      </td>
      <td className="p-4 flex items-center gap-2 rounded-tr-2xl group-hover:bg-white_05 bg-white_02 rounded-br-2xl">
        <div className="bg-black w-4 h-4 p-1 rounded-full flex items-center justify-center">
          <SolanaIcon size="s" />
        </div>
        <p>
          {block.rewardSol.toFixed(2)} SOL (
          {solanaPriceUsd
            ? "$" + (solanaPriceUsd * block.rewardSol).toFixed(2)
            : "?"}
          )
        </p>
      </td>
    </tr>
  );
};
export default TableListItemView;
