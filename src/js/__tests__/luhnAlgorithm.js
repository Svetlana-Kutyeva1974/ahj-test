import luhnAlgorithm from '../luhnAlgorithm.js';

describe('Функция IsValid должен работать корректно', () => {
  test.each([
    ['Тест 1 false', '4561 2612 1234 5464', false],
    ['Тест 2 true', '4561 2612 1234 5467', true],
    ['Тест 3 true', '379791071524836', true],
    ['Тест 4 false', '2222222222222222222', false],
    ['Тест 5', '0000000000000000', false],
  ])(('Должен быть %s'), (_, input, expected) => {
    expect(luhnAlgorithm(input)).toBe(expected);
  });
});
