module.exports = max =>
  Array(max || 100)
    .fill()
    .map((_, i) => i + 1)
    .map(i => [[3, "Fizz"], [5, "Buzz"], [7, "Bang"], [11, "Pop"]].reduce((a, c) => `${a}${i % c[0] == 0 ? c[1] : ""}`, "") || i);
