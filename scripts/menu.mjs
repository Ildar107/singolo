export default function menuInit() {
    let links = document.querySelectorAll('.header__menu a');
    
    links.forEach(x => x.addEventListener('click', function(e) {
        document.querySelectorAll('.header__menu a').forEach(y => y.classList.remove('link_active'));
        e.target.classList.add('link_active');
        document.querySelector(`${e.target.hash}`).scrollIntoView({
            block: "start",
            inline: "start",
            behavior: "smooth"
          });
    }));
    
    window.addEventListener('scroll', function(e) {
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
      });
}