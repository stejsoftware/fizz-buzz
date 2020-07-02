export const fizzbuzz = (max?: number) =>
  Array(max || 100)
    .fill(null)
    .map((_, i) => i + 1)
    .map(
      (i) =>
        [
          [3, "Fizz"],
          [5, "Buzz"],
          [7, "Bang"],
          [11, "Pop"],
        ].reduce((a, c) => `${a}${i % Number(c[0]) === 0 ? c[1] : ""}`, "") || i
    );
