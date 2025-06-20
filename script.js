function getRandomColor() {
    const colors = ["green", "blue", "red"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeH5Colors(event) {
    event.target.style.color = getRandomColor();
}

// Selecciona todos los <h5> y agrega el evento de clic
document.addEventListener("DOMContentLoaded", () => {
    const h5s = document.querySelectorAll("h5");
    h5s.forEach(h5 => {
        h5.style.transition = "color 0.4s ease";
        h5.addEventListener("click", changeH5Colors);
    });
});

