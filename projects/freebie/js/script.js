$(document).ready(function() {
    /* $('.promo-slider').slick( {
        dots: true
    }); */

    $('.team__slider').slick( {
        prevArrow: '<img src = "icons/team/prev.svg" class="team__slide-prev"></img>',
        nextArrow: '<img src = "icons/team/next.svg" class="team__slide-next"></img>'
    });

    let nav = document.querySelectorAll('.promo__nav'),
    divider = document.querySelectorAll('.promo__divider');
    
    for(let i = 0; i < nav.length; i++) {
        const j = i;
        nav[i].addEventListener('mouseenter', function() {
            let div = document.querySelectorAll('.promo__divider');
            div[j].style = 'width: 100%; transition: 0.2s all;';
        });
        nav[i].addEventListener('mouseleave', function() {
            let div = document.querySelectorAll('.promo__divider');
            div[j].style = 'width: 10px; transition: 0.2s all;';
        });
    }

/*     function sliderHidden() {
        let slider = document.querySelector('.promo-slider');

        slider.style.overflow = 'hidden';
    }
    sliderHidden(); */
    
});

const link = document.querySelectorAll('.works__categories-link');

    link.forEach(list =>{
        list.addEventListener('click', (e) => {
            link.forEach(el=>{
                el.classList.remove('works__categories-link_active');
            });
            list.classList.add('works__categories-link_active');
        });
    });

    function tabsEach() {
        const photo = document.querySelector('#photography'),
              photoLink = document.querySelector('#photo-link'),
              illustration = document.querySelector('#illustration'),
              illustLink = document.querySelector('#illust-link'),
              branding = document.querySelector('#branding'),
              brandLink = document.querySelector('#brand-link'),
              webDesing = document.querySelector('#web-design'),
              webLink = document.querySelector('#web-link'),
              allLink = document.querySelector('#all-link');
            
        allLink.addEventListener('click', function() {
        photo.style.display = 'block';
        illustration.style.display = 'block';
        branding.style.display = 'block';
        webDesing.style.display = 'block';
        });
        
        photoLink.addEventListener('click', function() {
            photo.style.display = 'block';
            illustration.style.display = 'none';
            branding.style.display = 'none';
            webDesing.style.display = 'none';
        });
        illustLink.addEventListener('click', function() {
            illustration.style.display = 'block';
            photo.style.display = 'none';
            branding.style.display = 'none';
            webDesing.style.display = 'none';
        });
        brandLink.addEventListener('click', function() {
            branding.style.display = 'block';
            illustration.style.display = 'none';
            photo.style.display = 'none';
            webDesing.style.display = 'none';
        });
        webLink.addEventListener('click', function() {
            webDesing.style.display = 'block';
            illustration.style.display = 'none';
            branding.style.display = 'none';
            photo.style.display = 'none';
        });
    }
    tabsEach();

let item = document.querySelectorAll('.team__item');

    for(let i = 0; i < item.length; i++) {
        const j = i;
        item[i].addEventListener('mouseenter', function() {
            let block = document.querySelectorAll('.team__item-text');
            block[j].style = 'height: 155px; transition: 0.5s all';
        });
        item[i].addEventListener('mouseleave', function() {
            let block = document.querySelectorAll('.team__item-text');
            block[j].style = 'height: 55px; transition: 0.5s all';
        });
    }
        





