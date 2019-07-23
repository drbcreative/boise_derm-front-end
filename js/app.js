// set vars
const
  track = document.querySelector('.carousel__track'),
  slides = Array.from(track.children),
  nextButton = document.querySelector('.carousel__button--right'),
  prevButton = document.querySelector('.carousel__button--left'),
  dotsNav = document.querySelector('.carousel__nav'),
  dots = Array.from(dotsNav.children),
  slideSize = slides[0].getBoundingClientRect().width;

// arrange slides next to each other
// function to set slides at the proper left point
const setSlidePosition = (slide, index) => {
  slide.style.left = slideSize * index + 'px';
}
// apply above function to each slide
slides.forEach(setSlidePosition);

// function to move to the target slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

// function to hightlight the target dot
const updateDot = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

// function to hide/show nav
const navDisplay = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
    nextButton.src = 'img/next-39-59.svg';
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    prevButton.src = 'img/prev-39-59.svg';
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    prevButton.src = 'img/prev-18-38.svg';
    nextButton.classList.remove('is-hidden');
    nextButton.src = 'img/next-60.svg';
  }
}

// When click left, move slides to the left
prevButton.addEventListener('click', e => {
  // get current slide
  const
    currentSlide = track.querySelector('.current-slide'),
    prevSlide = currentSlide.previousElementSibling,
    currentDot = dotsNav.querySelector('.current-slide'),
    prevDot = currentDot.previousElementSibling,
    prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDot(currentDot, prevDot);
  navDisplay(slides, prevButton, nextButton, prevIndex);
});

// When click right, move slides to the right
nextButton.addEventListener('click', e => {
  // get current slide
  const
    currentSlide = track.querySelector('.current-slide'),
    nextSlide = currentSlide.nextElementSibling,
    currentDot = dotsNav.querySelector('.current-slide'),
    nextDot = currentDot.nextElementSibling,
    nextIndex = slides.findIndex(slide => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDot(currentDot, nextDot);
  navDisplay(slides, prevButton, nextButton, nextIndex);
});

// when click on nav indicator, move to that slide
dotsNav.addEventListener('click', e => {
  // what indicator was clicked on
  const targetDot = e.target.closest('.carousel__indicator');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide'),
    currentDot = dotsNav.querySelector('.current-slide'),
    targetIndex = dots.findIndex(dot => dot === targetDot),
    targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDot(currentDot, targetDot);
  navDisplay(slides, prevButton, nextButton, targetIndex);

});