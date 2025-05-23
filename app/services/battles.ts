// app/services/battles.ts
import { Battler, BattleResult } from '../schemas/battle';
import { sampleSize } from 'lodash';

const SAMPLE_BATTLERS: Battler[] = [
  { id: 1, name: 'Charizard', hp: 120, agility: 90, strength: 100 },
  { id: 2, name: 'Blastoise',  hp: 130, agility: 60, strength: 110 },
  { id: 3, name: 'Venusaur',   hp: 125, agility: 70, strength: 105 },
  // … puedes añadir más
];

export function simulateBattle(): BattleResult {
  // elige 2 battlers al azar
  const [a, b] = sampleSize(SAMPLE_BATTLERS, 2);
  const log: string[] = [];
  let attacker = a.agility >= b.agility ? a : b;
  let defender = attacker === a ? b : a;

  while (a.hp > 0 && b.hp > 0) {
    const damage = Math.floor(attacker.strength * (Math.random() * 0.5 + 0.75));
    defender.hp -= damage;
    log.push(`${attacker.name} ataca a ${defender.name} con ${damage} puntos de daño.`);
    // intercambio roles
    [attacker, defender] = [defender, attacker];
  }

  const winner = a.hp > 0 ? a : b;
  const loser  = winner === a ? b : a;
  log.push(`${winner.name} gana la batalla!`);
  return { winner, loser, log };
}
