(function () {

  // MENU ACCORDION

  const menu__accord = document.querySelectorAll('.accord-menu__item');
  const accord__title = document.querySelectorAll('.accord__title');
  const cont__accord = document.querySelectorAll('.accord__cont');
  var accord_len = menu__accord.length
  accord__title

  const close = document.querySelectorAll(".cross")

  let width = document.documentElement.clientWidth;


  for (let i = 0; i < accord_len; i++) {

    close[i].addEventListener('click', function (event) {
      event.preventDefault()
      if (width <= 480) {
        menu__accord[i].style.left = i * -100 + 'px'
      }
      cont__accord[i].classList.toggle("accord__cont--active")
      menu__accord[i].classList.toggle('accord-menu__item--active')
      if (width <= 480) {
        if (!(menu__accord[i].classList.contains('accord-menu__item--active'))) {
          menu__accord[i].style.left = 'unset'
        }
      }

    });
  }

  for (let i = 0; i < accord_len; i++) {

    accord__title[i].addEventListener('click', function (event) {
      event.preventDefault();
      var prev = i
      for (let i = 0; i < accord_len; i++) {
        if (prev != i) {
          menu__accord[i].classList.remove("accord-menu__item--active")
          setTimeout(function () {
            cont__accord[i].classList.remove("accord__cont--active")
          }, 350)
        }
      }
      if (width <= 480) {
        menu__accord[i].style.left = i * -100 + 'px'
      }
      cont__accord[i].classList.toggle("accord__cont--active")
      menu__accord[i].classList.toggle('accord-menu__item--active')
      if (width <= 480) {
        if (!(menu__accord[i].classList.contains('accord-menu__item--active'))) {
          menu__accord[i].style.left = 'unset'
        }
      }

    });
  }

})()
