const { add } = require("./calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("throws error for non-number inputs", () => {
  expect(() => add("1", 2)).toThrow("Inputs must be numbers");
});
