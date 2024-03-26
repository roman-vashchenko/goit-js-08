import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

console.log(form);

form.addEventListener('input', throttle(onInputForm, 500));

const objData = {};

function onInputForm(e) {
  objData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
}
