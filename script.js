var link = document.querySelector(".search-modal");
 var popup = document.querySelector(".search-hotels");
 

var login = popup.querySelector("[name=date]");
  var password = popup.querySelector("[name=date2]");


  popup.classList.add("modal-close");

  link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("modal-close");
   popup.classList.add("modal-show");
   login.focus();
  });

  popup.addEventListener("submit", function (evt) {
       if (!date.value || !date2.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести дату заезда и дату выезда");
           
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) { 
          popup.classList.remove("modal-show");
          popup.classList.add("modal-close");
      }
    }
  });
  var mapLink = document.querySelector(".map-wrapper");

  var mapPopup = document.querySelector(".modal-map");
/*  var mapClose = mapPopup.querySelector(".modal-close");*/

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

 /* mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });*/


  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });