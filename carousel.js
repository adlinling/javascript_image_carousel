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
      updateDisplay(currentSlide);
    }

    function displayimg(clickedImage, index) {
      currentSlide = index;
      updateDisplay(currentSlide);
    }

    function updateDisplay(index) {
      const images = document.getElementsByClassName("carousel-slide");
      const imgurl = images[index].src;
      document.getElementById('display').innerHTML = "<img src=" + imgurl + " style='width:100%;height:100%;object-fit: contain;'>";
    }