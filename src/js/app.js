/**
 * Entry point of app:
 */

import FormWidget from './formWidget.js';

const formWidget = new FormWidget(document.querySelector('#form-container'));
formWidget.bindToDOM();
