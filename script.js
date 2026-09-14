const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const themeButton = document.getElementById("themeButton");
const topButton = document.getElementById("topButton");
const contactForm = document.getElementById("contactForm");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀️";
    }
});

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you for your message! I will get back to you soon.");

    contactForm.reset();

});