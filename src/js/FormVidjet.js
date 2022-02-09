import isValid from './Validate.js';
import Img from './imgCreate.js';
import paySystem from './PaySystem.js';

export default class FormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
    <div class="cards">
    <div class="card row-cols-6">
      <div class="col col1"></div>
      <div class="col col2"></div>
      <div class="col col3"></div>
      <div class="col col4"></div>
      <div class="col col5"></div>
      <div class="col col6"></div>
    </div>
  </div>
  <form data-widget="form-widget" class="flex">
  <div class="form-control">
    <input id="form-input" data-id="form-input" type="text">
  </div>
  <button class = "button" data-id="form-submit">Проверить</button>
  </form>
    `;
  }

  static get inputSelector() {
    return '[data-id=form-input]';
  }

  static get submitSelector() {
    return '[data-id=form-submit]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (evt) => this.onSubmit(evt));
    Img.divIn();
  }

  onSubmit(evt) {
    evt.preventDefault();
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    const pay = this.parentEl.children[0].querySelector(paySystem(inputEl.value));
    if (isValid(inputEl.value)) {
      inputEl.classList.add('valid');

      // const paycol = paySystem(inputEl.value);
      pay.classList.add('select');
      console.log('pay', pay, inputEl.value, paySystem(inputEl.value), `${paySystem(inputEl.value)}`);
    } else {
      inputEl.classList.add('invalid');
      alert('Введенное значение некорректно!');
    }
    inputEl.value = '';
    inputEl.reset();
    (inputEl.classList.contains('valid')) ? inputEl.classList.remove('valid') : inputEl.classList.remove('invalid');
    (pay.classList.contains('select')) ? pay.classList.remove('select') : console.log('ok');
    console.log('result', inputEl.value);
    // this.parentEl.bindToDOM();
    document.querySelector('#form-container').bindToDOM();
  }
}
