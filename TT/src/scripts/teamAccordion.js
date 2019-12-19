;(function () {


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

})()
