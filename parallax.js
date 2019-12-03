const sections = document.querySelectorAll("section");

const addMovement = function () {
    const topViewport = window.pageYOffset;
    const midViewport = topViewport + (window.innerHeight / 2);

    // find the middle of each section

    sections.forEach((section, index) => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight / 2)


        // how far away is the section from the visible area of the page
        const distanceToSection = midViewport - midSection

        // pick the tags to parallax
        const image = section.querySelector("img")
        const contentTag = section.querySelector("div")

        // weight down distance, use let to change the var later...
        let rotation = distanceToSection / 100;
        let contentDist = -1 * distanceToSection / 2;

        // for all even sections, rotate other way
        // is index divisable by two
        // is the index's remainder zero?
        // the modulo operator
        if (index % 2 == 1) {
            rotation = rotation * -1
        }

        //parallax

        image.style.transform = `rotate(${rotation}deg)`;
        contentTag.style.top = `${contentDist}px`;
        contentTag.style.transform = `rotate(${(-1 * rotation)})`
    })


};

addMovement();

document.addEventListener("scroll", function () {
    addMovement();
});

window.addEventListener("resize", function () {
    addMovement();
});