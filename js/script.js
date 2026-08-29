const habilidades = document.querySelector("#habilidades");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            habilidades.classList.add("habilidades-visible");
        } else {
            habilidades.classList.remove("habilidades-visible");
        }
    });
}, {
    threshold: 0.4
});

observer.observe(habilidades);