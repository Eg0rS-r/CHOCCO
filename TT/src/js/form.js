(function () {

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

})()
