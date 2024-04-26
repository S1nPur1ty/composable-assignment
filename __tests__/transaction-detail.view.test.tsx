import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TransactionDetailView from "../app/tx/[hash]/(components)/transaction-detail.view";
import { useAtom } from "jotai";
import { hashAtom, selectedBlockAtom } from "@/atoms/blocks.atom";
import { solanaPriceAtom } from "@/atoms/priceFeed.atom";

jest.mock("jotai", () => ({
  useAtom: jest.fn(),
}));

describe("TransactionDetailView", () => {
  const mockBlock = {
    slot: 1234,
    timestamp: new Date().toISOString(),
    txCount: 10,
    blockHash: "abc123",
    leader: "leader1",
    rewardSol: 0.5,
    prevBlockHash: "def456",
  };

  beforeEach(() => {
    (useAtom as jest.Mock).mockImplementation((atom) => {
      if (atom === solanaPriceAtom) {
        return [
          { data: 10, isLoading: false, isError: false, refetch: jest.fn() },
        ];
      } else if (atom === hashAtom) {
        return [null, jest.fn()];
      } else if (atom === selectedBlockAtom) {
        return [
          {
            data: mockBlock,
            isLoading: false,
            isError: false,
            refetch: jest.fn(),
          },
        ];
      }
    });
  });

  test("copies block slot to clipboard on copy icon click", () => {
    const clipboardWriteTextMock = jest.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: clipboardWriteTextMock,
      },
    });

    render(<TransactionDetailView params={{ hash: "abc123" }} />);
    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(clipboardWriteTextMock).toHaveBeenCalledWith(
      mockBlock.slot.toString()
    );
  });

  test("copies leader to clipboard on copy icon click", () => {
    const clipboardWriteTextMock = jest.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: clipboardWriteTextMock,
      },
    });

    render(<TransactionDetailView params={{ hash: "abc123" }} />);
    fireEvent.click(screen.getAllByRole("button")[1]);
    expect(clipboardWriteTextMock).toHaveBeenCalledWith(mockBlock.leader);
  });
});
