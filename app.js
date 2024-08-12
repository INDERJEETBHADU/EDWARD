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
const checkImg = document.querySelector(".check-img");

// check.addEventListener("click", () => {
//   check_img.classList.toggle("d-none");
// });
function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross");
}
document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    if (document.getElementById("navbar").classList.contains("start-0")) {
      openNav();
    }
  });
});
document.querySelectorAll(".common_button").forEach((button) => {
  button.addEventListener("click", () => {
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

// =========== back to top ================================================
let back_to_topBtn = document.getElementById("back_to_top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    back_to_topBtn.style.display = "block";
  } else {
    back_to_topBtn.style.display = "none";
  }
}

back_to_topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const sliderParent = document.getElementById("sliderParent");
const images = [
  "/assets/images/svg/actewagl.svg",
  "./assets/images/svg/agl.svg",
  "./assets/images/svg/energy-australia.svg",
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
// =========================== form

const formValue = {
  name: "",
  email: "",
  contact: "",
  address: "",
  date: "",
  condition: false,
};

const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "full-name") {
    formValue.name = value;
  } else if (name === "active-email") {
    formValue.email = value;
  } else if (name === "phone-number") {
    formValue.contact = value;
  } else if (name === "connection-address") {
    formValue.address = value;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formValue);
  const SERVICE_ID = "service_azdfcfh";
  const TEMPLATE_ID = "template_7awzlvh";

  if (formValue.condition) {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formValue).then(
      () => {
        alert("Sent Successfully");
        checkImg.classList.add("d-none");
        e.target.reset();
      },
      (error) => {
        console.log("Failed To Send", error.text);
        alert("Failed To Send");
      }
    );
  }
};

check.addEventListener("click", () => {
  const isChecked = !checkImg.classList.contains("d-none");

  if (isChecked) {
    checkImg.classList.add("d-none");
    formValue.condition = false;
  } else {
    checkImg.classList.remove("d-none");
    formValue.condition = true;
  }
});
