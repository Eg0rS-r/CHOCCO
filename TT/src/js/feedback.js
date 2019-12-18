
(function () {

  // FEEDBACK

  const review__item = document.querySelectorAll('.review-list__item');
  var review__len = review__item.length

  const review__text = document.querySelector('.review__text');
  const avatar__img = document.querySelectorAll('.avatar-img--review');
  const avatar__rev = document.querySelector('.avatar--review');
  const review__title = document.querySelector('.review__title');
  const review__desc = document.querySelector('.review__desc');
  const review__names = document.querySelector('.review__names');

  for (let i = 0; i < review__len; i++) {

    function img__switch() {
      for (let i = 0; i < avatar__img.length; i++) {
        avatar__img[i].classList.remove("avatar-img--active")
      }

      avatar__img[i].classList.toggle('avatar-img--active')
    }

    function text__switch() {
      img__switch()

      switch (i) {
        case 0:
          review__title.textContent = 'Лучший перекус';
          review__desc.textContent = 'Я ем малыми порциями, но часто. Это повышает мою продуктивность в разы. В течение дня сижу за компьютером и часто отходить в кафе или на кухню просто не могу себе позволить. А батончик – он всегда под рукой. Это приятно и удобно.';
          review__names.textContent = 'Алёна Хмельницкая';
          break;
        case 1:
          review__title.textContent = 'Лучшие батончики премиум уровня';
          review__desc.textContent = 'Батончики понравились. На мой взгляд слегка завышена цена по сравнению с конкурентами, однако, как говорится – оно того стоит. Нравится носить с собой, нравится держать в руке. Ну и конечно же, кушать. Идеально утоляют голод, хоть и не надолго. Через час уже ем ещё один. Но это скорее плюс, чем минус.';
          review__names.textContent = 'Мария Орлова';
          break;
        case 2:
          review__title.textContent = 'Идеально подходят для спортсменов';
          review__desc.textContent = 'После тренировок всегда хочется быстро закинуться чем-то белковым, потому что до дома ещё нужно доехать. А кушать хочется. Протеиновые батончики всегда выручают в этом плане. Спасибо производителю за этот качественный и экологичный продукт. ';
          review__names.textContent = 'Вадим Грачев';
          break;
      }
    }

    review__item[i].addEventListener('click', function (event) {
      event.preventDefault();

      avatar__rev.style.opacity = '0'
      review__text.style.opacity = '0'

      setTimeout(text__switch, 290)

      setTimeout(function () {
        avatar__rev.style.opacity = '1'
        review__text.style.opacity = '1'
      }, 340)

      for (let i = 0; i < review__len; i++) {
        review__item[i].classList.remove("review-list__item--active")
      }

      review__item[i].classList.toggle('review-list__item--active')

    });
  }

})()
