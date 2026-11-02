// 1. Mobile navigation: open and close the menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  const menuIsOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", menuIsOpen);
  menuBtn.textContent = menuIsOpen ? "✕" : "☰";
});

// Close the mobile menu when a navigation link is selected
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// 2. Toggle between light mode and dark mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const darkModeEnabled = document.body.classList.contains("dark-mode");
  themeBtn.textContent = darkModeEnabled ? "☀️" : "🌙";
});

// 3. Click counter
let count = 0;
const counter = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", function () {
  count = count + 1;
  counter.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function () {
  count = 0;
  counter.textContent = count;
});

// 4. Change the color of a box
const colors = ["#e9e6ff", "#d7f7ee", "#ffe5d6", "#dceeff", "#fff2bd"];
let colorIndex = 0;

document.getElementById("colorBtn").addEventListener("click", function () {
  colorIndex = (colorIndex + 1) % colors.length;
  document.getElementById("colorBox").style.backgroundColor = colors[colorIndex];
});

// 5. Contact form validation and demo confirmation
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop the page from refreshing
  const studentName = document.getElementById("fullName").value.trim();
  formStatus.textContent = "Thank you, " + studentName + "! Your demo form was submitted successfully.";
  contactForm.reset();
});

// 6. Automatically show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
