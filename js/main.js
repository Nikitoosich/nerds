// Feedback form
var link = $(".contacts-btn");
var popup = $(".feedback-form");
var close = $(".feedback-cancel");
var input_name = $("#input-name");
var input_email = $("#input-e-mail");
var input_message = $("#input-message");

// Form opening, closure and animation for error indication
link.click(function(event) {
  event.preventDefault();
  console.log(input_email.val());
  if (popup.hasClass("feedback-form-show")) {
    popup.removeClass("feedback-form-show feedback-form-animation feedback-form-error");
  }
  else {
    popup.removeClass("feedback-form-error");
    popup.addClass("feedback-form-show feedback-form-animation");
    setTimeout(function() {
      input_name.focus() }, 500);
  }
});

close.click(function(event) {
  event.preventDefault();
    popup.removeClass("feedback-form-show feedback-form-animation feedback-form-error");
});

// Simple validation - error if at least one input is empty
popup.submit(function(event) {
  if (!input_name.val() || !input_email.val() || !input_message.val()) {
    event.preventDefault();
      popup.removeClass("feedback-form-error feedback-form-animation");
      setTimeout(function() {
        popup.addClass("feedback-form-error") }, 50);
  }
});

// Form closure with Esc
$(window).keydown(function(event) {
  if (event.keyCode == 27
  && popup.hasClass("feedback-form-show")) {
    popup.removeClass("feedback-form-show feedback-form-animation");
  }
});

// Form closure when clicking outside of its borders
$('body').click(function(e) {
  if (popup.hasClass("feedback-form-show")
  && ($(e.target).closest(popup).length===0) && (!$(e.target).hasClass('contacts-btn'))) {
    popup.removeClass("feedback-form-show");
  }
});

// Slider - owl carousel plugin
var control = $(".owl-dot");
var control_active = $(".owl-dot.active");

$('.owl-carousel').owlCarousel({
  items:1,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true
});

// Map (Yandex)
var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center:[45.043746,38.943404], // Координаты адреса
    zoom:18
  });

  myMap.controls
    // Кнопка изменения масштаба.
    .add('zoomControl', { left: 15, top: 15 });

  myPlacemark = new ymaps.Placemark([45.043323,38.94424], {
  }, {
    iconImageHref: 'img/mark.png',
    // Размеры метки.
    iconImageSize: [231, 190],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-60, -200]
  });

  myMap.geoObjects.add(myPlacemark);

}
