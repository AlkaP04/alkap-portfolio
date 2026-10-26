// SCROLL REVEAL

const items = document.querySelectorAll(
    ".about-grid, .projects-heading, .project-card"
);

items.forEach(item => {
    item.classList.add("reveal");
});

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);

items.forEach(item => {
    observer.observe(item);
});


// PHOTO MOVEMENT

const photo = document.querySelector(".photo-frame");

document.addEventListener("mousemove", function(e) {

    if (window.innerWidth < 800) return;

    const x =
        (e.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (e.clientY / window.innerHeight - 0.5) * 10;

    photo.style.transform =
        `translate(${x}px, ${y}px) rotate(3deg)`;

});


// PROJECT MOCKUP MOVEMENT

document.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener("mousemove", function(e) {

        if (window.innerWidth < 800) return;

        const image = card.querySelector(
            ".project-image img, .small-mockup img"
        );

        if (!image) return;

        const box = card.getBoundingClientRect();

        const x =
            ((e.clientX - box.left) / box.width - 0.5) * 10;

        const y =
            ((e.clientY - box.top) / box.height - 0.5) * 10;

        image.style.transform =
            `translate(${x}px, ${y}px) scale(1.03)`;

    });


    card.addEventListener("mouseleave", function() {

        const image = card.querySelector(
            ".project-image img, .small-mockup img"
        );

        if (image) {
            image.style.transform =
                "translate(0,0) scale(1)";
        }

    });

});