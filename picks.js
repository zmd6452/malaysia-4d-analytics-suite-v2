function generatePick() {
  let num = "";
  while (num.length < CONFIG.digitLength) {
    const pool = [];
    for (let d in CONFIG.digitWeights) {
      for (let i = 0; i < CONFIG.digitWeights[d]; i++) {
        pool.push(d);
      }
    }
    num += pool[Math.floor(Math.random() * pool.length)];
  }
  return num;
}

function isValid(num) {
  return CONFIG.mustIncludeDigits.every(d => num.includes(d.toString())) &&
         CONFIG.excludedDigits.every(d => !num.includes(d.toString()));
}

function generatePicks() {
  const results = new Set();
  while (results.size < CONFIG.totalPicks) {
    const n = generatePick();
    if (isValid(n)) results.add(n);
  }
  return [...results];
}
