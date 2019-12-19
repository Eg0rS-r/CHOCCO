; (function () {
  const wrap = $('.wrapper')
  const wrap_len = $('section').length
  const bar_link = $('.progress-bar__link')
  const bar_link_arr = document.querySelectorAll('.progress-bar__link');
  const menu_item_link = $('.menu__item')
  const bar_link_activeD = $('.progress-bar__link--active-dark')
  const bar_link_activeL = $('.progress-bar__link--active-light')
  let top_wrap = 1

  console.log(bar_link)

  function scorll() {
    if ((wrap_len > top_wrap) && !(top_wrap < 0)) {
      let top = top_wrap * (-100) + 'vh'

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
      wrap.css('top', top_wrap * (-100) + 'vh')
      top_wrap = top_wrap + 1
      console.log(wrap.css('top'))
    }
  }


  bar_link.on('click', function (e) {
    e.preventDefault();
    top_wrap = $(this).index()
    bar_link.removeClass("progress-bar__link--active-light");
    bar_link.removeClass("progress-bar__link--active-dark");
    $(this).addClass('progress-bar__link--active-light');
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
      top_wrap = 0
    }
    console.log(e.originalEvent)

    scorll()

  })
})()
