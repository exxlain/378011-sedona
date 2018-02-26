'use strict';
(function() {
  var link = document.querySelector('.search-modal');
  var popup = document.querySelector('.search-hotels');
  var date = popup.querySelector('[name=date]');
  var date2 = popup.querySelector('[name=date2]');
  var numberAdult = popup.querySelector('[name=number-adult]');
  var numberKid = popup.querySelector('[name=number-kid]');
  var adultMinus = popup.querySelector('.adult-minus');
  var adultPlus = popup.querySelector('.adult-plus');
  var kidsMinus = popup.querySelector('.kids-minus');
  var kidsPlus = popup.querySelector('.kids-plus');

  /*управление закрытием-открытием попапа*/
  popup.classList.add('modal-close');

  link.addEventListener('tap', function(evt) {
    evt.preventDefault();
    popup.classList.toggle('modal-show');
    popup.classList.toggle('modal-close');
    date.focus()
  });

  window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
      if(popup.classList.contains('modal-show')) {
        popup.classList.remove('modal-show');
        popup.classList.add('modal-close');
      }
    }
  });

  /* обработчик отправки формы*/
  popup.addEventListener('submit', function(evt) {
    window.backend.save(new FormData(noticeForm), function() {
      popup.reset();
    });
    evt.preventDefault();
  });

  /*управление плюсом и минусом*/
  var addNumber = function(type) {
    if(type.value < 100) {
      type.value = +type.value + 1;
    } else {
      type.value = 100;
    }
  };

  var removeNumber = function(type) {
    if(type.value > 1) {
      type.value = +type.value - 1;
    } else {
      type.value = 0;
    }
  };

  adultMinus.addEventListener('tap', function() {
    removeNumber(numberAdult);
  });
  adultPlus.addEventListener('tap', function() {
    addNumber(numberAdult);
  });
  kidsMinus.addEventListener('tap', function() {
    removeNumber(numberKid);
  });
  kidsPlus.addEventListener('tap', function() {
    addNumber(numberKid);
  });

  /* Валидация полей формы*/
  /* устанавливает цвет рамки*/
  var setErrorColor = function(element) {
    element.style.outline = '2px solid red';
  };
  /* убирает ошибку*/
  var resetError = function(element) {
    element.setCustomValidity('');
    element.style.outline = '';
  };
  /* функция проверки валидности поля*/
  var validityCheck = function(inputName, validityType, message) {
    if(inputName.validity[validityType]) {
      inputName.setCustomValidity(message);
      setErrorColor(inputName);
    }
  };
  /* проверка поля дата*/
  date.addEventListener('invalid', function() {
    resetError(date);
    validityCheck(date, 'patternMismatch', 'введите дату в формате ДД/ММ/ГГГГ');
    validityCheck(date, 'valueMissing', 'Обязательное поле');
  });
  /* проверка поля дата2*/
  date2.addEventListener('invalid', function() {
    resetError(date2);
    validityCheck(date2, 'patternMismatch', 'введите дату в формате ДД/ММ/ГГГГ');
    validityCheck(date2, 'valueMissing', 'Обязательное поле');
  });
  /* проверка поля взрослые*/
  numberAdult.addEventListener('invalid', function() {
    resetError(numberAdult);
    validityCheck(numberAdult, 'rangeUnderflow', 'Укажите минимальное количество  - 1');
    validityCheck(numberAdult, 'rangeOverflow', 'Максимальное количество 100 взрослых');
    validityCheck(numberAdult, 'valueMissing', 'Обязательное поле');
  });
  /* проверка поля дети*/
  numberKid.addEventListener('invalid', function() {
    resetError(numberKid);
    validityCheck(numberKid, 'rangeUnderflow', 'Укажите минимальное количество - 0');
    validityCheck(numberKid, 'rangeOverflow', 'Максимальное количество 100 детей');
    validityCheck(numberKid, 'valueMissing', 'Обязательное поле');
  });

})();
