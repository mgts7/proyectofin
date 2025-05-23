// app/api/dictators/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { placeBet, listBets } from '../../services/dictators';

export async function GET() {
  // devuelve todas las apuestas
  return NextResponse.json(listBets());
}

export async function POST(req: NextRequest) {
  const { dictator, battlerId, amount } = await req.json();
  const confirmation = placeBet(dictator, battlerId, amount);
  return NextResponse.json(confirmation, { status: confirmation.success ? 201 : 400 });
}
