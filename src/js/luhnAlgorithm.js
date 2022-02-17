export default function luhnAlgorithm(value) {
  const value1 = String(value).replace(/\D/g, '');// String(value).replace(/[^\d]/g, '');
  console.log('value, value1---', value, value1);

  let nCheck = 0;
  let bEven = false;
  for (let n = value1.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(value1.charAt(n), 10);
    if (bEven) {
      nDigit *= 2;
      if (nDigit > 9) {
        nDigit -= 9;
      }
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  console.log('отправляем ---', nCheck, (nCheck % 10) === 0);
  let result = false;
  if (value1[0] === '0') {
    result = false;
  } else if ((nCheck % 10) === 0) {
    result = true;
  }
  return result;
}
