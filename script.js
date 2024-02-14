// script.js
document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.getElementById('carrusel');
    const carruselInner = document.querySelector('.carrusel-inner');
    const imagenes = document.querySelectorAll('.carrusel img');
    const velocidad = 1;

    carruselInner.innerHTML += carruselInner.innerHTML;

    let posicionActual = 0;

    function actualizarCarrusel() {
        posicionActual -= velocidad;

        if (posicionActual <= -carruselInner.clientWidth / 2) {
            // Al llegar al final, retrocedemos al principio para que se repitan las imágenes
            posicionActual = 0;
        }

        carruselInner.style.transform = `translateX(${posicionActual}px)`;
        requestAnimationFrame(actualizarCarrusel);
    }

    function iniciarCarrusel() {
        // Iniciamos el bucle de animación
        requestAnimationFrame(actualizarCarrusel);
    }

    iniciarCarrusel();

    const pregunta = document.querySelector('.pregunta');

    if (pregunta) {
        const texto = pregunta.innerText;
        pregunta.innerHTML = '';

        for (let i = 0; i < texto.length; i++) {
            setTimeout(() => {
                pregunta.innerHTML += texto[i];
            }, i * 100);
        }

        setTimeout(() => {
            Swal.fire({
                title: '¿Quieres ser mi Valentín?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: '¡Sí!',
                denyButtonText: 'No, gracias',
            }).then((result) => {
                if (result.isConfirmed) {
                    responder(true);
                } else if (result.isDenied) {
                    responder(false);
                }
            });
        }, texto.length * 100);
    }

    function responder(aceptar) {
        if (aceptar) {
            Swal.fire({
                title: '¡Felicidades!',
                text: '¡Eres mi Valentín! 🥳',
                icon: 'success',
                confirmButtonText: '¡Gracias!',
            });
        } else {
            Swal.fire({
                title: 'Oh, entiendo.',
                text: '¡Gracias de todos modos! 😔',
                icon: 'info',
                confirmButtonText: '¡Entendido!',
            });
        }
    }
});
