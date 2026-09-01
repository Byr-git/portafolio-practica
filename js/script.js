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

// Menú hamburguesa
const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("header nav");
const enlacesNav = document.querySelectorAll("header nav a");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("menu-visible");
    const menuAbierto = nav.classList.contains("menu-visible");
    menuToggle.setAttribute("aria-expanded", menuAbierto);

});

enlacesNav.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        nav.classList.remove("menu-visible");
        menuToggle.setAttribute("aria-expanded", "false");
    });

});

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", () => {
    if (nombre.value.trim().length < 3) {
        nombre.setCustomValidity("El nombre debe tener al menos 3 caracteres.");
    } else {
        nombre.setCustomValidity("");
    }
});

email.addEventListener("input", () => {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(email.value.trim())) {
        email.setCustomValidity("Introduce un correo electrónico válido.");
    } else {
        email.setCustomValidity("");
    }
});

mensaje.addEventListener("input", () => {
    if (mensaje.value.trim().length < 10) {
        mensaje.setCustomValidity("El mensaje debe tener al menos 10 caracteres.");
    } else {
        mensaje.setCustomValidity("");
    }
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }
    alert("¡Formulario enviado correctamente!");
    formulario.reset();
});