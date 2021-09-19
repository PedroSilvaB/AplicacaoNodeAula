class Calculator {
  static sum(number_1, number_2) {
    return number_1 + number_2;
  }
  static subtraction(number_1, number_2) {
    return number_1 - number_2;
  }
  static multiplication(number_1, number_2) {
    return number_1 * number_2;
  }
  static division(number_1, number_2) {
    return number_1 / number_2;
  }
}

module.exports = {
  Calculator,
};
