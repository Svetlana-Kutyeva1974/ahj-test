export default function paySystem(value) {
  // const value1 = value.replace(/\D/g, '');
  const value1 = String(value).replace(/\D/g, '');
  console.log('value firts---', value1);
  let paysystem = 'div.col.col1';
  switch (value1[0]) {
    case '2':
      paysystem = 'div.col.col5'; // 'mir';
      break;
    case '3':
      paysystem = 'div.col.col1'; // 'american-express';
      break;
    case '4':
      paysystem = 'div.col.col2'; // 'visa';
      break;
    case '5':
      paysystem = 'div.col.col3'; // 'mastercard';
      break;
    case '6':
      paysystem = 'div.col.col4'; // 'discover';
      break;
    default:
      break;
  }

  if (value[0] === 5 && value1[1] === 0) {
    paysystem = 'div.col.col6'; // 'maestro';
  }
  console.log('value---', value1[0], paysystem);
  return paysystem;
}
// 4561 2612 1234 5464
// 4561 2612 1234 5467 true
// 379791071524836 true
