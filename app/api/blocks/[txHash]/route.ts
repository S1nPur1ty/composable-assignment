import blocks from "../blocks.json";
import { Block } from "@/models/Block.model";

import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { txHash: string } }) {
  try {
    const block = blocks.filter((block: Block) => block.blockHash === params.txHash);
    return NextResponse.json(block[0] as Block);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}