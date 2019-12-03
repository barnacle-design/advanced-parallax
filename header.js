const headerTag = document.querySelector("header");

// when we scroll page, at a point toggle a class

document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset;

    if (pixels > 80) {
        headerTag.classList.add("scrolled");
    } else {
        headerTag.classList.remove("scrolled");
    }
})