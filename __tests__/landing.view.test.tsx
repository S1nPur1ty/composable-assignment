import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingView from "../app/(components)/landing.view";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("LandingView", () => {
  test("updates filter state when search input changes", async () => {
    await act(async () => {
      render(<LandingView />);
    });

    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      "Search for transactions, blocks & accounts"
    );

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: "test filter" } });
    });

    expect(searchInput.value).toBe("test filter");
  });
});
