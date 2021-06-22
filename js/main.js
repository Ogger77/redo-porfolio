$(function () {
  //sticky navigation menu
  let nav_offset_top = $(".header_area").height() + 50;

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();
});

// scroll spy
$("body").scrollspy({ target: "#navbarNav" });

var offset = 200;

$(".navbar li a").click(function (event) {
  event.preventDefault();
  $($(this).attr("href"))[0].scrollIntoView();
  scrollBy(0, -offset);
});

// scroll animation
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    const separator = entry.target.querySelector(".separator--line");
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      separator.classList.add("separator-animate");
      return;
    }

    // remove if not intersecting
    separator.classList.remove("separator-animate");
  });
});

observer.observe(document.querySelector(".separator-wrapper"));
