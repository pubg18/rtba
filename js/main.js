$(document).ready(function () {
$('#owldemo2').owlCarousel({
    loop: true,
    nav: true,
    autoplay: false,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    dots: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  });


   });