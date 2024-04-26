// blocks.atom.ts
import { atom } from "jotai";

const solanaPrice = atom<number>(0);

const fetchSolanaPrice = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
    );
    const data = await response.json();
    return data.solana.usd;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { solanaPrice, fetchSolanaPrice };