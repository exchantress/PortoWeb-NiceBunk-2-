document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    body.style.opacity = 0;
    body.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        body.style.opacity = 1;
    }, 200);
});


window.addEventListener("scroll", function () {
    const slideElements = document.querySelectorAll(".slide-in");

    slideElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("slide-in-visible");
        }
    });
});
