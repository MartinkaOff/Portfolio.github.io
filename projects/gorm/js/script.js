/* const { on } = require("gulp"); */

$(document).ready(function(){
    $('.creative__teams-view').on('click', function() {
        $('.our_work').fadeIn('slow')
    });

    $('.testimonials__wrapper').slick( {
        dots: true,
        prevArrow: '<a class="slick-prev"></a>',
        nextArrow: '<a class="slick-next"></a>'
    });

    function validateForms(form) {
        $(form).validate( {
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                url: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Enter your name",
                    minlength: jQuery.validator.format("Enter {0} characters")
                },
                email: {
                    required: "Enter your email",
                    email: "Email is wrong"
                },
                url: {
                    required: "Enter Website URL"
                }
            }
        });
    };

    validateForms('#contact-form'); 

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    })

    $('.header__hamburger').on('click', function() {
        $('.menu').toggleClass('menu_active')
    });
});

const percents = document.querySelectorAll('.skills__our-percent'),
      bar = document.querySelectorAll('.skills__our-bar');

percents.forEach( (item, i) => {
    bar[i].style.width = item.innerHTML;
});

