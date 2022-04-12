const strictEquals = function (a, b) {
  if (isNaN(a) && isNaN(b)) {
    return false;
  }

  if (Object.is(a, b)) {
    return true;
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
});
