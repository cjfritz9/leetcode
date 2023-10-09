function predictPartyVictory(senate: string): string {
  let dir = 0;
  while (Math.abs(dir) < senate.length) {
      let nextSenate = "";
      for (let member of senate) {
          if (dir >= 0 && member == "R" || dir <= 0 && member == "D") {
              nextSenate += member;
          }
          dir += member == "R" ? 1 : -1;
      }
      senate = nextSenate;
  }
  return dir > 0 ? "Radiant" : "Dire";
};

console.log({ RES: predictPartyVictory('RD'), EXP: 'Radiant' });
console.log({ RES: predictPartyVictory('RDD'), EXP: 'Dire' });
console.log({ RES: predictPartyVictory('DDRRR'), EXP: 'Dire' });
console.log({ RES: predictPartyVictory('DRRDDR'), EXP: 'Dire' });
console.log({ RES: predictPartyVictory('RDR'), EXP: 'Radiant' });
console.log({ RES: predictPartyVictory('DDRRRR'), EXP: 'Radiant' });
console.log({ RES: predictPartyVictory('DRRDRDRDRDDRDRDR'), EXP: 'Radiant' });