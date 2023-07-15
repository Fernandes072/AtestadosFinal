const dark_chk = document.querySelector('#toggle-dark-mode');
const bodyElement = document.body;

let inputElements;
let selectElements;
let textElement;
let optionElements;
let checkElement;

let primeiroAcesso = true;

if (window.location.pathname == '/Paginas/PaginaFormulario.html') {
    inputElements = document.querySelectorAll('input');
    selectElements = document.querySelectorAll('select');
    textElement = document.querySelector('#msg');
    optionElements = document.querySelectorAll('option');
    checkElement = document.querySelector('#receberEmail');
}

function setDarkTheme(dark_strg) {
  if (primeiroAcesso) {
    if (dark_strg === 'on') {
      dark_chk.checked = true;
    } else {
      dark_chk.checked = false;
    }
    primeiroAcesso = false;
  }
  let isDarkMode = dark_chk.checked || dark_strg === 'on';
  bodyElement.classList.toggle('dark-mode', isDarkMode);
  if (window.location.pathname == '/Paginas/PaginaFormulario.html') {
    inputElements.forEach(input => input.classList.toggle('dark-mode', isDarkMode));
    inputElements.forEach(input => input.classList.toggle('preto', isDarkMode));
    selectElements.forEach(select => select.classList.toggle('dark-mode', isDarkMode));
    textElement.classList.toggle('dark-mode', isDarkMode);
    textElement.classList.toggle('preto', isDarkMode);
    optionElements.forEach(option => option.classList.toggle('dark-mode', isDarkMode));
    checkElement.classList.toggle('check', isDarkMode);
  }
  if (dark_chk.checked) {
    dark_strg = 'on';
  } else {
    dark_strg = 'off';
  }
  console.log(dark_strg);
  localStorage.setItem('dark-mode', dark_strg);
}

setDarkTheme(localStorage.getItem('dark-mode'));
dark_chk.addEventListener('change', setDarkTheme);