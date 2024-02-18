window.onload = function() {
    const carouselContainer = document.getElementById('carouselContainer');
    const firstSlideImg = document.querySelector('.slide img');
    const carouselHeight = firstSlideImg.clientHeight;
    carouselContainer.style.height = carouselHeight + 'px';

    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let intervalId; // Variável para armazenar o ID do intervalo

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Iniciar o carrossel
    intervalId = setInterval(nextSlide, 1800);

    // Manipuladores de eventos para pausar/reiniciar o carrossel quando o mouse entra/sai do slide
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            clearInterval(intervalId); // Pausar o carrossel quando o mouse entra no slide
        });

        slide.addEventListener('mouseleave', () => {
            intervalId = setInterval(nextSlide, 3000); // Reiniciar o carrossel quando o mouse sai do slide
        });
    });

    // Lógica para avançar e retroceder os slides
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        clearInterval(intervalId); // Parar o intervalo quando um botão é clicado
        intervalId = setInterval(nextSlide, 3000); // Reiniciar o intervalo
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        clearInterval(intervalId); // Parar o intervalo quando um botão é clicado
        intervalId = setInterval(nextSlide, 3000); // Reiniciar o intervalo
    });
};
