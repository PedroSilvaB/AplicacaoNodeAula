const { Calculator } = require("./Calculator");

describe("Calculator", () => {
  it("Sum", () => {
    const sum = Calculator.sum(1, 2);
    expect(sum).toBe(3);
  });
  it("Subtraction", () => {
    const subtraction = Calculator.subtraction(1, 2);
    expect(subtraction).toBe(-1);
  });
  it("Multiplication", () => {
    const multiplication = Calculator.multiplication(1, 2);
    expect(multiplication).toBe(2);
  });
  it("Division", () => {
    const division = Calculator.division(1, 2);
    expect(division).toBe(0.5);
  });
});
