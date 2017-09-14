var link = document.querySelector(".search-modal");
var popup = document.querySelector(".search-hotels");
var date = popup.querySelector("[name=date]");
var date2 = popup.querySelector("[name=date2]");


popup.classList.add("modal-close");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    popup.classList.toggle("modal-close");
    login.focus();
});

popup.addEventListener("submit", function(evt) {
    if (!date.value || !date2.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        console.log("Нужно ввести дату заезда и дату выезда");
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.add("modal-close");
        }
    }
});