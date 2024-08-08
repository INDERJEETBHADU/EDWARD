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

// ===================================== video play ========================================//

let pauseIcon = document.querySelector(".pause_icon");
let videoThumbnail = document.querySelector(".video_thumbnail");
let video = document.querySelector(".youtube_video");

pauseIcon.addEventListener("click", () => {
  videoThumbnail.style.display = "none";
  pauseIcon.style.display = "none";
  video.style.display = "block";

  let videoIframe = document.getElementById("videoIframe");
  videoIframe.src += "&autoplay=1";
});
