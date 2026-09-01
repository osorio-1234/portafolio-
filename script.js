/*    MENU HAMBURGUESA*/

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/*    CERRAR MENU AL PRESIONAR UN ENLACE */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* BARRAS*/
const progressBars = document.querySelectorAll(".progress-bar");

function mostrarBarras() {

    progressBars.forEach(bar => {

        const progreso = bar.dataset.progress;

        bar.style.width = progreso + "%";

    });

}


/* Ejecutar cuando cargue la pagina */

window.addEventListener("load", mostrarBarras);

/* Crear la ventana */

const modal = document.createElement("div");

modal.classList.add("modal");

modal.innerHTML = `
    <div class="modal-content">

        <button class="close-modal">&times;</button>

        <h2 id="modal-title"></h2>

        <p id="modal-text"></p>

        <button class="btn" id="modal-button">
            Cerrar
        </button>

    </div>
`;

document.body.appendChild(modal);


/* Elementos de la ventana */

const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

const closeModal = document.querySelector(".close-modal");
const modalButton = document.getElementById("modal-button");


/* Botones de proyectos */

const projectButtons = document.querySelectorAll(".project-btn");


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".project-card");

        const title = card.querySelector("h3").textContent;

        const description = card.querySelector("p").textContent;


        modalTitle.textContent = title;

        modalText.textContent =
            description +
            " Este proyecto forma parte de mi portafolio personal.";


        modal.classList.add("active");

    });

});


/* Cerrar ventana */

function cerrarModal() {

    modal.classList.remove("active");

}


closeModal.addEventListener("click", cerrarModal);

modalButton.addEventListener("click", cerrarModal);


/* Cerrar si se presiona fuera */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        cerrarModal();

    }

});


/*    FORMULARIO  */
const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const formSuccess = document.getElementById("form-success");


form.addEventListener("submit", (event) => {

    event.preventDefault();


    let valido = true;


    /* Nombre */

    if (nameInput.value.trim().length < 3) {

        mostrarError(
            nameInput,
            "Escribe un nombre válido."
        );

        valido = false;

    } else {

        limpiarError(nameInput);

    }


    /* Correo */

    if (!emailInput.value.includes("@")) {

        mostrarError(
            emailInput,
            "Escribe un correo válido."
        );

        valido = false;

    } else {

        limpiarError(emailInput);

    }


    /* Mensaje */

    if (messageInput.value.trim().length < 10) {

        mostrarError(
            messageInput,
            "El mensaje debe tener mínimo 10 caracteres."
        );

        valido = false;

    } else {

        limpiarError(messageInput);

    }


    /* Si todo esta correcto */

    if (valido) {

        formSuccess.textContent =
            "¡Mensaje enviado correctamente!";

        form.reset();

    }

});


/* error */

function mostrarError(input, mensaje) {

    const grupo = input.parentElement;

    const error =
        grupo.querySelector(".error-message");

    error.textContent = mensaje;

}


/* Limpiar error */

function limpiarError(input) {

    const grupo = input.parentElement;

    const error =
        grupo.querySelector(".error-message");

    error.textContent = "";

}


/*     AÑO */ 
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
