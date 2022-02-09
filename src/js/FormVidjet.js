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
    <input id="form-input" data-id="form-input" type="text" minlength="2" maxlength="19">
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

  static get formSelector() {
    return '[data-widget=form-widget]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (evt) => this.onSubmit(evt));
    Img.divIn();
  }

  onSubmit(evt) {
    evt.preventDefault();
    // const form = this.parentEl.querySelector(this.constructor.formSelector);
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    const pay = this.parentEl.children[0].querySelector(paySystem(inputEl.value));
    // снимаем разметку
    (pay.classList.contains('select')) ? pay.classList.remove('select') : console.log('o');
    (inputEl.classList.contains('valid'))
      ? inputEl.classList.remove('valid') : console.log('not valid');
    (inputEl.classList.contains('invalid'))
      ? inputEl.classList.remove('invalid') : console.log('not invalid');
    //--
    if (isValid(inputEl.value)) {
      inputEl.classList.add('valid');

      // const paycol = paySystem(inputEl.value);
      pay.classList.add('select');
      alert('Введенное значение корректно!');
      console.log('good pay', pay, inputEl.value, paySystem(inputEl.value), `${paySystem(inputEl.value)}`);
    } else {
      inputEl.classList.add('invalid');
      alert('Введенное значение некорректно!');
    }
    console.log('result', inputEl.value);
    inputEl.value = '';
    // inputEl.reset();
    // form.reset();
    /*
    (inputEl.classList.contains('valid'))
     ? inputEl.classList.remove('valid') : inputEl.classList.remove('invalid');
    (pay.classList.contains('select')) ? pay.classList.remove('select') : console.log('o');
    */
    console.log('result null', inputEl.value);
    // this.parentEl.bindToDOM();
    // document.querySelector('#form-container').bindToDOM();
  }
}
