const slides = document.querySelectorAll('.slider-frame li');
//selecionanadmos todos los elemntos de li los cuales se encuentran dentro de slider-frame

let currentSlide = 0;
// hace que empiezen desde la primera imagen o en la posicion 0

document.getElementById('next').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
});
//document.getElementById('next').addEventListener('click', () => { hace que realice una accion en anonimo o aculto

//slides[currentSlide].style.display = 'none'; hace que la imagen que se este presentando se oculte

//currentSlide = (currentSlide + 1) % slides.length; en esta hace que por una accion mande una señal 
//indicando para realizar el cambio positivo y tambien esta verifica que no se pase de las imagenes que esten ingresadas

//slides[currentSlide].style.display = 'block'; hace que se muestre la siguiente imagen


document.getElementById('prev').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
});
//document.getElementById('prev').addEventListener('click', () => { hace que realice una accion en anonimo o aculto

//slides[currentSlide].style.display = 'none'; hace que la imagen que se este presentando se oculte

//currentSlide = (currentSlide - 1) % slides.length; en esta hace que por una accion mande una señal 
//indicando para realizar el cambio negativo y tambien esta verifica que no se pase de las imagenes que esten ingresadas

//slides[currentSlide].style.display = 'block'; hace que se muestre la anterior imagen

//Esta parte por generan una gran cantidad de problemas se decio no usarla al final.