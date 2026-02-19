document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('boton');
    const mensaje = document.getElementById('mensaje');
    
    let contador = 0;
    
    boton.addEventListener('click', function() {
        contador++;
        mensaje.textContent = `¡Hiciste clic ${contador} veces!`;
        
        // Cambiar color aleatorio
        const colores = ['#d81b60 ', '#8e24aa', '#1565c0', '#26a69a'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.background = colorAleatorio;
    });
});

