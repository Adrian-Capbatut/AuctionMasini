document.addEventListener('DOMContentLoaded', function () {
	let carouselCars = document.querySelectorAll('.carousel-car')
	let currentIndex = 0

	function showNextImage() {
		carouselCars[currentIndex].style.display = 'none'
		currentIndex = (currentIndex + 1) % carouselCars.length
		carouselCars[currentIndex].style.display = 'block'
	}

	setInterval(showNextImage, 3000)
})
