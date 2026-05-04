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
