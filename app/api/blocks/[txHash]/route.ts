import blocks from "../blocks.json";

import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { txHash: string } }) {
  try {
    const block = blocks.find((block) => block.blockHash === params.txHash);
    return NextResponse.json(block);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}