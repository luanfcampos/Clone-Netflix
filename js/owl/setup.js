$('.owl-carousel').owlCarousel({
    
    center:true,
    items:2,

    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        },
        1900:{
            items:8
        }


    }
})