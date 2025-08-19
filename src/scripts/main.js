'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  return logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise rejected after 3s')), 3000);
});

promise1.then(() => showMessage('Promise was resolved!', 'message'));

promise2.catch(() => {
  showMessage('Promise was resolved!', 'message error-message');
});

function showMessage(text, className) {
  const div = document.createElement('div');

  div.className = className;
  div.textContent = text;
  document.body.append(div);
}
