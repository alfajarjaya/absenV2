function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("time").innerText = timeString;
}

setInterval(updateClock, 1000);

updateClock();

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".n-2");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
