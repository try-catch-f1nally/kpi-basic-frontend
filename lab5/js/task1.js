const fieldsToValidate = [
  {id: 'surname-and-initials', regex: /^[A-ZА-ЯІЇ][A-ZА-ЯІЇa-zа-яії]+ [A-ZА-ЯІЇ]\. [A-ZА-ЯІЇ]\.$/},
  {id: 'date-of-birth', regex: /^(\d{2}\.){2}\d{4}$/},
  {id: 'address', regex: /^м\. \d{6}$/},
  {id: 'email', regex: /^\w+@\w+\.com$/},
  {id: 'telegram', regex: /^@[\w_]+$/}
];

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  let allValid = true;
  for (const {id, regex} of fieldsToValidate) {
    const input = document.getElementById(id);
    const validationDiv = document.querySelector(`#${id} + div.validation-text`);
    if (!regex.test(input.value)) {
      allValid = false;
      input.classList.add('red-bottom');
      validationDiv.classList.remove('d-none');
    } else {
      input.classList.remove('red-bottom')
      validationDiv.classList.add('d-none');
    }
  }
  if (allValid) {
    for (const {id} of fieldsToValidate) {
      document.getElementById(`${id}-result`).innerText = document.getElementById(id).value;
    }
  }
  document.querySelector('#result').classList.toggle('d-none', !allValid);
});
