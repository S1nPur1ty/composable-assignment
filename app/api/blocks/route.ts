import blocks from "./blocks.json";
import { Block } from "@/models/Block.model";

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    return NextResponse.json(blocks as Block[]);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}