document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.testimonial-slides');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const dotsContainer = document.querySelector('.slider-dots');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Function to update the slider position
    function updateSlider() {
        // Calculate the translation amount based on the current slide index
        const translateXValue = -currentIndex * 100;
        sliderContainer.style.transform = `translateX(${translateXValue}%)`;

        // Update active dot
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Event listener for Next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides; // Cycle through slides
        updateSlider();
    });

    // Event listener for Previous button
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Cycle backward
        updateSlider();
    });

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Optional: Auto-slide
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % totalSlides;
    //     updateSlider();
    // }, 5000); // Change slide every 5 seconds
});