var menu = document.querySelector('#menu')
var menuButton = document.querySelector('#main-menu')
var closeMenu = document.querySelector('#close-menu')

menu.classList.add('hidden')

menuButton.addEventListener('click', showMenu)
closeMenu.addEventListener('click', hideMenu)

function showMenu () {
  menu.classList.remove('hidden')
}

function hideMenu () {
  menu.classList.add('hidden')
}
