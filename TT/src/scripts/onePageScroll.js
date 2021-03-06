
; (function () {
  const wrap = $('.wrapper')
  const wrap_len = $('section').length
  const bar_link = $('.progress-bar__link')
  const bar_link_arr = document.querySelectorAll('.progress-bar__link');
  const menu_item_link = $('.menu__item')
  const bar_link_activeD = $('.progress-bar__link--active-dark')
  const bar_link_activeL = $('.progress-bar__link--active-light')
  let top_wrap = 1
  var inScroll = false

  console.log(bar_link)

  function scroll() {
    if ((wrap_len > top_wrap) && !(top_wrap < 0)) {
      bar_link.removeClass('progress-bar__link--active-light')
      bar_link.removeClass('progress-bar__link--active-dark')
      switch (top_wrap) {
        case 0:
          bar_link.css('background', '#FFFFFF')
          bar_link_arr[top_wrap].classList.add('progress-bar__link--active-light');
          break;
        case 1:
          bar_link.css('background', '#666666')
          bar_link_arr[top_wrap].classList.add('progress-bar__link--active-dark');
          break;
        case 2:
          bar_link.css('background', '#666666')
          bar_link_arr[top_wrap].classList.add('progress-bar__link--active-dark');
          break;
        case 3:
          bar_link.css('background', '#666666')
          bar_link_arr[top_wrap].classList.add('progress-bar__link--active-dark');
          break;
        case 4:
          bar_link.css('background', '#FFFFFF')
          bar_link_arr[top_wrap].classList.add('progress-bar__link--active-light');
          break;
        case 5:
          bar_link.css('background', '#666666')
          bar_link_arr[top_wrap].classList.add('progress-bar__link--active-dark');
          break;
        case 6:
          bar_link.css('background', '#FFFFFF')
          bar_link_arr[top_wrap].classList.add('progress-bar__link--active-light');
          break;
        case 7:
          bar_link.css('background', '#666666')
          bar_link_arr[top_wrap].classList.add('progress-bar__link--active-dark');
          break;
        case 8:
          bar_link.css('background', '#666666')
          bar_link_arr[top_wrap].classList.add('progress-bar__link--active-dark');
          break;
        case 9:
          bar_link.css('background', '#666666')
          bar_link_arr[top_wrap].classList.add('progress-bar__link--active-dark');
          break;
      }

      let top = top_wrap * (-100) + 'vh'
      inScroll = true
      wrap.css('top', top_wrap * (-100) + 'vh')
      top_wrap = top_wrap + 1
      console.log(wrap.css('top'))
      console.log('scorll')
      setTimeout(() => {
        console.log('time')
        inScroll = false
      }, 1500)
    }
  }


  bar_link.on('click', function (e) {
    e.preventDefault();
    top_wrap = $(this).index()
    bar_link.removeClass("progress-bar__link--active-light");
    bar_link.removeClass("progress-bar__link--active-dark");
    $(this).addClass('progress-bar__link--active-light');
    console.log(top_wrap)
    scroll()
  })

  menu_item_link.on('click', function (e) {
    e.preventDefault();
    top_wrap = $(this).index() + 1
    console.log(top_wrap)
    scroll()
  })

  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 40:
        scroll()
        break;
      case 38:
        top_wrap = top_wrap - 2
        if (top_wrap <= -1) {
          top_wrap = 0
        }
        scroll()
        break;
      default:
        break;
    }
  })


  wrap.on('wheel', function (e) {
    e.preventDefault();

    if (!inScroll) {

      if (e.originalEvent.deltaY < 0) {
        top_wrap = top_wrap - 2

      }
      if (top_wrap <= -1) {
        top_wrap = 0
      }
      scroll()
    }

    console.log('done')

  })

  const toolbar = document.querySelector('.toolbar')

  let touchStartY = 0;
  let touchEndY = 0;

  document.addEventListener('touchstart', e => {
    touchStartY = e.changedTouches[0].screenY;
  }, false);

  document.querySelector(".wrapper").addEventListener('touchmove', e => e.preventDefault());

  document.addEventListener('touchend', e => {
    touchEndY = e.changedTouches[0].screenY;
    let direct = swipeDirect();
    if (direct == 'up') {
      scroll()
    } else if (direct == 'down') {
      top_wrap = top_wrap - 2
      if (top_wrap <= -1) {
        top_wrap = 0
      }
      scroll()
    }
  }, false);

  function swipeDirect() {
    let dif = touchStartY - touchEndY;
    if (dif > 100) {
      return 'up';
    } else if (dif < - 100) {
      return 'down';
    }
  }


})()
