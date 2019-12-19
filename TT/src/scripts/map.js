; (function () {

  // MAP

  ymaps.ready(init);

  const placemarks = [
    {
      latitude: 55.75762222416369,
      longitude: 37.583077154499726,
    }, {
      latitude: 55.74294856672482,
      longitude: 37.58069371368265,
    }, {
      latitude: 55.750200207877114,
      longitude: 37.60380430717141,
    }, {
      latitude: 55.75671399465775,
      longitude: 37.620119590872136,
    }
  ]

  function init() {
    var myMap = new ymaps.Map('map', {
      center: [55.75015890065583, 37.590421042782516],
      zoom: 14,
      controls: ['smallMapDefaultSet'],

    }, {
      minZoom: 12,
      maxZoom: 17
    })
    myMap.behaviors.disable('scrollZoom');

    placemarks.forEach(function (obj) {
      const placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
      }, {
        iconLayout: 'default#image',
        iconImageHref: './img/mark.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      })
      myMap.geoObjects.add(placemark)
    })
  }


})()
