let burgerBtn = document.getElementById("burger");
let nav = document.getElementById("nav");
let birthdate = new Date(1997, 1, 1);
let ageHolder = document.getElementById("age");
let goup = document.getElementById("goup");
let navLinks = document.querySelectorAll(".nav-link");

burgerBtn.addEventListener("click", () => {
  if (nav.classList.contains("active-nav-animation-class")) {
    nav.classList.remove("active-nav-animation-class");
    nav.classList.add("de-active-nav-animation-class");
    burgerBtn.classList.remove("active-burger");
  } else {
    nav.classList.remove("de-active-nav-animation-class");
    nav.classList.add("active-nav-animation-class");
    burgerBtn.classList.add("active-burger");
  }
});

function age(birthdate) {
  const today = new Date();
  const age =
    today.getFullYear() -
    birthdate.getFullYear() -
    (today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() &&
        today.getDate() < birthdate.getDate()));
  return age;
}

let currentAge = age(birthdate);

if (ageHolder) {
  ageHolder.innerText = currentAge + " Years old";
}

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 250) {
    goup.classList.add("active-goup");
  } else {
    goup.classList.remove("active-goup");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active-nav-animation-class");
    nav.classList.add("de-active-nav-animation-class");
    burgerBtn.classList.remove("active-burger");
  });
});
