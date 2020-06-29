import anime from '../../node_modules/animejs/lib/anime.es.js';

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