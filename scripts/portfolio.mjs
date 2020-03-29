export default function portfolioInit() {
    let portfolio = document.querySelector('.portfolio__gallery');
    let filterButtons = document.querySelectorAll('.portfolio__filter button');

    filterButtons.forEach(x => x.addEventListener('click', function(e) {
        changeActive('portfolio__filter_active', e.currentTarget);
        let items = Array.from(portfolio.children).sort(()=> Math.random() > 0.5 ? 1 : -1).map(x => x.outerHTML);
        portfolio.innerHTML = items.reverse().join('\n');
    }));
    
    portfolio.addEventListener('click', (e) => {
        if(e.target.tagName === 'IMG') {
            changeActive('img_active', e.target);
        }
    })

    function changeActive(selector, element) {
        document.querySelector(`.${selector}`)?.classList.remove(selector);
        element.classList.add(selector);
    }
}