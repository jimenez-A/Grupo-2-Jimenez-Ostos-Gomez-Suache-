// Función para animar al hacer scroll
const mostrarTarjetas = () => {
    const tarjetas = document.querySelectorAll('.project-card');
    tarjetas.forEach(t => {
        const distancia = t.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight / 1.3;
        if (distancia < alturaPantalla) {
            t.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', mostrarTarjetas);

// Ejecutar una vez al cargar por si ya están visibles
mostrarTarjetas();




