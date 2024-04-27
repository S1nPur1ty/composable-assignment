import { Block } from "@/models/Block.model";
import { useAtom } from "jotai";
import { blocksListAtom } from "@/atoms/blocks.atom";
import { solanaPriceAtom } from "@/atoms/priceFeed.atom";
import RetryableError from "@/components/elements/Errors/RetryableError";
import BlocksTableListItemView from "./blocks-table-list-item.view";
import headerItems from "./blocks-table-header-items";

interface BlocksTableViewProps {
  filter: string;
}

const BlocksTableView = ({ filter }: BlocksTableViewProps) => {
  const [
    {
      data: solanaPriceUsd,
      isLoading: isLoadingSolPrice,
      isError: isErrorSolPrice,
      refetch: refetchSolPrice,
    },
  ] = useAtom(solanaPriceAtom);

  const [{ data: blocks, isLoading, isError, refetch }] =
    useAtom(blocksListAtom);

  if (isLoading) return <div>Loading</div>;

  if (isError || !blocks)
    return <RetryableError message="Failed to load blocks" onRetry={refetch} />;

  if (isLoadingSolPrice) return <div>Loading sol price</div>;

  if (isErrorSolPrice || !solanaPriceUsd)
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
            <BlocksTableListItemView
              key={block.blockHash}
              block={block}
              solanaPriceUsd={solanaPriceUsd}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlocksTableView;
