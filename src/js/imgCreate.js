import png1 from '../img/american-expresss.png';
import png2 from '../img/visaa.png';
import png3 from '../img/mastercardd.png';
import png4 from '../img/discoverr.png';
import png5 from '../img/mirr.png';
import png6 from '../img/maestro.png';

export default class Img {
  constructor(parentEl) {
    this.parentEl = parentEl;
    Img.divIn();
  }

  static create(j) {
    const imgEl = document.createElement('img');
    let png = '';
    switch (j) {
      case 1:
        png = png1;
        break;
      case 2:
        png = png2;
        break;
      case 3:
        png = png3;
        break;
      case 4:
        png = png4;
        break;
      case 5:
        png = png5;
        break;
      case 6:
        png = png6;
        break;
      default:
        png = png1;
        break;
    }

    console.log('png', png);
    imgEl.src = png;
    imgEl.alt = 'Текущее положение';
    imgEl.classList.add('style-img');
    return imgEl;
  }

  static divIn() {
    for (let i = 1; i < 7; i += 1) {
      const imgNew = Img.create(i);
      const element = document.querySelector(`.col${i}`);
      element.insertAdjacentElement('afterBegin', imgNew);
    }
  }
}
