const map = () => {
  const maps = document.querySelectorAll('[data-target=map]');
  maps.forEach((item) => {
    function init() {
      var mapMsk = new ymaps.Map('msk', {
        center: [55.682651, 37.661922], // проспект Андропова, 22
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
      });
      var pinMsk = new ymaps.GeoObject({
        geometry: {
          type: 'Point',
          coordinates: [55.683452, 37.6615] // координаты, где будет размещаться флажок на карте
        }
      });
      mapMsk.geoObjects.add(pinMsk); // помещаем флажок на карту

      var mapOmsk = new ymaps.Map('omsk', {
        center: [54.978054, 73.443635], // 20 лет РККА, 300
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
      });
      var pinOmsk = new ymaps.GeoObject({
        geometry: {
          type: 'Point',
          coordinates: [54.978071, 73.442918] // координаты, где будет размещаться флажок на карте
        }
      });
      mapOmsk.geoObjects.add(pinOmsk); // помещаем флажок на карту

      var mapSpb = new ymaps.Map('spb', {
        center: [59.988743, 30.177016], // Лахтинский проспект, 2к1
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
      });
      var pinSpb = new ymaps.GeoObject({
        geometry: {
          type: 'Point',
          coordinates: [59.988866, 30.176822] // координаты, где будет размещаться флажок на карте
        }
      });
      mapSpb.geoObjects.add(pinSpb); // помещаем флажок на карту

      var mapNsk = new ymaps.Map('nsk', {
        center: [55.055181, 82.962327], // улица Королёва, 40к5
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
      });
      var pinNsk = new ymaps.GeoObject({
        geometry: {
          type: 'Point',
          coordinates: [55.055097, 82.962181] // координаты, где будет размещаться флажок на карте
        }
      });
      mapNsk.geoObjects.add(pinNsk); // помещаем флажок на карту

      var mapTumen = new ymaps.Map('tumen', {
        center: [57.156705, 65.447281], // ул. Курортная, 44
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
      });
      var pinTumen = new ymaps.GeoObject({
        geometry: {
          type: 'Point',
          coordinates: [57.156623, 65.447238] // координаты, где будет размещаться флажок на карте
        }
      });
      mapTumen.geoObjects.add(pinTumen); // помещаем флажок на карту

      var mapKurgan = new ymaps.Map('kurgan', {
        center: [55.474878, 65.372676], // Омская улица, 171Б
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
      });
      var pinKurgan = new ymaps.GeoObject({
        geometry: {
          type: 'Point',
          coordinates: [55.473635, 65.371922] // координаты, где будет размещаться флажок на карте
        }
      });
      mapKurgan.geoObjects.add(pinKurgan); // помещаем флажок на карту
    }

    let isNeedToLoadHotelMap = true;
    const initYandexMap = () => {
      if (isNeedToLoadHotelMap) {
        isNeedToLoadHotelMap = false;
        ymaps.load(init);
      }
    };

    item.addEventListener('click', initYandexMap, { passive: true });
    item.addEventListener('touchmove', initYandexMap, { passive: true });
    item.addEventListener('touchstart', initYandexMap, { passive: true });
    item.addEventListener('mouseover', initYandexMap, { passive: true });
  });
};

export default map;
