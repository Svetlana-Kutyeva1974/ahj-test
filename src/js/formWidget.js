import luhnAlgorithm from './luhnAlgorithm.js';
import Img from './imgCreate.js';
import paySystem from './paySystem.js';

export default class FormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.regex1 = new RegExp('^[0-9]{14}$');
    this.regex2 = new RegExp('^[0-9]{15}$');
    this.regex3 = new RegExp('^[0-9]{16}$');
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
        <input id="form-input" data-id="form-input" type="text" minlength="13" maxlength="19">
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
    console.log('this.parent', this.parentEl);
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (evt) => this.onSubmit(evt));
    Img.divIn();
  }

  showMessage(text) {
    const messageEl = document.createElement('div');
    messageEl.innerHTML = text;
    messageEl.style = 'text-align :left';
    const form = this.parentEl.querySelector(this.constructor.formSelector);
    form.insertAdjacentElement('afterEnd', messageEl);
  }

  removeMessageAndClass(text) {
    this.parentEl.querySelector(this.constructor.inputSelector).classList.add('invalid');
    this.showMessage(text);
    setTimeout(() => this.parentEl.children[2].remove(), 1000);
  }

  onSubmit(evt) {
    evt.preventDefault();
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    let value = String(inputEl.value).trim();
    value = String(value).replace(/\D/g, '');
    if (this.isValidate(value) && value[0] !== 0) {
      if (paySystem(value) !== '') {
        const pay = this.parentEl.children[0].querySelector(paySystem(value));

        (pay.classList.contains('select')) ? pay.classList.remove('select') : console.log('o');
        (inputEl.classList.contains('valid'))
          ? inputEl.classList.remove('valid') : console.log('not valid');
        (inputEl.classList.contains('invalid'))
          ? inputEl.classList.remove('invalid') : console.log('not invalid');
        //--
        if (luhnAlgorithm(value)) {
          inputEl.classList.add('valid');
          pay.classList.add('select');
          this.showMessage('Введенное значение корректно!');
          setTimeout(() => {
            pay.classList.remove('select');
            inputEl.classList.remove('valid');
            this.parentEl.children[2].remove();
          }, 1000);
        } else {
          this.removeMessageAndClass('Введенное значение некорректно!');
        }
      } else {
        this.removeMessageAndClass('Ошибка ввода, карта не существует!');
      }
    } else {
      this.removeMessageAndClass('Ошибка ввода, число символов или символы некорректны!');
    }
    inputEl.value = '';
  }

  isValidate(value) {
    return this.regex1.test(value) || this.regex2.test(value) || this.regex3.test(value);
  }
}
