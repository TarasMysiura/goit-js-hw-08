import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textArea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onInputData, 500));
refs.form.addEventListener('submit', onFormSubmit);

fillForm();

function onInputData(e) {
  formData = {
    email: refs.input.value.trim(),
    message: refs.textArea.value.trim(),
  };
}

function onFormSubmit(ev) {
  ev.preventDefault();
  const { email, message } = ev.currentTarget.elements;
  // console.log({ email: email.value.trim(), message: message.value.trim() });
  console.dir(formData);

  if (localStorage.getItem(LOCAL_KEY)) {
    localStorage.removeItem(LOCAL_KEY);
  }
  save(LOCAL_KEY, formData);
  ev.currentTarget.reset();
  formData = {};
}

function fillForm() {
  const currentForm = load(LOCAL_KEY);
  if (currentForm !== undefined) {
    console.log(currentForm);
    refs.input.value = currentForm.email;
    refs.textArea.value = currentForm.message;
    //   console.log(refs.input.value);
  }
}

const save = (key, value) => {
  try {
    // throttle(() => {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
    // }, 1000);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
