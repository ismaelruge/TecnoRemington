
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.service-images img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            alert(`Has hecho clic en la imagen: ${image.alt}`);
        });
    });
});
