const itensDoMenu = document.querySelectorAll('#menu-principal li');
const botaoEl = document.querySelector('#alterna-menu');
const listaMenuEl = document.querySelector('#menu-principal ul');

itensDoMenu.forEach(el => el.addEventListener('click', ativaItemMenu));

function ativaItemMenu(e) {
  itensDoMenu.forEach(el => el.classList.remove('menu-ativo'));
  e.currentTarget.classList.add('menu-ativo');
}

function removeMenu(e) {
  listaMenuEl.classList.toggle('lista-inativo');
}

botaoEl.addEventListener('click', removeMenu);
