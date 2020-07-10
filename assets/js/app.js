import anime from 'animejs'
import './jquery'
import 'owl.carousel'

anime({
  targets: '/.cover',
  scale: [1, 1.1],
  easing: 'easeInOutSine',
  duration: 5000,
})

anime({
  targets: '.top-banner_content',
  translateY: 20,
  duration: 10000,
})

anime({
  targets:
    '.shape-1, .shape-2, .shape-about-1, .shape-about-2, .shape-contact-1',
  translateX: 100,
  duration: 12000,
})

anime({
  targets:
    '.shape-3, .shape-4, .shape-about-4, .shape-offer-1, .shape-offer-2, .shape-offer-5, .shape-offer-7, .shape-project-4, .shape-project-7, .shape-project-8, .shape-contact-2',
  translateY: 100,
  duration: 12000,
})

anime({
  targets: '.shape-5, .shape-7, .shape-contact-3',
  translateX: 100,
  translateY: 100,
  duration: 12000,
})

anime({
  targets: '.shape-6',
  translateX: 100,
  translateY: 100,
  duration: 15000,
})

anime({
  targets: '.shape-8, .shape-9, .shape-10, .shape-offer-8',
  scale: [0, 1],
  duration: 12000,
})

anime({
  targets:
    '.shape-11, .shape-12, .shape-about-3, .shape-offer-4, .shape-project-5',
  rotate: '1turn',
  duration: 15000,
})

anime({
  targets: '.offers',
  translateY: -50,
  easing: 'easeInOutExpo',
  duration: 5000,
})

anime({
  targets: '.shape-offer-3, .shape-offer-6, .shape-project-6',
  translateY: -100,
  duration: 12000,
})

var project = $('#owl-carousel1')
project.owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoWidth: true,
  items: 1,
})

checkClasses()
project.on('translated.owl.carousel', function (event) {
  checkClasses()
})

function checkClasses() {
  var total = $('.owl-carousel .owl-stage .owl-item.active').length

  $('.owl-carousel .owl-stage .owl-item').removeClass(
    'firstActiveItem lastActiveItem'
  )

  $('.owl-carousel .owl-stage .owl-item.active').each(function (index) {
    if (index === 0) {
      // this is the first one
      $(this).addClass('firstActiveItem')
    }
    if (index === total - 1 && total > 1) {
      // this is the last one
      $(this).addClass('lastActiveItem')
    }
  })
}

$('#owl-carousel2').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  autoWidth: true,
  rtl: true,
})
