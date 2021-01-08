// Header 

window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 1){
        header.classList.add('header_active');
    } else{
        header.classList.remove('header_active');
    }
}

 // Burger 

$(document).ready(function() {
	$('.header__burger,.header__close').click(function(event) {
		$('.header__burger,.burger').toggleClass('active');
	})
})

 // Input 
const labelList = document.querySelectorAll('.form__label')
        labelList.forEach(label => label.addEventListener('click', function() {
          label.parentElement.children[0].focus()
}))
// Slider 

new Swiper('.slider',{
	slidesPerView: 1,
	spaceBetween: 100,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

 // Switch 
	$(document).ready(function() {
	$('.plan__individual,.plan__company').click(function(event) {
		$('.plan__individual,.plan__company').toggleClass('active');
	})
})