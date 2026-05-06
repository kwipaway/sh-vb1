const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("side-menu");
  const overlay = document.getElementById("menu-overlay");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("open");
      overlay.classList.toggle("visible");
    });

    overlay.addEventListener("click", () => {
      menu.classList.remove("open");
      overlay.classList.remove("visible");
    });
  }
});