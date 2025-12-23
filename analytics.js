function getFrequency(numbers) {
  const freq = {};
  numbers.forEach(n => {
    n.split("").forEach(d => {
      freq[d] = (freq[d] || 0) + 1;
    });
  });
  return freq;
}
