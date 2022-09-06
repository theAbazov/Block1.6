/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/burger.js":
/*!**********************!*\
  !*** ./js/burger.js ***!
  \**********************/
/***/ (() => {

var burger = document.getElementById('burger');
var overlay = document.getElementById('overlay');
var openBurger = document.getElementById('burger-open');
var closeBurger = document.getElementById('burger-close');
var body = document.body;
openBurger.addEventListener('click', function () {
  burger.classList.add('burger-show');
  overlay.style.display = 'block';
  body.classList.add('stop-scroll');
});
closeBurger.addEventListener('click', function () {
  burger.classList.remove('burger-show');
  overlay.style.display = 'none';
  body.classList.remove('stop-scroll');
});
overlay.addEventListener('click', function () {
  burger.classList.remove('burger-show');
  overlay.style.display = 'none';
  body.classList.remove('stop-scroll');
});

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swiper */ "./js/swiper.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more */ "./js/more.js");
/* harmony import */ var _more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_more__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./burger */ "./js/burger.js");
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_burger__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./js/more.js":
/*!********************!*\
  !*** ./js/more.js ***!
  \********************/
/***/ (() => {

var handleMore = function handleMore(btn, el, text, img) {
  var handleClick = function handleClick() {
    el.classList.toggle("show");
    img.classList.toggle("rotate");

    if (el.classList.contains("show")) {
      text.textContent = "Скрыть";
    } else {
      text.textContent = "Показать все";
    }
  };

  btn.addEventListener("click", handleClick);
};

var brandMore = document.getElementById("brand-more");
var brandSwiper = document.getElementById("brand-swiper");
var brandMoreText = document.getElementById("more-text-2");
var brandMoreImg = document.getElementById("more-img-2");
handleMore(brandMore, brandSwiper, brandMoreText, brandMoreImg);
var descrMore = document.getElementById("descr-more");
var descrContent = document.getElementById("descr-text");
var descrMoreText = document.getElementById("more-text-1");
var descrMoreImg = document.getElementById("more-img-1");

var handleClick = function handleClick(el, text, img) {
  el.classList.toggle("show");
  img.classList.toggle("rotate");

  if (el.classList.contains("show")) {
    text.textContent = "Скрыть";
  } else {
    text.textContent = "Читать далее";
  }
};

descrMore.addEventListener("click", function () {
  return handleClick(descrContent, descrMoreText, descrMoreImg);
});
var typeMore = document.getElementById("type-more");
var typeContent = document.getElementById("type-swiper");
var typeMoreText = document.getElementById("more-text-3");
var typeMoreImg = document.getElementById("more-img-3");
handleMore(typeMore, typeContent, typeMoreText, typeMoreImg);

/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ (() => {

var swiper = new Swiper(window.innerWidth < 768 ? ".mySwiper" : "", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Group.svg */ "./images/Group.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Bitmap (1).svg */ "./images/Bitmap (1).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Bitmap (3).svg */ "./images/Bitmap (3).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Bitmap (2).svg */ "./images/Bitmap (2).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Bitmap (4).svg */ "./images/Bitmap (4).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Bitmap (5).svg */ "./images/Bitmap (5).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Bitmap (6).svg */ "./images/Bitmap (6).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Bitmap.svg */ "./images/Bitmap.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n  <title>Document</title>\r\n</head>\r\n\r\n<body>\r\n  <div class=\"main-wrapper\">\r\n\r\n  <header class=\"header\">\r\n    <div class=\"container\">\r\n      <div role=\"list\" class=\"row header__row\">\r\n        <div class=\"header__left\">\r\n          <button id=\"burger-open\" aria-label=\"Меню бургер\" title=\"Открывает меню\" class=\"header__burger header__item\"></button>\r\n          <div class=\"header__line-left header__line\"></div>\r\n          <div class=\"header__logo\"></div>\r\n        </div>\r\n        <div class=\"header__right\">\r\n          <button aria-label=\"Телефон\" title=\"Звонить  нам\" class=\"header__call header__item\"></button>\r\n          <button aria-label=\"Сообщение\" title=\"Отправляет сообщение нам\" class=\"header__msg header__item\"></button>\r\n          <button aria-label=\"Профиль\" title=\"Открывает профиль\" class=\"header__profile header__item\"></button>\r\n          <div class=\"header__line-right header__line\"></div>\r\n          <button aria-label=\"Ремонт\" title=\"Отслежка заказа\" class=\"header__option header__item\"></button>\r\n          <button aria-label=\"Поиск\" title=\"Для поиска по сайту\" class=\"header__search header__item\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n    <section id=\"burger\" class=\"burger\">\r\n      <div class=\"burger__top\">\r\n        <ul class=\"burger__header\">\r\n          <button id=\"burger-close\" aria-label=\"Закрыть\" title=\"Закрыть\" class=\"icon burger__close\"></button>\r\n          <img class=\"burger__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Логотип компании\" />\r\n          <div class=\"grow-1\"></div>\r\n\r\n          <button title=\"Поиск\" aria-label=\"Поиск\" class=\"burger__search icon\"></button>\r\n        </ul>\r\n        <nav class=\"burger__nav\">\r\n          <ul class=\"burger__menu\">\r\n            <li class=\"burger__item\">\r\n              <a aria-label=\"Ремонт техники\" href=\"#\">Ремонт техники</a><span class=\"burger__item-before\"></span>\r\n            </li>\r\n            <li class=\"burger__item\">\r\n              <a aria-label=\"Услуги и сервисы\" href=\"#\">Услуги и сервисы</a><span class=\"burger__item-before\"></span>\r\n            </li>\r\n            <li class=\"burger__item\">\r\n              <a aria-label=\"Корпоративным клиентам\" href=\"#\">Корпоративным клиентам</a><span\r\n                class=\"burger__item-before\"></span>\r\n            </li>\r\n            <li class=\"burger__item\">\r\n              <a aria-label=\"Продавцам техники\" href=\"#\">Продавцам техники</a><span class=\"burger__item-before\"></span>\r\n            </li>\r\n            <li class=\"burger__item\">\r\n              <a aria-label=\"Партнерам\" href=\"#\">Партнерам</a><span class=\"burger__item-before\"></span>\r\n            </li>\r\n            <li class=\"burger__item\">\r\n              <a aria-label=\"Производителям\" href=\"#\">Производителям</a><span class=\"burger__item-before\"></span>\r\n            </li>\r\n            <li class=\"burger__item\">\r\n              <a aria-label=\"Наши сервисные центры\" href=\"#\">Наши сервисные центры</a><span\r\n                class=\"burger__item-before\"></span>\r\n            </li>\r\n            <li class=\"burger__item\">\r\n              <a aria-label=\"Контакты\" href=\"#\">Контакты</a><span class=\"burger__item-before\"></span>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n      <div class=\"burger__bottom\">\r\n        <div class=\"burger__icons\">\r\n          <button aria-label=\"\" title=\"Позвонить\" class=\"burger__icons-call icon\"></button>\r\n          <button aria-label=\"\" title=\"Написать\" class=\"burger__icons-message icon\"></button>\r\n          <button aria-label=\"\" title=\"Профиль\" class=\"burger__icons-profile icon\"></button>\r\n        </div>\r\n        <a href=\"mailto:mail@cps.com\" class=\"burger__mail\">mail@cps.com</a>\r\n        <a href=\"tel:8 800 890 8900\" class=\"burger__number\">8 800 890 8900</a>\r\n        <div class=\"burger__langs\">\r\n          <button aria-label=\"Переключить язык\" class=\"menu__lang ru\">RU</button>\r\n          <button aria-label=\"Переключить язык\" class=\"menu__lang en\">EN</button>\r\n          <button aria-label=\"Переключить язык\" class=\"menu__lang ch\">CH</button>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div>\r\n      <main>\r\n        <section class=\"about\">\r\n          <section class=\"about__title-box\">\r\n            <div class=\"about__icon\"></div>\r\n            <div class=\"container about__container\">\r\n              <div class=\"about__visible\">\r\n                <h1 class=\"about__title-text\">Услуги и сервисы</h1>\r\n              </div>\r\n              <div class=\"about__hidden\">\r\n                <button aria-label=\"Ремонт\" class=\"about__icons\">\r\n                  <p class=\"about__option-text\">Оставить заявку</p>\r\n                  <div class=\"about__option-img\"></div>\r\n                </button>\r\n                <button aria-label=\"Лупа\" class=\"about__icons\">\r\n                  <p class=\"about__search-text\">Статус ремонта</p>\r\n                  <div class=\"about__search-img\"></div>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </section>\r\n          <nav class=\"about__menu menu\">\r\n            <div class=\"container\">\r\n              <ul class=\"menu__wrapper\">\r\n                <li class=\"menu__item\">\r\n                  <a aria-label=\"Ремонтируемые бренды\" class=\"menu__item-content\" href=\"#asd\">\r\n                    Ремонтируемые бренды\r\n                  </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                  <a aria-label=\"Ремонтируемые устройства\" class=\"menu__item-content\" href=\"#\">\r\n                    Ремонтируемые устройства\r\n                  </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                  <a aria-label=\"Цены на услуги\" class=\"menu__item-content\" href=\"#\">Цены на услуги</a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                  <a aria-label=\"Адреса сервисных центров\" class=\"menu__item-content\" href=\"#\">\r\n                    Адреса сервисных центров\r\n                  </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                  <a aria-label=\"Специальные цены\" class=\"menu__item-content\" href=\"#\"> Специальные цены </a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                  <a aria-label=\"Отзывы\" class=\"menu__item-content\" href=\"#\">Отзывы</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </nav>\r\n          <section class=\"about__content descr\">\r\n            <div class=\"container\">\r\n              <div class=\"descr__wrapper\">\r\n                <div class=\"descr__left\">\r\n                  <p id=\"descr-text\" class=\"descr__text\">\r\n                    Мы являемся авторизованным сервисным центром по ремонту\r\n                    техники Dell. Только у нас вы можете отремонтировать свой\r\n                    ноутбук Dell с оaициальной гарантией производителя. <br />\r\n                    <br />\r\n  \r\n                    Мы успешно работаем с 1992 года и заслужили репутацию\r\n                    надежного партнера, что подтверждает большое количество\r\n                    постоянных клиентов. Мы гордимся тем, что к нам обращаются по\r\n                    рекомендациям и, в свою очередь, советуют нас родным и\r\n                    близким.\r\n                    <br /><br />\r\n                    Мы успешно работаем с 1992 года и заслужили репутацию\r\n                    надежного партнера, что подтверждает большое количество\r\n                    постоянных клиентов. Мы гордимся тем, что к нам обращаются по\r\n                    рекомендациям и, в свою очередь, советуют нас родным и\r\n                    близким.\r\n  \r\n                  </p>\r\n                  <button id=\"descr-more\" class=\"descr__more more\">\r\n                    <div id=\"more-img-1\" class=\"more__img\"></div>\r\n                    <div id=\"more-text-1\" class=\"more__text\">Читать далее</div>\r\n                  </button>\r\n                </div>\r\n                <div class=\"descr__right\"></div>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        </section>\r\n  \r\n        <section class=\"brand\">\r\n          <div class=\"brand__gradient gradient-1\">\r\n            <h2 class=\"container brand__title\">Ремонт техники различных брендов</h2>\r\n          </div>\r\n          <div class=\"container\">\r\n            <div class=\"swiper mySwiper\">\r\n              <ul id=\"brand-swiper\" aria-label=\"Ремонт техники различных брендов\" class=\"swiper-wrapper\">\r\n                <div class=\"swiper-slide\">\r\n                  <div class=\"swiper-icon\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn\" aria-label=\"Samsung\" title=\"Samsung\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide\">\r\n                  <div class=\"swiper-icon\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn\" aria-label=\"ViewSonic\" title=\"ViewSonic\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide\">\r\n                  <div class=\"swiper-icon\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" />\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn\" aria-label=\"Apple\" title=\"Apple\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide\">\r\n                  <div class=\"swiper-icon\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" />\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn\" aria-label=\"Sony\" title=\"Sony\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide\">\r\n                  <div class=\"swiper-icon\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" />\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn\" aria-label=\"acer\" title=\"acer\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide\">\r\n                  <div class=\"swiper-icon\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\" />\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn\" aria-label=\"Hp\" title=\"Hp\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide\">\r\n                  <div class=\"swiper-icon\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn\" aria-label=\"Lenovo\" title=\"Lenovo\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide\">\r\n                  <div class=\"swiper-icon\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" />\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn\" aria-label=\"Apple\" title=\"Apple\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide\">\r\n                  <div class=\"swiper-icon\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn\" aria-label=\"Samsung\" title=\"Samsung\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide\">\r\n                  <div class=\"swiper-icon\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" />\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn\" aria-label=\"ViewSonic\" title=\"ViewSonic\"></a>\r\n                </div>\r\n              </ul>\r\n              <div class=\"swiper-pagination\"></div>\r\n            </div>\r\n            <button aria-label=\"Показать все\" id=\"brand-more\" class=\"more brand__more\">\r\n              <div id=\"more-img-2\" class=\"more__img\"></div>\r\n              <span id=\"more-text-2\">Показать все</span>\r\n            </button>\r\n          </div>\r\n  \r\n        </section>\r\n        <section class=\"type\">\r\n          <div class=\"type__gradient gradient-1\">\r\n            <h2 class=\"container type__title\">Ремонт различных видов техники</h2>\r\n          </div>\r\n          <div class=\"container\">\r\n            <div class=\"swiper mySwiper\">\r\n              <ul id=\"type-swiper\" aria-label=\"Ремонт техники различных брендов\" class=\"swiper-wrapper\">\r\n                <div class=\"swiper-slide type__slide\">\r\n                  <div class=\"swiper-text type__slide-text\">\r\n                    Ремонт ноутбуков\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn type__slide-btn\" aria-label=\"Samsung\" title=\"Samsung\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide type__slide\">\r\n                  <div class=\"swiper-text type__slide-text\">\r\n                    Ремонт ноутбуков\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn type__slide-btn\" aria-label=\"Samsung\" title=\"Samsung\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide type__slide\">\r\n                  <div class=\"swiper-text type__slide-text\">\r\n                    Ремонт ноутбуков\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn type__slide-btn\" aria-label=\"Samsung\" title=\"Samsung\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide type__slide\">\r\n                  <div class=\"swiper-text type__slide-text\">\r\n                    Ремонт ноутбуков\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn type__slide-btn\" aria-label=\"Samsung\" title=\"Samsung\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide type__slide\">\r\n                  <div class=\"swiper-text type__slide-text\">\r\n                    Ремонт ноутбуков\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn type__slide-btn\" aria-label=\"Samsung\" title=\"Samsung\"></a>\r\n                </div>\r\n                <div class=\"swiper-slide type__slide\">\r\n                  <div class=\"swiper-text type__slide-text\">\r\n                    Ремонт ноутбуков\r\n                  </div>\r\n                  <a href=\"#\" class=\"swiper-btn type__slide-btn\" aria-label=\"Samsung\" title=\"Samsung\"></a>\r\n                </div>\r\n              </ul>\r\n              <div class=\"swiper-pagination\"></div>\r\n            </div>\r\n            <button aria-label=\"Показать все\" id=\"type-more\" class=\"more type__more\">\r\n              <div id=\"more-img-3\" class=\"more__img\"></div>\r\n              <span id=\"more-text-3\">Показать все</span>\r\n            </button>\r\n          </div>\r\n  \r\n        </section>\r\n        <section class=\"price\">\r\n          <div class=\"price__gradient gradient-1\">\r\n            <h2 class=\"container price__title\">цены на услуги</h2>\r\n          </div>\r\n          <div class=\"container\">\r\n            <div class=\"price__titles\">\r\n              <p>Ремонтные услуги</p>\r\n              <p>Цена</p>\r\n              <p>Срок</p>\r\n            </div>\r\n            <div class=\"mySwiper swiper price__swiper\">\r\n              <ul aria-label=\"Цены на услуги\" class=\"price__list swiper-wrapper\">\r\n                <li class=\"price__item  swiper-slide\">\r\n                  <div class=\"price__item--name--wrapper\">\r\n                    <p class=\"mobile\">Ремонтные услуги</p>\r\n                    <p class=\"price__item-name\">Диагностика</p>\r\n                  </div>\r\n                  <div class=\"price__item--price--wrapper\">\r\n                    <p class=\"mobile\">Цена</p>\r\n                    <p class=\"price__item-price\">Бесплатно</p>\r\n                  </div>\r\n                  <div class=\"price__item--time--row\">\r\n                    <div class=\"price__item--time--wrapper\">\r\n                      <p class=\"mobile\">Срок</p>\r\n                      <p class=\"price__item-time\">30 мин</p>\r\n                    </div>\r\n                    <a href=\"#\" title=\"\" aria-label=\"\" class=\"button\">\r\n                      Заказать\r\n                      <span></span>\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n                <li class=\"price__item  swiper-slide\">\r\n                  <div class=\"price__item--name--wrapper\">\r\n                    <p class=\"mobile\">Ремонтные услуги</p>\r\n                    <p class=\"price__item-name\">Замена дисплея</p>\r\n                  </div>\r\n                  <div class=\"price__item--price--wrapper\">\r\n                    <p class=\"mobile\">Цена</p>\r\n                    <p class=\"price__item-price\">1 000 &#8381;</p>\r\n                  </div>\r\n                  <div class=\"price__item--time--row\">\r\n                    <div class=\"price__item--time--wrapper\">\r\n                      <p class=\"mobile\">Срок</p>\r\n                      <p class=\"price__item-time\">30-120 мин</p>\r\n                    </div>\r\n                    <a href=\"#\" title=\"\" aria-label=\"\" class=\"button\">\r\n                      Заказать\r\n                      <span></span>\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n                <li class=\"price__item  swiper-slide\">\r\n                  <div class=\"price__item--name--wrapper\">\r\n                    <p class=\"mobile\">Ремонтные услуги</p>\r\n                    <p class=\"price__item-name\">Замена полифонического динамика</p>\r\n                  </div>\r\n                  <div class=\"price__item--price--wrapper\">\r\n                    <p class=\"mobile\">Цена</p>\r\n                    <p class=\"price__item-price\">1 000 &#8381;</p>\r\n                  </div>\r\n                  <div class=\"price__item--time--row\">\r\n                    <div class=\"price__item--time--wrapper\">\r\n                      <p class=\"mobile\">Срок</p>\r\n                      <p class=\"price__item-time\">30-120 мин</p>\r\n                    </div>\r\n                    <a href=\"#\" title=\"\" aria-label=\"\" class=\"button\">\r\n                      Заказать\r\n                      <span></span>\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n                <li class=\"price__item  swiper-slide\">\r\n                  <div class=\"price__item--name--wrapper\">\r\n                    <p class=\"mobile\">Ремонтные услуги</p>\r\n                    <p class=\"price__item-name\">Тестирование с выдачей технического заключения</p>\r\n                  </div>\r\n                  <div class=\"price__item--price--wrapper\">\r\n                    <p class=\"mobile\">Цена</p>\r\n                    <p class=\"price__item-price\">1 000 &#8381;</p>\r\n                  </div>\r\n                  <div class=\"price__item--time--row\">\r\n                    <div class=\"price__item--time--wrapper\">\r\n                      <p class=\"mobile\">Срок</p>\r\n                      <p class=\"price__item-time\">30-120 мин</p>\r\n                    </div>\r\n                    <a href=\"#\" title=\"\" aria-label=\"\" class=\"button\">\r\n                      Заказать\r\n                      <span></span>\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n                <li class=\"price__item  swiper-slide\">\r\n                  <div class=\"price__item--name--wrapper\">\r\n                    <p class=\"mobile\">Ремонтные услуги</p>\r\n                    <p class=\"price__item-name\">Замена программного обеспечения</p>\r\n                  </div>\r\n                  <div class=\"price__item--price--wrapper\">\r\n                    <p class=\"mobile\">Цена</p>\r\n                    <p class=\"price__item-price\">1 000 &#8381;</p>\r\n                  </div>\r\n                  <div class=\"price__item--time--row\">\r\n                    <div class=\"price__item--time--wrapper\">\r\n                      <p class=\"mobile\">Срок</p>\r\n                      <p class=\"price__item-time\">30-120 мин</p>\r\n                    </div>\r\n                    <a href=\"#\" title=\"\" aria-label=\"\" class=\"button\">\r\n                      Заказать\r\n                      <span></span>\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n              <div class=\"swiper-pagination\"></div>\r\n            </div>\r\n             <div class=\"price__text\">Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку. <br><br></div>\r\n             <a href=\"#\" class=\"price__link\">Получить коммерческое предложение <span class=\"price__arrow-right\"></span></a>\r\n          </div>\r\n        </section>\r\n        \r\n      </main>\r\n      <div id=\"overlay\" class=\"overlay\"></div>\r\n      <footer class=\"footer\">\r\n        <div class=\"container\">\r\n          <div class=\"footer__row\">\r\n            <div class=\"footer__start\">© 2019 CPS <br>\r\n              Разработано командой Apesong </div>\r\n            <div class=\"footer__center\">Политика конфиденциальности</div>\r\n            <div class=\"footer__end\">Информация, размещенная на данной странице, не является публичной офертой</div>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n  \r\n  <script src=\"https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js\"></script>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./images/Bitmap (1).svg":
/*!*******************************!*\
  !*** ./images/Bitmap (1).svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bitmap (1).f825ac6fa9b7a9fe0542.svg";

/***/ }),

/***/ "./images/Bitmap (2).svg":
/*!*******************************!*\
  !*** ./images/Bitmap (2).svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bitmap (2).d1f74290acd27aad33b6.svg";

/***/ }),

/***/ "./images/Bitmap (3).svg":
/*!*******************************!*\
  !*** ./images/Bitmap (3).svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bitmap (3).2eb062489daa0709e327.svg";

/***/ }),

/***/ "./images/Bitmap (4).svg":
/*!*******************************!*\
  !*** ./images/Bitmap (4).svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bitmap (4).b0b543194fba233d1afb.svg";

/***/ }),

/***/ "./images/Bitmap (5).svg":
/*!*******************************!*\
  !*** ./images/Bitmap (5).svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bitmap (5).c6c16ba8f98c4e722378.svg";

/***/ }),

/***/ "./images/Bitmap (6).svg":
/*!*******************************!*\
  !*** ./images/Bitmap (6).svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bitmap (6).f5ac31cd79252eb37a6a.svg";

/***/ }),

/***/ "./images/Bitmap.svg":
/*!***************************!*\
  !*** ./images/Bitmap.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bitmap.3566a037d14328dd48f1.svg";

/***/ }),

/***/ "./images/Group.svg":
/*!**************************!*\
  !*** ./images/Group.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Group.15afe5e5228077483b9f.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-b0975e"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;