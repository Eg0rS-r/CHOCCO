(function () {
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
      top_wrap = 0
    }
    console.log(e.originalEvent)

    scorll()

  })
})()
