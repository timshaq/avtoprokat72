"use strict";

$(function () {
  try {
    var item = $('.text-block__toggle-btn');
    $(item).click(function (ev) {
      var current = ev.target.offsetParent.parentElement;

      if ($(current).hasClass('active')) {
        $(current).removeClass('active');
      } else {
        $('.offer__text-block').removeClass('active');
        $(current).addClass('active');
      }
    });
  } catch (_unused) {}
});
"use strict";

$(function () {
  var tariffList = [{
    name: '1 день',
    cost: 2000,
    id: 'day1'
  }, {
    name: '2-3 дня',
    cost: 1800,
    id: 'day3'
  }, {
    name: '4-30 дней',
    cost: 1700,
    id: 'day30'
  }, {
    name: 'Межгород',
    cost: 2300,
    id: 'dayCities'
  }, {
    name: 'Россия',
    cost: 2000,
    id: 'dayRus'
  }, {
    name: 'Почасовой',
    cost: 300,
    id: 'hours'
  }];
  var dopeList = [{
    name: 'Мойка автомобиля',
    cost: 500,
    id: 'wash'
  }, {
    name: 'Заправка автомобиля',
    cost: 0,
    id: 'fill'
  }, {
    name: 'Детское кресло',
    cost: 500,
    id: 'childSeat'
  }, {
    name: 'Зарядное устройство',
    cost: 0,
    id: 'charger'
  }, {
    name: 'Кабель AUX',
    cost: 0,
    id: 'AUX'
  }, {
    name: 'Видеорегистратор',
    cost: 0,
    id: 'cam'
  }];
  var form = document.getElementById('calcForm');
  var tariff = document.getElementById('tariff');
  var startDate = document.getElementById('startDate');
  var endDate = document.getElementById('endDate');
  var startTime = document.getElementById('startTime');
  var endTime = document.getElementById('endTime');
  var dopeInputs = document.getElementsByClassName('checkbox__input');
  var dopeItems = Array.from(dopeInputs);
  dopeItems.map(function (input) {
    input.oninput = function (ev) {
      console.log(ev);
    };
  });
  var rentSumm = document.getElementById('rentSumm');
  var dopeSumm = document.getElementById('dopeSumm');
  var totalSumm = document.getElementById('totalSumm'); // form.addEventListener('change', function(ev) {
  // 	console.log('form')
  // 	console.log(ev)
  // })
});
"use strict";

$(function () {
  jQuery.datetimepicker.setLocale('ru');
  jQuery('.date-input').datetimepicker({
    i18n: {
      ru: {
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayOfWeek: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
      }
    },
    timepicker: false,
    format: 'd.m.Y'
  });
  jQuery('.time-input').datetimepicker({
    datepicker: false,
    format: 'H:i'
  });
});
"use strict";

$(function () {
  function disableScroll() {
    $('body').css('overflow', 'hidden');
  }

  function enableScroll() {
    $('body').css({
      'overflow': 'hidden auto'
    });
  }

  var openModal = function openModal() {
    $(".put-review").fadeIn(400, disableScroll);
    $(".put-review").css({
      "display": "flex",
      'overflow': 'auto'
    });
  };

  $(".reviews__put-review").click(function () {
    $(".put-review").fadeIn(400, disableScroll);
    $(".put-review").css({
      "display": "flex",
      'overflow': 'auto'
    });
  });
  $('.put-review').click(function (ev) {
    if (ev.target == this) {
      $(this).fadeOut(400, enableScroll);
    }
  });
  $('.modal__close').click(function (ev) {
    $(".put-review").fadeOut(400, enableScroll);
  }); // fake link
  // $('.item__fake-link').click(function() {
  // 	$('#link-modal').fadeIn(400, function() {$('#link-modal').focus()})
  // 	$('#link-modal').blur(function() {$('#link-modal').fadeOut(400)})
  // })
  // gallery

  $(".watch").click(function (ev) {
    var index = $(ev.target).attr('data-index');
    console.log(index);
    $(".gallery").fadeIn(400, disableScroll);
    $(".gallery").css({
      "display": "flex",
      'overflow': 'auto'
    });
    $('#fullscreen').slick('slickGoTo', index);
  });
  $('.gallery').click(function (ev) {
    if (ev.target == this) {
      $(this).fadeOut(400, enableScroll);
    }
  });
  $('.gallery__close').click(function (ev) {
    $(".gallery").fadeOut(400, enableScroll);
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 27) {
      if ($('.put-review').css('display') != 'none') {
        $('.put-review').fadeOut(400, enableScroll);
      } else if ($('.gallery').css('display') != 'none') {
        $('.gallery').fadeOut(400, enableScroll);
      }
    }
  });
});
"use strict";

$(function () {
  $('#card-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: true
  });
  $('#fullscreen').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    touchMove: true,
    responsive: [{
      breakpoint: 801,
      settings: {
        arrows: false
      }
    }]
  });
});
"use strict";

$(function () {
  $('#btn1').on('click', function (ev) {
    if (!$('#btn1').hasClass('active')) {
      $('#btn1').addClass('active');
      $('#cont1').addClass('active');
      $('#cont2').removeClass('active');
      $('#btn2').removeClass('active');
      window.location.href = "".concat(window.location.origin).concat(window.location.pathname, "#btn1");
    }
  });
  $('#btn2').on('click', function (ev) {
    if (!$('#btn2').hasClass('active')) {
      $('#btn2').addClass('active');
      $('#cont2').addClass('active');
      $('#cont1').removeClass('active');
      $('#btn1').removeClass('active');
      window.location.href = "".concat(window.location.origin).concat(window.location.pathname, "#btn2");
    }
  });
});
"use strict";

$(function () {
  function disableScroll() {
    $('body').css('overflow', 'hidden');
  }

  function enableScroll() {
    $('body').css({
      'overflow': 'hidden auto'
    });
  }

  $(".header__burger").click(function () {
    $(".menu-mob").fadeIn(400, disableScroll);
    $(".menu-mob").css({
      "display": "flex",
      'overflow': 'auto'
    });
    $(".menu-burger__close").css({
      "transform": "rotate(0deg)"
    });
  });
  $('.menu-burger__close').click(function (ev) {
    $(".menu-burger__close").css({
      "transform": "rotate(180deg)"
    });
    $(".menu-mob").fadeOut(400, enableScroll);
  });
  $('.nav-list__item').on('click', function () {
    $(".menu-burger__close").css({
      "transform": "rotate(180deg)"
    });
    $(".menu-mob").fadeOut(400, enableScroll);
  });
});
// $(function() {
// window.addEventListener('scroll', function(ev) {
// 	var top = window.scrollY
// 	var header = document.getElementsByTagName('header')[0]
// 	if (top >= 200) {
// 		header.classList.add('fixed')
// 	} else {
// 		header.classList.remove('fixed')
// 	}
// })
// })
"use strict";
"use strict";

$(function () {
  $('#togmap').on('click', function () {
    if ($('#yamap').hasClass('hidden')) {
      $('#yamap').css({
        "height": "auto"
      });
      $('#yamap').removeClass('hidden');
      $('#togmap div').text('Свернуть карту');
    } else {
      $('#yamap').addClass('hidden');
      $('#yamap').css({
        "height": 0
      });
      $('#togmap div').text('Развернуть карту');
    }
  });
});
"use strict";

$(function () {
  var item = $('.item__triangle');
  $(item).click(function (ev) {
    var current = ev.target.offsetParent;

    if ($(current).hasClass('open')) {
      $(current).removeClass('open');
    } else {
      $('.text-block__item').removeClass('open');
      $(current).addClass('open');
    }
  });
});
"use strict";

$(function () {
  $('.ad-filters__item').on('click', function (ev) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });
});
"use strict";

$(function () {
  $('.form__input.phone').mask("+7 (999) 999-99-99");

  function disableScroll() {
    $('body').css('overflow', 'hidden');
  }

  function enableScroll() {
    $('body').css({
      'overflow': 'hidden auto'
    });
  }

  var openModal = function openModal() {
    $(".popup").fadeIn(400, disableScroll);
    $(".popup").css({
      "display": "flex",
      'overflow': 'auto'
    });
  };

  $(".modal1").click(function () {
    $("#rent").fadeIn(400, disableScroll);
    $("#rent").css({
      "display": "flex",
      'overflow': 'auto'
    });
  });
  $('#rent').click(function (ev) {
    if (ev.target == this) {
      $(this).fadeOut(400, enableScroll);
    }
  });
  $('.modal__close').click(function (ev) {
    $("#rent").fadeOut(400, enableScroll);
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 27) {
      if ($('#rent').css('display') != 'none') {
        $('#rent').fadeOut(400, enableScroll);
      }
    }
  }); // рассрочка

  $(".rassr").click(function () {
    $("#rassr").fadeIn(400, disableScroll);
    $("#rassr").css({
      "display": "flex",
      'overflow': 'auto'
    });
  });
  $('#rassr').click(function (ev) {
    if (ev.target == this) {
      $(this).fadeOut(400, enableScroll);
    }
  });
  $('.modal__close').click(function (ev) {
    $("#rassr").fadeOut(400, enableScroll);
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 27) {
      if ($('#rassr').css('display') != 'none') {
        $('#rassr').fadeOut(400, enableScroll);
      }
    }
  });
});
"use strict";

$(function () {
  $('#slider1').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    draggable: false,
    touchMove: false
  }).on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });
  $('#slider2').slick({
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    responsive: [{
      breakpoint: 1366,
      settings: {
        arrows: false
      }
    }, {
      breakpoint: 1201,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
"use strict";

$(function () {
  var card = $('.slider__yandex-card');
  var star = $('.yandex-card__link');
  $(card).mouseenter(function () {
    $(card).css({
      "transform": "translate(0,0)"
    });
    $(star).css({
      "transform": "translate(0,0)"
    });
  });
  $(card).mouseleave(function () {
    $(card).css({
      "transform": "translate(0,320px)"
    });
    $(star).css({
      "transform": "translate(0,-40px)"
    });
  });
});
"use strict";

$(function () {
  $('#toddler').draggable({
    axis: "x",
    containment: "parent",
    drag: function drag(ev, st) {
      var left = st.position.left;
      var full = Math.round(+$('.calculate__line').css('width').replace('px', '') - 23);
      var percent = (left * 100 / full + 1).toFixed(2);
      $('#cost').css({
        "left": "".concat(left, "px")
      });
      var linear = (percent - 1) * 8 / 100;
      $('.calculate__line.green').css({
        "width": left + 8
      });
      $('.dragg__toddler').css({
        "left": "".concat(left, "px")
      });
      var cost = Math.round(2500 * (3 * percent + 97));
      var costStr = '';
      cost === 1000000 ? costStr = '1&nbsp;000&nbsp;000' : costStr = String(cost).slice(0, 3) + '&nbsp;' + String(cost).slice(3, 6);
      $('#cost').html("".concat(costStr, "&nbsp;\u0440\u0443\u0431."));
      var koef = 1.148936170212766;
      var profit = Math.round(cost * koef);
      var profitStr = '';

      if (profit > 999999) {
        profitStr = String(profit).slice(0, 1) + '&nbsp;' + String(profit).slice(1, 4) + '&nbsp;' + String(profit).slice(4, 7);
      } else {
        profitStr = String(profit).slice(0, 3) + '&nbsp;' + String(profit).slice(3, 6);
      }

      $('.profit__subtitle').html("".concat(profitStr, "&nbsp;\u0440\u0443\u0431."));
    }
  });
  $(window).resize(function (ev) {
    $('#cost').css({
      "left": "28.2%"
    });
    $('#cost').html('470&nbsp;000&nbsp;руб.');
    $('.profit__subtitle').html('540&nbsp;000&nbsp;руб.');
    $('.dragg__toddler').css({
      "left": "28.2%"
    });
    $('#toddler').css({
      "left": "28.2%"
    });
    $('.calculate__line.green').css({
      "width": "28.2%"
    });
  });
});
"use strict";

$(function () {
  function disableScroll() {
    $('body').css('overflow', 'hidden');
  }

  function enableScroll() {
    $('body').css({
      'overflow': 'hidden auto'
    });
  }

  var openModal = function openModal() {
    $(".popup").fadeIn(400, disableScroll);
    $(".popup").css({
      "display": "flex",
      'overflow': 'auto'
    });
  };

  $(".caller").click(function () {
    $(".popup").fadeIn(400, disableScroll);
    $(".popup").css({
      "display": "flex",
      'overflow': 'auto'
    });
  });
  $('.popup').click(function (ev) {
    if (ev.target == this) {
      $(this).fadeOut(400, enableScroll);
    }
  });
  $('.modal__close').click(function (ev) {
    $(".popup").fadeOut(400, enableScroll);
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 27) {
      if ($('.popup').css('display') != 'none') {
        $('.popup').fadeOut(400, enableScroll);
      }
    }
  });
  $('.form__input.phone').mask("+7 (999) 999-99-99");
});