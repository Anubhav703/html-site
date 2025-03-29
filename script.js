document.addEventListener("DOMContentLoaded", function () {
    // Fake window close button interaction
    const closeButton = document.querySelector(".title-bar-controls button[aria-label='Close']");
    closeButton.addEventListener("click", function () {
        const windowElement = document.querySelector(".window");
        windowElement.style.display = "none";
    });

    // Fake alert pop-up like Windows 95
    setTimeout(function () {
        alert("Welcome to the UIT RGPV Vintage 90s Website!");
    }, 1000);

    // Marquee speed control (Hover to pause, leave to resume)
    const marquees = document.querySelectorAll("marquee");
    marquees.forEach(marquee => {
        marquee.addEventListener("mouseover", function () {
            marquee.stop();
        });
        marquee.addEventListener("mouseout", function () {
            marquee.start();
        });
    });
});
