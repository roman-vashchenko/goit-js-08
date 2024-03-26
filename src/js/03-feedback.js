import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEL: document.querySelector('input[type="email"]'),
  textareaEL: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', throttle(onInputForm, 500));

refs.form.addEventListener('submit', onSubmitForm);

const objData = {};

const alertMessage = 'ДАНИХ НЕМАЄ';

getDataLocalStorage();

function onInputForm(e) {
  objData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
}

function getDataLocalStorage() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parseData = JSON.parse(savedData);
    refs.inputEL.value = parseData.email ? parseData.email : '';
    refs.textareaEL.value = parseData.message ? parseData.message : '';
    return parseData;
  }
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(getDataLocalStorage());
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
}
