const tasks = document.querySelector('div.tasks__list');

function addTaskHtml(item) {
  if (item !== '') {
    tasks.innerHTML += `
    <div class="task">
      <div class="task__title">
       ${item}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
`;
  }
}

function validate(event) {
  event.preventDefault();// no string
  if (!document.querySelector('.tasks__input').checkValidity()) {
    alert('Поле ввода содержит некорректное число символов (введите от 5 до 80 символов)');
    return false;
  }
  return true;
}

function clickNodeRemove(event) {
  event.preventDefault();
  this.querySelector('a.task__remove').parentNode.remove();
}

function addElement(event) {
  const inputValue = document.querySelector('.tasks__input');
  event.preventDefault();
  if (validate(event) === true) {
    inputValue.value = inputValue.value.trim();
    addTaskHtml(inputValue.value);
    inputValue.value = '';// очистка поля ввода
  }
}

const onKey = (e) => {
  if (e.code === 'NumpadEnter') {
    addElement();
  }
};

function onClick(event) {
  event.preventDefault();// yno string
  document.addEventListener('keydown', onKey);
}

document.querySelector('input.tasks__input').addEventListener('input', onClick);
document.querySelector('button.tasks__add').addEventListener('click', addElement);
document.querySelector('div.tasks__list').addEventListener('click', clickNodeRemove);
