const form = document.getElementById('form');
const user_input = document.getElementById('user_email');
const submit_btn = document.getElementById('submit_btn');
const error_input = document.querySelector('.error-input');

submit_btn.addEventListener('click', function (e) {
  e.preventDefault();
  if (!user_input.value) {
    user_input.style.border = '1px solid red';
    error_input.style.visibility = 'visible';
  } else {
    error_input.style.visibility = 'hidden';
    user_input.style.border = 'none';
  }
});
