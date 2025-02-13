// Muokkaa funktiota lowerName, jotta se palauttaa saamansa name-parametrin kokonaan pienin kirjaimin

function lowerName(name) {
  return name.toLowerCase();
}

// Esimerkki - älä muokkaa
console.log(lowerName("Sam")); // "sam"
console.log(lowerName("ALEX")); // "alex"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
lower = (name) => name.toLowerCase();
// Kutsu tekemääsi funktiota
console.log(lower("LOL"));
console.log(lower("XD"));
