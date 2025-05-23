// app/schemas/battle.ts
export interface Battler {
    id: number;
    name: string;
    hp: number;
    agility: number;
    strength: number;
  }
  
  export interface BattleResult {
    winner: Battler;
    loser: Battler;
    log: string[];
  }
  