import paySystem from '../paySystem.js';

describe(' на наличие в объекте paySistem ключа с таким значением', () => {
  test.each([
    ['Test 1', '36865410416253', 'div.col.col1'],
    ['Test 2', '4716983987165598', 'div.col.col2'],
    ['Test 3', '5233636706819611', 'div.col.col3'],
    ['Test 4', '6762976812058473', 'div.col.col6'],
    ['Test 5', '1222222222222222', ''],
    ['Test 6', '347194578472253', 'div.col.col1'],
    ['Test 7', '9020286690138979', ''],
    ['Test 8', '5038800500236938', 'div.col.col6'],
    ['Test 9', '6759394784053479', 'div.col.col6'],
    ['Test 10', '2221003479698600', 'div.col.col3'],
  ])(('Если в %s передаём %d должен вернуть %s'), (_, input, expected) => {
    expect(paySystem(input)).toBe(expected);
  });
});
