// app/schemas/dictator.ts
export interface Bet {
    dictator: string;
    battlerId: number;
    amount: number;
  }
  
  export interface BetConfirmation {
    success: boolean;
    bet: Bet;
    message: string;
  }
  