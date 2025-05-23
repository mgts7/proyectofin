// app/services/dictators.ts
import { Bet, BetConfirmation } from '../schemas/dictator';

const bets: Bet[] = [];

export function placeBet(dictator: string, battlerId: number, amount: number): BetConfirmation {
  if (amount <= 0) {
    return { success: false, bet: { dictator, battlerId, amount }, message: 'La apuesta debe ser mayor que cero.' };
  }
  const newBet: Bet = { dictator, battlerId, amount };
  bets.push(newBet);
  return { success: true, bet: newBet, message: 'Apuesta registrada con éxito.' };
}

// opcional: obtener todas las apuestas
export function listBets(): Bet[] {
  return bets;
}
