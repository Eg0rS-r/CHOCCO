(function () {
  // FULL SCREEN MENU

  const menu_link = document.querySelector('.menu-link')
  const menu_icon = document.querySelector('.menu-icon')
  const menu_cross = document.querySelector('.menu-icon--cross')
  const menu = document.querySelector('.menu')

  function menu__full(event) {
    event.preventDefault();

    menu_icon.classList.toggle('menu-icon--cross')
    menu.classList.toggle('menu--full')
  }

  menu_link.addEventListener('click', menu__full);


  const item = document.getElementsByClassName("menu__link")

  Array.prototype.forEach.call(item, function (link) {
    link.addEventListener('click', menu__full);
  });
})()