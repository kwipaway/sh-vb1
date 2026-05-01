document.getElementById("pop-up").addEventListener("click", function(event) {
    event.preventDefault();
  const shouldNavigate = confirm("You are leaving Main page. This is an external site. Continue?");
  if (shouldNavigate) {
    window.location.href = event.target.href;
  }
});

const topBtn = document.getElementById("topBtn");

// Show button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll to top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}