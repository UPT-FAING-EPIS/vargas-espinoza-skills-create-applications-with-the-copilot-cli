const calculator = require("../calculator");

test("modulo returns the remainder", () => {
  expect(calculator.modulo(10, 3)).toBe(1);
});

test("power raises a number to an exponent", () => {
  expect(calculator.power(2, 3)).toBe(8);
});

test("square root returns the root", () => {
  expect(calculator.squareRoot(9)).toBe(3);
});
