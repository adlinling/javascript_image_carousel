<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="carousel.css">

    <title>Product Carousel</title>
</head>
<body>


	<div class="displaycontainer">
	<button id="prevBtndisp">&lt;</button>  
    	<div id="display"><img src="image1.png" style='width:100%;height:100%;object-fit: contain;'></div>
        <button id="nextBtndisp">&gt;</button>
	</div>


    <div class="carousel">
        <button id="prevBtn">&lt;</button>
        <div class="carousel-container">
            <img class="carousel-slide" src="image1.png" alt="Product Image 1">
            <img class="carousel-slide" src="image2.png" alt="Product Image 2">
            <img class="carousel-slide" src="image3.png" alt="Product Image 3">
            <img class="carousel-slide" src="image4.png" alt="Product Image 4">
            <!-- Add more images as needed -->
        </div>
        <button id="nextBtn">&gt;</button>
    </div>



<script>



const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const prevBtndisp = document.getElementById('prevBtndisp');
const nextBtndisp = document.getElementById('nextBtndisp');

const slides = document.querySelectorAll('.carousel-slide');
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


    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');


    //updateCounter();
    //updateImageUrl(); // New line
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

</script>


 </body>
</html>

