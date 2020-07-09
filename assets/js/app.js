import anime from 'animejs';
import './jquery';
import 'owl.carousel';

anime({
    targets: ".cover",
    scale: [1, 1.1],
    easing: "easeInOutSine",
    duration: 5000
})

anime({
    targets: ".top-banner_content",
    translateY: 20,
    duration: 10000
})

anime({
    targets: ".shape-1, .shape-2",
    translateX: 100,
    duration: 12000
})

anime({
    targets: ".shape-3, .shape-4",
    translateY: 100,
    duration: 12000
})

anime({
    targets: ".shape-5, .shape-7",
    translateX: 100,
    translateY: 100,
    duration: 12000
})

anime({
    targets: ".shape-6",
    translateX: 100,
    translateY: 100,
    duration: 15000
})

anime({
    targets: ".shape-8, .shape-9, .shape-10",
    scale: [0, 1],
    duration: 12000
})

anime({
    targets: ".shape-11, .shape-12",
    rotate: "1turn",
    duration: 15000
})

anime({
    targets: ".offers",
    translateY: -50,
    easing: "easeInOutExpo",
    duration: 5000
})

anime({
    targets: ".shape-offer-1, .shape-offer-2, .shape-offer-5, .shape-offer-7, .shape-project-4, .shape-project-7, .shape-project-8",
    translateY: 100,
    duration: 12000
})

anime({
    targets: ".shape-offer-3, .shape-offer-6, .shape-project-6",
    translateY: -100,
    duration: 12000
})

anime({
    targets: ".shape-offer-4, .shape-project-5",
    rotate: "1turn",
    duration: 15000
})

anime({
    targets: ".shape-offer-8",
    translateX: 100,
    translateY: 100,
    duration: 15000
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-carousel2').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})