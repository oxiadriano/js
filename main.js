

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@0123456789';
const container = document.createElement('div');


container.style.position = 'relative';
container.style.height = '100vh';
container.style.overflow = 'hidden';
document.body.appendChild(container);


function criarLetra() {
    const letraElemento = document.createElement('span');
    letraElemento.textContent = alfabeto[Math.floor(Math.random() * alfabeto.length)];
    
    
    letraElemento.style.position = 'absolute';
    letraElemento.style.fontSize = `${Math.random() * 50 + 20}px`;
    letraElemento.style.left = `${Math.random() * 100}vw`;
    letraElemento.style.top = `${Math.random() * 100}vh`;
    letraElemento.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    letraElemento.style.opacity = 1;
    letraElemento.style.transition = 'opacity 1.0s ease';

    container.appendChild(letraElemento);

    setTimeout(() => {
        letraElemento.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
        container.removeChild(letraElemento);
        criarLetra();
    }, 1500);
}

setInterval(criarLetra, 1000);
