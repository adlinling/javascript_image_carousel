
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const prevBtndisp = document.getElementById('prevBtndisp');
const nextBtndisp = document.getElementById('nextBtndisp');

let currentSlide = 0;

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});


prevBtndisp.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});


nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});


nextBtndisp.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});




function showSlide(index) {

    const slides = document.querySelectorAll('.carousel-slide');

    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');


    let images = document.getElementsByClassName("carousel-slide");


    // Create an array to store image sources
    let imageSources = [];
        
    // Loop through the images and extract their sources
    for (let i = 0; i < images.length; i++) {
       imageSources.push(images[i].src);
    }
        
    // Now 'imageSources' contains an array of image URLs
    //console.log(imageSources); // Display the array in the console

    imgurl = imageSources[currentSlide];

    document.getElementById('display').innerHTML = "<img src="+imgurl+" style='width:100%;height:100%;object-fit: contain;'>";
}
