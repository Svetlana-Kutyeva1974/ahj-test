// import paySistem from '../paySystem.js';
import IsValid from '../Validate.js';
import FormVidjet from '../FormVidjet.js';
import paySystem from '../PaySystem.js';

// const validator = FormVidjet(paySistem);
const formVidjet = new FormVidjet(document.querySelector('#form-container'));
formVidjet.bindToDOM();

describe('Функция IsValid должен работать корректно', () => {
  test.each([
    ['Тест 1 false', '4561 2612 1234 5464', false],
    ['Тест 2 true', '4561 2612 1234 5467', true],
    ['Тест 3 true', '379791071524836', true],
    ['Тест 4 false', '2222222222222222222', false],
  ])(('Должен быть %s'), (_, input, expected) => {
    expect(IsValid(input)).toBe(expected);
  });
});
/*

  test.each([
    ['Тест 1', '4716983987165598', true],
    ['Тест 2', '4225414378713780418', true],
    ['Тест 3', '36865410416253', true],
    ['Тест 4', '6762976812058473', true],
    ['Тест 5', '2222222222222222222', false],
    ['Тест 6', '', false],
    ['Тест 7', '0000000000000000', false],
    ['Тест 8', '0', false],
    ['Тест 9', NaN, false],
  ])
*/
describe(' на наличие в объекте paySistem ключа с таким значением', () => {
  test.each([
    ['Test 1', '36865410416253', 'col1'],
    ['Test 2', '4716983987165598', 'col2'],
    ['Test 3', '5233636706819611', 'col3'],
    ['Test 4', '6762976812058473', 'col4'],
    ['Test 5', '222222222222222222', 'col5'],
    ['Test 6', '5020286690138979', 'col6'],
  ])(('Если в %s передаём %d должен вернуть %s'), (_, input, expected) => {
    expect(paySystem(input)).toBe(expected);
  });
});
