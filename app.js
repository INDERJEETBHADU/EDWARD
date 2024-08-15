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
  } else if (name === "date") {
    formValue.date = value;
  } else if (name === "connection-address") {
    formValue.address = value;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formValue.date) {
    let currentDate = new Date();
    formValue.date = currentDate.toDateString();
  }

  if (formValue.condition) {
    console.log(formValue);
    Swal.fire({
      title: "Form Submitted",
      icon: "success",
      timer: 3000,
      showConfirmButton: false,
    });
    checkImg.classList.add("d-none");
    e.target.reset();
    formValue.condition = false;
  } else {
    Swal.fire({
      title: "Failed Submitted, accept the term & condition",
      icon: "error",
      timer: 3000,
      showConfirmButton: true,
    });
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

// popup + calender

let display = document.querySelector("#display");
let days = document.querySelector("#days");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let selectedDate = null;

function calendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let firstDayIndex = firstDay.getDay();
  let numberOfDays = lastDay.getDate();
  let nextDays = new Date(year, month, numberOfDays).getDay();

  display.textContent = `${date.getDate()} ${date.toLocaleString("en-US", {
    month: "long",
  })}, ${year}`;

  selectedDate = null;

  days.innerHTML = "";

  for (let i = 0; i < firstDayIndex; i++) {
    const div = document.createElement("div");
    div.className = "inactive";
    days.appendChild(div);
  }

  for (let j = 1; j <= numberOfDays; j++) {
    let div = document.createElement("div");
    let currDate = new Date(year, month, j);
    div.dataset.date = currDate.toDateString();
    div.textContent = j;
    div.classList.add("day");
    days.appendChild(div);

    if (
      currDate.getFullYear() === new Date().getFullYear() &&
      currDate.getMonth() === new Date().getMonth() &&
      currDate.getDate() === new Date().getDate()
    ) {
      div.classList.add("current-date");
    }

    if (selectedDate && selectedDate.dataset.date === div.dataset.date) {
      div.classList.add("selected-date");
    }

    div.addEventListener("click", function () {
      if (selectedDate) {
        selectedDate.classList.remove("selected-date");
      }

      this.classList.add("selected-date");
      selectedDate = this;

      let selectedDateObject = new Date(this.dataset.date);
      selectedDateObject.setDate(selectedDateObject.getDate() + 1);
      display.textContent = `${selectedDateObject.getDate()} ${selectedDateObject.toLocaleString(
        "en-US",
        { month: "long" }
      )}, ${selectedDateObject.getFullYear()}`;
      // console.log("Selected date:", this.dataset.date);
      formValue.date = this.dataset.date;

      const dateInput = document.getElementById("date-input");
      if (dateInput) {
        dateInput.value = selectedDateObject.toISOString().split("T")[0];
      }
    });
  }
  for (let i = nextDays; i < 6; i++) {
    const div = document.createElement("div");
    div.textContent = i - nextDays + 1;
    div.className = "inactive";
    days.appendChild(div);
  }
}

calendar();

previous.addEventListener("click", () => {
  days.innerHTML = "";
  if (month === 0) {
    month = 11;
    year--;
  } else {
    month--;
  }
  date.setMonth(month);
  calendar();
});

next.addEventListener("click", () => {
  days.innerHTML = "";
  if (month === 11) {
    month = 0;
    year++;
  } else {
    month++;
  }
  date.setMonth(month);
  calendar();
});

// toggle calender

document.addEventListener("DOMContentLoaded", function () {
  const homeTab = document.getElementById("home-tab");
  const profileTab = document.getElementById("profile-tab");
  const calendarSectionHome = document.getElementById("calendarSectionHome");
  const calendarSectionProfile = document.getElementById(
    "calendarSectionProfile"
  );
  const calendarBox = document.querySelector(".calender_box");

  function toggleCalendarVisibility() {
    if (homeTab.classList.contains("active")) {
      calendarSectionProfile.innerHTML = "";
      calendarSectionHome.appendChild(calendarBox);
    } else if (profileTab.classList.contains("active")) {
      calendarSectionHome.innerHTML = "";
      calendarSectionProfile.appendChild(calendarBox);
    }
  }

  homeTab.addEventListener("click", toggleCalendarVisibility);
  profileTab.addEventListener("click", toggleCalendarVisibility);

  toggleCalendarVisibility();
});
