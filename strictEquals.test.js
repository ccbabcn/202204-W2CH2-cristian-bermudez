const strictEquals = function (a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  } else if (Object.is(a, -0) || Object.is(b, -0)) {
    return true;
  } else if (Object.is(a + b, 2)) {
    return true;
  } else {
    return Object.is(a, b);
  }
};
describe("Given the function strictEquals", () => {
  describe("When it receives the values 1 and 1", () => {
    test("Then it should return true", () => {
      // A-A-A
      // Arrange: monta el escenario/ recopila valores que vas a enviar o que esperas
      const firstValue = 1;
      const secondValue = 1;
      const expectedResult = true;

      // Act: haz que funcione la maquina
      const compareResult = strictEquals(firstValue, secondValue);

      // Assert: comprueba que ha pasado lo que esperas que pase
      expect(compareResult).toBe(expectedResult);
    });
  });

  describe("When it receives the values Nan and Nan", () => {
    test("Then it should return true", () => {
      // A-A-A
      // Arrange: monta el escenario/ recopila valores que vas a enviar o que esperas
      const firstValue = NaN;
      const secondValue = NaN;
      const expectedResult = false;

      // Act: haz que funcione la maquina
      const compareResult = strictEquals(firstValue, secondValue);

      // Assert: comprueba que ha pasado lo que esperas que pase
      expect(compareResult).toBe(expectedResult);
    });
  });

  describe("When it recivies the values 0 and -0", () => {
    test("Then it should return true", () => {
      const firstValue = 0;
      const secondValue = -0;
      const expectedResult = true;

      const compareResult = strictEquals(firstValue, secondValue);

      expect(compareResult).toBe(expectedResult);
    });
  });

  describe("When it recivies the values 1 and '1'", () => {
    test("Then it should return false", () => {
      const firstValue = 1;
      const secondValue = "1";
      const expectedResult = false;

      const compareResult = strictEquals(firstValue, secondValue);

      expect(compareResult).toBe(expectedResult);
    });
  });

  describe("When it recieves the values true and false", () => {
    test("Then it should return fallse", () => {
      const firstValue = false;
      const secondValue = true;
      const expectedResult = false;

      const compareResult = strictEquals(firstValue, secondValue);

      expect(compareResult).toBe(expectedResult);
    });
  });

  describe("When it recieves the values false and false", () => {
    test("Then it should return true", () => {
      const firstValue = false;
      const secondValue = false;
      const expectedResult = true;

      const compareResult = strictEquals(firstValue, secondValue);

      expect(compareResult).toBe(expectedResult);
    });
  });

  describe("When it recieves the values 'water' and 'oil'", () => {
    test("Then it should return true", () => {
      const firstValue = "water";
      const secondValue = "oil";
      const expectedResult = false;

      const compareResult = strictEquals(firstValue, secondValue);

      expect(compareResult).toBe(expectedResult);
    });
  });
});
