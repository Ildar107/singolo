export default function sliderInit() {
    let items = document.querySelectorAll('.slider__item');
    let currentItem = 0;
    let isEnabled = true;

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
}