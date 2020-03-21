import sliderInit from "./scripts/slider.mjs"
import menuInit from "./scripts/menu.mjs"
import portfolioInit from "./scripts/portfolio.mjs"
import formInit from "./scripts/form.mjs"

sliderInit();
menuInit();
portfolioInit();
formInit();

document.querySelectorAll('.item__phone').forEach(x => x.addEventListener('click', function(e) {
	if(e.target.classList.contains('phone') || e.target.classList.contains('screen'))
		e.currentTarget.children[1].classList.toggle('screen_off');
}));

document.querySelector('.modal__container button').addEventListener('click', function() {
	document.querySelector('.form__container').reset();
	document.querySelector('.window__modal').classList.remove('window__modal_visible');
});
