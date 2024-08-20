const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation.dyno");
const top_btn = document.querySelector(".top-btn");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

const handleScroll = () => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 20) {
    top_btn.style.display = "block";
    top_btn.style.top = scrollTop > 100 ? "100px" : `${scrollTop}px`;
  } else {
    top_btn.style.display = "none";
  }
};

// Check the scroll position on page load
document.addEventListener("DOMContentLoaded", handleScroll);

// When the user scrolls, adjust the button's position
window.onscroll = handleScroll;

// When the user clicks on the button, scroll to the top of the document smoothly
top_btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
