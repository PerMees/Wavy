import gsap from "../../node_modules/gsap/index.js";

// **Multi Level dropdowns
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
// End Multi level dropdown**

// **Site Nav
window.openNav = () => {
  document.getElementById("mySidenav").style.width = "80%";
  document.getElementById("mySidenav").style.overflowX = "visible";
  document.querySelector("body").style.marginLeft = "80%";
  document.querySelector("html").style.overflow = "hidden";
  document.querySelectorAll(".header>nav>a").forEach((element) => {
    element.style.opacity = 0;
    element.style.visibility = "hidden";
  });
};

window.closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.overflowX = "hidden";
  document.querySelector("body").style.marginLeft = "0";
  document.querySelector("html").style.overflow = "visible";
  document.querySelectorAll(".header>nav>a").forEach((element) => {
    element.style.opacity = 1;
    element.style.visibility = "visible";
  });
};
// End Site Nav**

// **scroll
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
// end**

// **Gsap Animation
let tl = gsap.timeline({});
// End Animation**
