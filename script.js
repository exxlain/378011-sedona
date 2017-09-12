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


/*
var iframeMap = <iframe> src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52385.180521669856!2d-111.83024387662934!3d34.8543733563858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0ZbQt9C-0L3QsCA4NjMzNiwg0KHQv9C-0LvRg9GH0LXQvdGWINCo0YLQsNGC0Lgg0JDQvNC10YDQuNC60Lg!5e0!3m2!1suk!2sua!4v1505219318423" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>;
var map = document.querySelector('.map-wrapper');
map.innerHtml = iframeMap;
*/

