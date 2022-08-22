// Manggil Class Grid untuk Seleksi dan Edit Isotope
$(document).ready(function()
{
    $('.grid').isotope({
        filter:'.courses',
        itemSelector:'.grid-item',
        masonry: {
            columnWidth: 40,
            gutter: 120,
            isFitWidth: true
            }
    });

    // Fungsi Filter Content OnClick

    $('.filter-button-group').on('click','li',function()
    {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
        $('.filter-button-group li').removeClass('active');
        $(this).addClass('active');
    });
})

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
}
);
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

$(".responsive").slick({
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  

  