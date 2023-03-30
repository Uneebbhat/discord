function toggleHide() {
  const mobNav = document.querySelector(".mobile-nav");
  if (mobNav.style.display != "none") {
    mobNav.style.display = "none";
  } else {
    mobNav.style.display = "block";
  }
}
