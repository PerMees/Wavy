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
  document.querySelector("#mySidenav").style.width = "300px";
  document.querySelector("html").style.marginLeft = "300px";
  document.querySelector("#mySidenav").style.overflowY = "visible";
  document.querySelector(".header__nav").style.overflowX = "visible";
  document.querySelector("html").style.overflowX = "hidden";
  document.querySelector("html").classList.add("opened");
  document.querySelectorAll(".header>nav>a").forEach((element) => {
    element.style.opacity = 0;
    element.style.visibility = "hidden";
  });
};
window.closeNav = () => {
  document.querySelector("#mySidenav").style.width = "0";
  document.querySelector("#mySidenav").style.overflowY = "hidden";
  document.querySelector("html").style.marginLeft = "0";
  document.querySelector(".header__nav").style.overflowX = "hidden";
  document.querySelector("html").style.overflowX = "visible";
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
  if (window.innerWidth >= 1200) {
    $("#logo").style.opacity = 0;
    $("#logo").style.visibility = "hidden";
  }
  if (window.scrollY > 400) {
    $(".header").style.top = "0px";
    $(".header").classList.add("active");
    if (window.innerWidth >= 1200) {
      $(".header").style.top = "0px";
      $(".header__nav").style.top = "0px";
      $(".header").classList.add("activeLG");
      $(".header__nav").classList.add("active");
      $(".logo").style.opacity = 0;
      $(".logo").style.visibility = "hidden";
      $(".logo").style.maxWidth = "0";

      $(".header__nav__xl>div>div>div>a>img").style.visibility = "hidden";
      $(".header__nav__xl>div>div>div>a>img").style.opacity = "0";
    }
  } else if (window.scrollY > 200) {
    $(".header").style.top = "-100px";
    $(".header__nav").style.top = "-100px";
  } else {
    $(".header").style.top = "0";
    $(".header").classList.remove("active");
    $(".header__nav").style.top = "0";
    if (window.innerWidth >= 1200) {
      $(".header").style.top = "0px";
      $(".header").classList.remove("activeLG");
      $(".header__nav").classList.remove("active");
      $(".logo").style.opacity = 1;
      $(".logo").style.visibility = "visible";
      $(".logo").style.maxWidth = "10rem";

      $(".header__nav__xl>div>div>div>a>img").style.visibility = "visible";
      $(".header__nav__xl>div>div>div>a>img").style.opacity = "1";
    }
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
// Footer
const footerList = document.querySelectorAll(".footer__item");
animateOnScroll(footerList, "footer__item");
// End Footer

/** End Gsap Animation */

/** MediaQuery */
const headerMediaQuery = () => {
  let $ = (e) => document.querySelector(e);
  if (window.innerWidth >= 1200) {
    $(".header__nav__xl").style.display = "block";
    // Nav hover
    const nav = document.querySelectorAll(".header__nav__xl .myNavbar .menu>a");
    for (let index = 0; index < nav.length; index++) {
      const submenu = document.querySelector(
        `.header__nav__xl .myNavbar .menu:nth-child(${index + 2}) .submenu`
      );
      let flag1 = false;
      let flag2 = false;
      nav[index].onmouseover = () => {
        flag1 = true;
        show(index, flag1, flag2);
      };
      nav[index].onmouseout = () => {
        flag1 = false;
        show(index, flag1, flag2);
      };
      submenu.onmouseover = () => {
        flag2 = true;
        show(index, flag1, flag2);
      };
      submenu.onmouseout = () => {
        flag2 = false;
        show(index, flag1, flag2);
      };
    }
    const show = (index, ...flags) => {
      const submenu = document.querySelector(
        `.header__nav__xl .myNavbar .menu:nth-child(${index + 2}) .submenu`
      );
      let flag = true;
      for (let i = 0; i < flags.length; i++) {
        if (flags[i]) {
          flag = true;
          break;
        }
        flag = false;
      }
      if (flag) {
        submenu.style.opacity = 1;
        submenu.style.visibility = "visible";
        $(".active-icon").style.opacity = 0;
        $(".active-icon").style.visibility = "hidden";
        $(".active-icon").style.transform = "scale(1.4)";
      } else {
        submenu.style.opacity = 0;
        submenu.style.visibility = "hidden";
        $(".active-icon").style.opacity = 1;
        $(".active-icon").style.visibility = "visible";
        $(".active-icon").style.transform = "scale(1)";
      }
    };
    // End Nav Hover lv1
    // Nav hover lv2
    let flaglv2_1 = false;
    let flaglv2_2 = false;
    let flaglv2_3 = false;
    let flaglv2_4 = false;
    $(".btnsubmenu-right-1").onmouseover = () => {
      flaglv2_1 = true;
      showlv2(flaglv2_1, flaglv2_2);
    };
    $(".submenu-right-1").onmouseover = () => {
      flaglv2_2 = true;
      showlv2(flaglv2_1, flaglv2_2);
    };
    $(".btnsubmenu-right-1").onmouseout = () => {
      flaglv2_1 = false;
      showlv2(flaglv2_1, flaglv2_2);
    };
    $(".submenu-right-1").onmouseout = () => {
      flaglv2_2 = false;
      showlv2(flaglv2_1, flaglv2_2);
    };
    $(".btnsubmenu-right-2").onmouseover = () => {
      flaglv2_3 = true;
      showlv2(flaglv2_3, flaglv2_4);
    };
    $(".submenu-right-2").onmouseover = () => {
      flaglv2_4 = true;
      showlv2(flaglv2_3, flaglv2_4);
    };
    $(".btnsubmenu-right-2").onmouseout = () => {
      flaglv2_3 = false;
      showlv2(flaglv2_3, flaglv2_4);
    };
    $(".submenu-right-2").onmouseout = () => {
      flaglv2_4 = false;
      showlv2(flaglv2_3, flaglv2_4);
    };
    const showlv2 = (...flags) => {
      if (!flaglv2_1) {
        $(".submenu-right-1").style.opacity = 0;
        $(".submenu-right-1").style.visibility = "hidden";
      } else if (flaglv2_1 || flaglv2_2) {
        $(".submenu-right-1").style.opacity = 1;
        $(".submenu-right-1").style.visibility = "visible";
      }
      if (!flaglv2_3) {
        $(".submenu-right-2").style.opacity = 0;
        $(".submenu-right-2").style.visibility = "hidden";
      } else if (flaglv2_3 || flaglv2_4) {
        $(".submenu-right-2").style.opacity = 1;
        $(".submenu-right-2").style.visibility = "visible";
      }
    };
    // End Nav Hover lv2
    // Done Nav Hover
  } else {
    $(".header__nav__xl").style.display = "none";
  }
};
headerMediaQuery();
window.onresize = () => headerMediaQuery();
/** End Media Query */
