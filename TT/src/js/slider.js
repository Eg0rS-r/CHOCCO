(function () {

  // SLIDER

  const left = document.querySelector(".arrow--left");
  const right = document.querySelector(".arrow--right");
  const items = document.querySelector(".slider__item");
  const list = document.querySelector(".slider__list");

  right.addEventListener("click", function (event) {
    event.preventDefault();
    list.style.right = '122%';
    if (width <= 768) {
      list.style.right = '113%';
    }
    if (width <= 480) {
      list.style.right = '123%';
    }
  });

  left.addEventListener("click", function (event) {
    event.preventDefault();
    list.style.right = '0%';
  });

})()
