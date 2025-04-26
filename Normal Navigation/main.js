const hamburgerIcon = document.querySelector(".hamburger_icon");
const closeIcon = document.querySelector(".close_icon");
const menu = document.querySelector(".menu");

hamburgerIcon.addEventListener("click", function () {
  menu.classList.add("show");
});

closeIcon.addEventListener("click", function () {
  menu.classList.remove("show");
});

// Close the menu when clicking outside
document.addEventListener("click", function (event) {
  if (
    menu.classList.contains("show") &&
    !menu.contains(event.target) &&
    !hamburgerIcon.contains(event.target)
  ) {
    menu.classList.remove("show");
  }
});

// Prevent default for menu links (optional)
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
  });
});
