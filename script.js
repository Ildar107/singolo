let items = document.querySelectorAll('.slider__item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slider__item_active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('slider__item_next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slider__item_next', direction);
		this.classList.add('slider__item_active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('slider__item_to-left');
	changeCurrentItem(n + 1);
	showItem('slider__item_from-right');
}

function previousItem(n) {
	hideItem('slider__item_to-right');
	changeCurrentItem(n - 1);
	showItem('slider__item_from-left');
}

document.querySelector('.left img').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.right img').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});


document.querySelectorAll('.header__menu a').forEach(x => x.addEventListener('click', function(e) {
    document.querySelectorAll('.header__menu a').forEach(y => y.classList.remove('link_active'));
    e.target.classList.add('link_active');
}));

window.addEventListener('scroll', function(e) {
    let header = document.querySelector('header');
    if(pageYOffset ===0) {
        header.classList.remove('header_fixed');
        header.classList.add('header_normal');
    } else if( !header.classList.contains('header_fixed')) {
        header.classList.add('header_fixed');
    }
  });

document.querySelectorAll('.item__phone').forEach(x => x.addEventListener('click', function(e) {
    if(e.target.classList.contains('phone') || e.target.classList.contains('screen'))
        e.currentTarget.children[1].classList.toggle('screen_off');
}));

Array.from(document.querySelector('.portfolio__gallery').children).forEach((x, i) => x.style.order = i);

document.querySelectorAll('.portfolio__filter button').forEach(x => x.addEventListener('click', function(e) {
    document.querySelector('.portfolio__filter_active')?.classList.remove('portfolio__filter_active');
    e.currentTarget.classList.add('portfolio__filter_active');
    let items = Array.from(document.querySelector('.portfolio__gallery').children);
    items.forEach(x => {
        x.style.order = Math.floor(Math.random() * Math.floor(11));
    })
}));

document.querySelectorAll('.gallery__item').forEach(x => x.addEventListener('click', function(e) {
    document.querySelector('.gallery__item_active')?.classList.remove('gallery__item_active');
    e.currentTarget.classList.add('gallery__item_active');
}));


document.querySelector('.form__container').addEventListener('submit', (e) => {e.preventDefault();}, false);

document.querySelector('.form__button').addEventListener('click', function(e) {
	let name = document.querySelector('.form__container .name');
	let email = document.querySelector('.form__container .email');

	if(!name.validity.valid) {
		name.focus();
		return;
	}

	if(!email.validity.valid) {
		email.focus();
		return;
	}

	let subject = document.querySelector('.form__container .subject');
	let description = document.querySelector('.form__container .form__description');

	document.getElementById('model-subject').innerHTML  = subject.value && subject.value.length > 0
		? `Subject: ${subject.value}`
		: 'Without subject';
	document.getElementById('model-description').innerHTML  = description.value && description.value.length > 0
		? `Description: ${description.value}`
		: 'Without description';
	document.querySelector('.window__modal').classList.add('window__modal_visible');
});

document.querySelector('.modal__container button').addEventListener('click', function() {
	document.querySelector('.form__container').reset();

	document.querySelector('.window__modal').classList.remove('window__modal_visible');
});
