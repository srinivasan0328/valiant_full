// Get the button
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Show button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

// Scroll to top when clicked
scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
