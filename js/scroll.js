const header = document.querySelector("#navBar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 20) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
