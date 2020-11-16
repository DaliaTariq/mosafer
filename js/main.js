$(document).ready(function () {
    //Top Nav (Scroling Navbar)//
    scrollShow = false;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

        if (scrollTop > 0) {
            if (scrollShow)
                return;
            console.log(scrollShow);
            scrollShow = true;
            $('.navbar').addClass('scrollNav');
            $('.navbar').css('opacity', 0)
                .slideDown('slow').animate({ opacity: 1 },
                    { queue: false, duration: 'slow' }
                );
        }
        else {
            $('.navbar').removeClass('scrollNav');
            /*console.log('false');*/
            scrollShow = false;
        }
    });




    /**Call Carousel*/
   /* $('.categOwl').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        margin: 10,
        autoplayHoverPause: true,
        smartSpeed: 350,
        responsiveClass: true,
        rtl:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            575: {
                items: 2,
                nav: true
            },

            800: {
                items: 2,
                nav: true
            },
            1025: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });*/


   /* $('.categOwl').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        margin: 10,
        autoplayHoverPause: true,
        smartSpeed: 350,
        responsiveClass: true,
        rtl:true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            575: {
                items: 2,
                nav: true
            },

            800: {
                items: 2,
                nav: true
            },
            1025: {
                nav: true,
                center:true,
                autoWidth:true,
                items: 3,
                loop: true
            }
        }
    });*/




    $('.categOwl').owlCarousel({
        loop:true,
        autoplay:true,
        dots:false,
        margin:10,
        autoplayHoverPause:true,
        smartSpeed:350,
        responsiveClass:true,
        rtl:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            575:{
                items:2,
                nav:false,
                loop:true
            },
            991:{
                items:3,
                nav:true,
                loop:true,
            }
        }
    })
    

});
