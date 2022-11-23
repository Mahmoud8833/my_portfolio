let navBar = document.getElementsByClassName("navbar")[0];
let myPic = document.getElementsByClassName("my-pic")[0];

window.addEventListener("scroll", () => {
  if (myPic.getBoundingClientRect().top < 56) {
    navBar.classList.add("nav-shadow");
  } else {
    navBar.classList.remove("nav-shadow");
  }
});

// try
