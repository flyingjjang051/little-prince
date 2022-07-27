//popup
//$(document).ready(function () {});

const disappear = function () {
  gsap.to("#popup", {
    top: -600,
    ease: "back.in",
    duration: 0.75,
    onComplete: function () {
      $("#popup").hide();
    },
  });
};
$("#popup .btnClose").on("click", function () {
  disappear();
});
$("#popup .btnOneday").on("click", function () {
  disappear();
  Cookies.set("popupDisplay", "none", { expires: 1 });
});
if (Cookies.get("popupDisplay") !== "none") {
  $("#popup").show();
}

// scroll-trigger
Splitting();

const mainVisualTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#mainVisual",
    markers: true,
    scrub: 1,
    start: "top top",
    pin: true,
  },
});
mainVisualTL
  .from("#mainVisual .rose01", {
    opacity: 0,
  })
  .from("#mainVisual .rose02", {
    opacity: 0,
  })

  .from("#mainVisual .title .char", {
    opacity: 0,
    stagger: {
      each: 0.05,
    },
  })
  .from("#mainVisual .subTitle  .char", {
    opacity: 0,
    stagger: {
      each: 0.05,
    },
  });

const introduceTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#introduce",
    markers: true,
    scrub: 1,
    start: "top top",
    pin: true,
  },
});
introduceTL
  .from("#introduce .main p .char", {
    opacity: 0,
    stagger: {
      each: 0.05,
    },
  })
  .from("#introduce .main strong .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.05,
    },
  })
  .from("#introduce .main strong .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.05,
    },
  });
