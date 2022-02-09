export default function luhnAlgorithm(value) {
  // const value1 = value.replace(/\D/g, '');
  const value1 = String(value).replace(/\D/g, '');
  console.log('value---', value1);
  let nCheck = 0;
  let bEven = false;
  for (let n = value1.length - 1; n >= 0; n -= 1) {
    const nDigit = parseInt(value1.charAt(n), 10);
    let nn = nDigit * 2;
    console.log('digit82---', nDigit, nn);
    // if (bEven && (nDigit *= 2) > 9) {
    if (bEven && nn > 9) {
      nn -= 9;
    }
    if (n % 2) {
      nCheck += nn;
    } else {
      nCheck += nDigit;
    }
    bEven = !bEven;
  }
  console.log('gjk---', nCheck, nCheck % 10);
  return (nCheck % 10) === 0;
}
// 4561 2612 1234 5464
// 4561 2612 1234 5467
