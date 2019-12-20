; (function () {

  // SLIDER

  const width = document.documentElement.clientWidth;
  var right_sc = false

  const left = document.querySelector(".arrow--left");
  const right = document.querySelector(".arrow--right");
  const items = document.querySelector(".slider__item");
  const list = document.querySelector(".slider__list");

  function changeSlide() {
    if (right_sc === true) {
      list.style.right = '0%'
      right_sc = false
    } else {
      list.style.right = '122%';
      right_sc = true;
      if (width <= 768) {
        list.style.right = '113%';
      }
      if (width <= 480) {
        list.style.right = '123%';
      }
    }
  }

  right.addEventListener("click", function (event) {
    event.preventDefault();

    changeSlide()
  });

  left.addEventListener("click", function (event) {
    event.preventDefault();

    changeSlide()
  });

})()
