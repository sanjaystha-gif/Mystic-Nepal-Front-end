// IMAGES HTML FILE
const images = document.querySelectorAll('.image');
images.forEach((image) => {
  image.addEventListener('click', () => {
    const htmlFile = image.getAttribute('data-file');
    window.location.href = htmlFile;
  });
});
