import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlocksTableView from "../app/(components)/blocks-table.view";
import blocks from "../app/api/blocks/blocks.json";
import { useAtom } from "jotai";
import { blocksListAtom, selectedBlock } from "@/atoms/blocks.atom";
import { solanaPriceAtom } from "@/atoms/priceFeed.atom";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("jotai", () => ({
  useAtom: jest.fn(),
}));

describe("BlocksTableView", () => {
  beforeEach(() => {
    (useAtom as jest.Mock).mockImplementation((atom) => {
      if (atom === blocksListAtom) {
        return [
          {
            data: blocks,
            isLoading: false,
            isError: false,
            refetch: jest.fn(),
          },
        ];
      } else if (atom === solanaPriceAtom) {
        return [
          { data: 10, isLoading: false, isError: false, refetch: jest.fn() },
        ];
      } else if (atom === selectedBlock) {
        return [null, jest.fn()];
      }
    });
  });

  test("applies filter correctly", () => {
    render(<BlocksTableView filter="abc" />);
    expect(screen.getByText(blocks[0].blockHash)).toBeInTheDocument();
    expect(screen.queryByText(blocks[1].blockHash)).not.toBeInTheDocument();
  });

  test("navigates to tx detail on row click", () => {
    render(<BlocksTableView filter="" />);
    fireEvent.click(screen.getByText(blocks[0].blockHash));
    expect(useAtom).toHaveBeenCalledWith(selectedBlock);
    expect(useAtom).toHaveBeenCalledWith(blocksListAtom);
    expect(useAtom).toHaveBeenCalledWith(solanaPriceAtom);
  });
});
