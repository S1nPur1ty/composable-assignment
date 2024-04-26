import { Block } from "@/models/Block.model";
import { atom } from "jotai";
import { atomWithQuery } from 'jotai-tanstack-query'

const selectedBlock = atom<Block | null>(null);
const hashAtom = atom<string | null>(null)

const selectedBlockAtom = atomWithQuery<Block>((get) => ({
  queryKey: ['block', get(hashAtom)],
  queryFn: async ({ queryKey: [, hash], }) => {
    const res = await fetch(`/api/blocks/${hash}`);
    return res.json()
  },
}))

const blocksListAtom = atomWithQuery<Block[]>(() => ({
  queryKey: ['blocks'],
  queryFn: async () => {
    const res = await fetch(`/api/blocks`);
    return res.json()
  },
}))

export { selectedBlock, hashAtom, blocksListAtom, selectedBlockAtom };