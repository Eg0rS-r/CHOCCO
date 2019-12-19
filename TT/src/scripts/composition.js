;(function () {

  // COMPOSITION

  const comp__clk = document.querySelectorAll('.comp__clk')
  const comp = document.querySelectorAll('.comp__list')


  for (let i = 0; i < comp__clk.length; i++) {

    comp__clk[i].addEventListener('click', function (event) {
      event.preventDefault();

      let width = document.documentElement.clientWidth;
      if (width > 769) {
        comp[i].classList.toggle('comp__list--acitve-right')
      }

      comp[i].classList.toggle('comp__list--active')
    });

  }

})()
