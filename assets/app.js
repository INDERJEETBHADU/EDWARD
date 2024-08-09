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
        autoplay: true,
        autoplaySpeed: 2000,
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

// ===================================== Video Play ========================================//
let video = document.querySelectorAll(".video_play");
video.forEach((e) => {
  e.addEventListener("click", () => {
    e.closest(".video_box").lastElementChild.classList.add("z-2");
  });
});

function formHandler(event) {
  event.preventDefault();

  const form = event.target;
  const inputs = form.querySelectorAll("input[required]");
  let allFilled = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      allFilled = false;
    }
  });

  if (allFilled) {
    alert("Form successfully submitted!");
  } else {
    alert("Please fill out all required fields.");
  }
}

// =========== back to top ============ 

let backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

