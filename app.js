var toggle_btn;
const $html = document.querySelector('html')
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

declare();
  
function events() {
  toggle_btn.addEventListener("click", () => {
    $html.classList.toggle(('dark-mode')) /* changes the entire HTML to the dark-mode class on CSS */
  });
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();