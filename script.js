document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.getElementById('carrusel');
    const imagenes = document.querySelectorAll('.carrusel img');
    const totalImagenes = imagenes.length;
    const velocidad = 1;

    carrusel.innerHTML += carrusel.innerHTML;

    let posicionActual = 0;

    setInterval(() => {
        posicionActual -= velocidad;

        if (posicionActual <= -carrusel.clientWidth / 2) {
            posicionActual = 0;
        }

        carrusel.style.transform = `translateX(${posicionActual}px)`;
    }, 20);

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
