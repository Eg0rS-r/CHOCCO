

const wrap = $('.wrapper')
const wrap_len = $('section').length
const bar_link = $('.progress-bar__link')
const menu_item_link = $('.menu__item')
let top_wrap = 1

console.log(bar_link)

function scorll() {
  if ((wrap_len > top_wrap) && !(top_wrap < 0)) {
    let top = top_wrap * (-100) + 'vh'
    
    wrap.css('top', top_wrap * (-100) + 'vh')
    top_wrap = top_wrap + 1
    console.log(wrap.css('top'))
  }
}


bar_link.on('click', function (e) {
  e.preventDefault();
  top_wrap = $(this).index()
  console.log(top_wrap)
  scorll()
})

menu_item_link.on('click', function (e) {
  e.preventDefault();
  top_wrap = $(this).index()
  console.log(top_wrap)
  scorll()
})

wrap.on('wheel', function (e) {
  e.preventDefault();
  console.log(top_wrap)
  
  if (e.originalEvent.deltaY < 0) {
    top_wrap = top_wrap - 2
    
  }
  if (top_wrap <= -1) {
    top_wrap =0
  }
  console.log(e.originalEvent)

  scorll()

})


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



// TEAM ACCORDION

const team__name = document.querySelectorAll('.team__name');
var team__len = team__name.length

for (let i = 0; i < team__len; i++) {
  team__name[i].addEventListener('click', function (event) {
    event.preventDefault();
    var prev = i
    for (let i = 0; i < team__len; i++) {
      if (prev != i) {
        team__name[i].classList.remove("team__name--active")
      }
    }

    team__name[i].classList.toggle('team__name--active')
  });
}


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


// FORM

const form = document.querySelector('.form-content')
const btn = document.querySelector('#ready')
const overlay = document.querySelector('.overlay')
const massage = document.querySelector('.massage')
const massage__text = document.querySelector('.massage__text')
const cross__massage = document.querySelector('.close--massage')


btn.addEventListener('click', function (event) {
  event.preventDefault();

  if (validForm(form)) {
    console.log('Все заполнено правильно ')

    var formData = new FormData();


    formData.append('name', form.elements.name.value);
    formData.append('phone', form.elements.phone.value);
    formData.append('street', form.elements.street.value);
    formData.append('house', form.elements.house.value);
    formData.append('casing', form.elements.casing.value);
    formData.append('flat', form.elements.flat.value);
    formData.append('floor', form.elements.floor.value);
    formData.append('coment', form.elements.coment.value);

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(formData));
    xhr.addEventListener('load', () => {
      overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
          overlay.classList.remove('overlay--active')
          massage__text.removeChild(text)
        }
      })
      cross__massage.addEventListener('click', function (event) {
        event.preventDefault()
        massage__text.removeChild(text)
        overlay.classList.remove('overlay--active')
      })
      overlay.classList.toggle('overlay--active')
      const text = document.createElement('p');
      massage__text.appendChild(text)
      if (xhr.status) {
        console.log('DONE')
        text.textContent = 'Все данные успешно отправлены'
        text.style.color = "#4dd599"
        massage.style.border = "1px #4dd599 solid"
      } else {
        console.log('ERROR')
        text.style.color = "#e25822"
        text.textContent = 'Что-то пошло не так'
        massage.style.border = "1px #e25822 solid"
      }
    })
  }


});

// validation
function validForm(form) {
  let valid = true

  if (!validField(form.elements.name)) {
    valid = false
  } else if (!validField(form.elements.phone)) {
    valid = false
  } else if (!validField(form.elements.street)) {
    valid = false
  } else if (!validField(form.elements.house)) {
    valid = false
  } else if (!validField(form.elements.casing)) {
    valid = false
  } else if (!validField(form.elements.flat)) {
    valid = false
  } else if (!validField(form.elements.floor)) {
    valid = false
  } else if (!validField(form.elements.coment)) {
    valid = false
  }

  return valid
}

function validField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}