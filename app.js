var toggle_btn;
var big_wrapper;
var hamburger_menu;
var navLinks;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
  navLinks = document.querySelectorAll('.links a');
}

const main = document.querySelector("main");
declare();

let dark = false;

function toggleAnimation() {
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);
  
  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      big_wrapper.classList.remove("active");
    });
  });
}

events();

// Smooth Scroll to Top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

toTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".clickable-img").forEach(img => {
    img.onclick = function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src; // It targets the specific image you click
        captionText.innerHTML = this.alt;
    }
});