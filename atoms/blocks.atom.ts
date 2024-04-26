// blocks.atom.ts
import { Block } from "@/models/Block.model";
import { atom } from "jotai";

const blocksList = atom([]);
const selectedBlock = atom<Block | null>(null);

const FetchBlocks = async () => {
  const response = await fetch("/api/blocks");
  const data = await response.json();
  return data;
};

const FetchBlock = async (hash: string) => {
  const response = await fetch(`/api/blocks/${hash}`);
  const data = await response.json();

  return data;
};

export { blocksList, FetchBlocks, FetchBlock, selectedBlock };