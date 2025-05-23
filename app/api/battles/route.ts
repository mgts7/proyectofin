// app/api/battles/route.ts
import { NextResponse } from 'next/server';
import { simulateBattle } from '../../services/battles';
import { BattleResult } from '../../schemas/battle';

export async function GET() {
  const result: BattleResult = simulateBattle();
  return NextResponse.json(result);
}
