export default function menuInit() {
    let links = document.querySelectorAll('.header__menu a');
    setActiveLink();

    links.forEach(x => x.addEventListener('click', function(e) {
        document.querySelectorAll('.header__menu a').forEach(y => y.classList.remove('link_active'));
        e.target.classList.add('link_active');
        document.querySelector(`${e.target.hash}`).scrollIntoView({
            block: "start",
            inline: "start",
            behavior: "smooth"
          });
        
          
        document.querySelector('.menu__container').classList.toggle('menu__container_show')
        document.querySelector('.header__menu__clicker').classList.toggle('header__menu__clicker_active');
        document.querySelector('.header__menu').classList.remove('header__menu_show');
        document.querySelector('.header__logo').classList.toggle('header__logo_show');
    }));
    
    window.addEventListener('scroll', setActiveLink);

    function setActiveLink() {
        let sections = document.querySelectorAll('section');
        let currentPosition = pageYOffset + 100;
        sections.forEach(el => {
            if(el.offsetTop <= currentPosition ||
                (el.getAttribute('id') === "contact" && (el.offsetTop - 200) <= currentPosition )){
                    links.forEach(x => {
                    x.classList.remove('link_active')
                    if(el.getAttribute('id') === x.hash.substring(1)) {
                        x.classList.add('link_active');
                    }
                })
            }
        })
    }

    document.querySelector('.header__menu__clicker').addEventListener('click', (event) => {
        
        if(document.querySelector('.header__menu').classList.contains('header__menu_show')) {
            document.querySelector('.menu__container').classList.toggle('menu__container_show');
            event.target.classList.toggle('header__menu__clicker_active');
            document.querySelector('.header__logo').classList.toggle('header__logo_show');
            setTimeout(() => {
                document.querySelector('.header__menu').classList.toggle('header__menu_show');
            }, 1000)
        } else {
            document.querySelector('.header__menu').classList.toggle('header__menu_show');
            setTimeout(() => {
                event.target.classList.toggle('header__menu__clicker_active');
                document.querySelector('.header__logo').classList.toggle('header__logo_show');
                document.querySelector('.menu__container').classList.toggle('menu__container_show');
            }, 100)
        }
        
        
    });
}