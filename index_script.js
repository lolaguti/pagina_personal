function abrirProyecto(numero) {
    const popup = document.getElementById(`popup_proyecto${numero}`);

    if (!popup) return;

    popup.style.display = "flex";
    popup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function cerrarProyecto(numero) {
    const popup = document.getElementById(`popup_proyecto${numero}`);

    if (!popup) return;

    popup.style.display = "none";
    popup.setAttribute("aria-hidden", "true");

    // Solo permitir desplazamiento si no queda ningún popup abierto
    const hayPopupAbierto = document.querySelector(
        '.popup[aria-hidden="false"]'
    );

    if (!hayPopupAbierto) {
        document.body.style.overflow = "";
    }
}

// Cerrar al pulsar fuera del contenido de cualquier popup
document.querySelectorAll(".popup").forEach(function(popup) {
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            const numero = popup.id.replace("popup_proyecto", "");
            cerrarProyecto(numero);
        }
    });
});

// Cerrar con Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.querySelectorAll(
            '.popup[aria-hidden="false"]'
        ).forEach(function(popup) {
            const numero = popup.id.replace("popup_proyecto", "");
            cerrarProyecto(numero);
        });
    }
});


// Cambiar idioma
function cambiarIdioma(idioma) {
    if (idioma !== "es" && idioma !== "en") return;

    document.getElementById("español").hidden = idioma !== "es";
    document.getElementById("ingles").hidden = idioma !== "en";

    document.documentElement.lang = idioma;

    document.querySelectorAll("#botones_idioma button").forEach(boton => {
        boton.classList.toggle(
            "activo",
            boton.textContent.trim().toLowerCase() === idioma
        );
    });
}

function abrirProyectoEn(numero) {
    const popup = document.getElementById(`en_popup_proyecto${numero}`);

    if (!popup) return;

    popup.style.display = "flex";
    popup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function cerrarProyectoEn(numero) {
    const popup = document.getElementById(`en_popup_proyecto${numero}`);

    if (!popup) return;

    popup.style.display = "none";
    popup.setAttribute("aria-hidden", "true");

    // Solo permitir desplazamiento si no queda ningún popup abierto
    const hayPopupAbierto = document.querySelector(
        '.popup[aria-hidden="false"]'
    );

    if (!hayPopupAbierto) {
        document.body.style.overflow = "";
    }
}

// Cerrar al pulsar fuera del contenido de cualquier popup
document.querySelectorAll(".popup").forEach(function(popup) {
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            const numero = popup.id.replace("en_popup_proyecto", "");
            cerrarProyectoEn(numero);
        }
    });
});

// Cerrar con Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.querySelectorAll(
            '.popup[aria-hidden="false"]'
        ).forEach(function(popup) {
            const numero = popup.id.replace("en_popup_proyecto", "");
            cerrarProyectoEn(numero);
        });
    }
});


