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
        prevArrow: ".prev",
        nextArrow: ".next",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prev",
        nextArrow: ".next",
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prev",
        nextArrow: ".next",
        dots: false,
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
document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', () => {
      if (document.getElementById("navbar").classList.contains("start-0")) {
          openNav();
      }
  });
});
document.querySelectorAll('.common_button').forEach(button => {
  button.addEventListener('click', () => {
      if (document.getElementById("navbar").classList.contains("start-0")) {
          openNav();
      }
  });
});
// ===================================== Video Play ========================================//
let video = document.querySelectorAll(".video_play");
video.forEach((e) => {
  e.addEventListener("click", () => {
    e.closest(".video_box").lastElementChild.classList.add("z-2");
  });
});

// function formHandler(event) {
//   event.preventDefault();

//   const form = event.target;
//   const inputs = form.querySelectorAll("input[required]");
//   let allFilled = true;
//   inputs.forEach((input) => {
//     if (!input.value.trim()) {
//       allFilled = false;
//     }
//   });

//   if (allFilled) {
//     alert("Form successfully submitted!");
//   } else {
//     alert("Please fill out all required fields.");
//   }
// }

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
    showSuccessPopup();
  } else {
    alert("Please fill out all required fields.");
  }
}

function showSuccessPopup() {
  const popup = document.getElementById("successPopup");
  popup.classList.remove("d-none");

  // Hide the popup after 3 seconds
  setTimeout(() => {
    popup.classList.add("d-none");
  }, 3000);
}

// =========== back to top ============

let backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const sliderParent = document.getElementById("sliderParent");
const images = [
  "./assets/images/webp/actewagl.png",
  "./assets/images/webp/agl.png",
  "./assets/images/webp/energy-australia.png",
];
const imageClasses = [
  "slider_image_two",
  "slider_image_one",
  "slider_image_two",
];

for (let i = 0; i < 50; i++) {
  const slideImageBox = document.createElement("div");
  slideImageBox.className = "slide_image_box";

  const img = document.createElement("img");
  img.src = images[i % images.length];
  img.alt = "actewagl";
  img.className = imageClasses[i % imageClasses.length];

  slideImageBox.appendChild(img);
  sliderParent.appendChild(slideImageBox);
}
