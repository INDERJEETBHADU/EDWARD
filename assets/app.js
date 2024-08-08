// ===================================== ClIENT SLIDER ========================================//

$(".clients_slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// ===================================== CHECKBOX ========================================//

const check = document.querySelector(".checkbox_part");
const check_img = document.querySelector(".check-img");

check.addEventListener("click", () => {
  check_img.classList.toggle("d-none");
});
function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross");
}
