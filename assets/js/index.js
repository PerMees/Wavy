import gsap from "../../node_modules/gsap/index.js";
import ScrollTrigger from "../../node_modules/gsap/ScrollTrigger.js";
/**  Multi Level dropdowns*/
$(function () {
  $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    $(this).siblings().toggleClass("show");

    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });
  });
});
/**  End Multi level dropdown*/

/**  Site Nav*/
window.openNav = () => {
  document.querySelector("#mySidenav").style.width = "80%";
  document.querySelector("#mySidenav").style.overflowX = "visible";
  document.querySelector("html").style.marginLeft = "80%";
  document.querySelector("html").style.overflow = "hidden";
  document.querySelector("html").classList.add("opened");
  document.querySelectorAll(".header>nav>a").forEach((element) => {
    element.style.opacity = 0;
    element.style.visibility = "hidden";
  });
};

window.closeNav = () => {
  document.querySelector("#mySidenav").style.width = "0";
  document.querySelector("#mySidenav").style.overflowX = "hidden";
  document.querySelector("html").style.marginLeft = "0";
  document.querySelector("html").style.overflow = "visible";
  document.querySelector("html").classList.remove("opened");
  document.querySelectorAll(".header>nav>a").forEach((element) => {
    element.style.opacity = 1;
    element.style.visibility = "visible";
  });
};
/**  End Site Nav */

/**  Change Header when srcoll*/
window.onscroll = () => {
  let $ = (e) => document.querySelector(e);
  if (window.scrollY > 300) {
    $(".header").style.top = "0px";
    $(".header").classList.add("active");
  } else if (window.scrollY > 60) {
    $(".header").style.top = "-100px";
  } else {
    $(".header").style.top = "0";
    $(".header").classList.remove("active");
  }
};
/**  End Header when srcoll*/

/**  Gsap Animation*/
const tl = gsap.timeline({
  smoothChildTiming: true,
});
gsap.registerPlugin(ScrollTrigger);

const animateOnScroll = (list, name) => {
  for (let i = 0; i < list.length; i++) {
    gsap.to(`#${name}-${i + 1}`, {
      scrollTrigger: {
        trigger: `#${name}-${i + 1}`,
        scrubt: 1,
        start: "20% 90%",
        end: () =>
          "+=" + document.querySelector(`#${name}-${i + 1}`).offSetWidth,
        marker: true,
      },
      opacity: 1,
      delay: 0.3,
    });
  }
};
// Carousel
tl.fromTo(
  ".about > div > div > div:first-child",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1 },
  0.5
);
tl.fromTo(
  ".about > div > div > div:last-child",
  { opacity: 0 },
  { opacity: 1 },
  ">-0.3"
);
// End Animation Carousel

// Team

const teamList = document.querySelectorAll(".team__item");
animateOnScroll(teamList, "team__item");

// End Team

// Courses
const courseList = document.querySelectorAll(".course__item");
animateOnScroll(courseList, "course__item");
// End Courses

/** End Gsap Animation */
