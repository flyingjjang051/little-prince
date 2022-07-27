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
    end: "bottom+=200% top",
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
  })
  .from("#mainVisual", {
    duration: 5,
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
  .from(CSSRulePlugin.getRule("#main #introduce .main strong:before"), {
    cssRule: {
      scaleX: 0,
    },
  })
  .from("#introduce .no", {
    opacity: 0,
  })
  .from("#introduce .sub .char", {
    opacity: 0,
    stagger: {
      each: 0.05,
    },
  })
  .from("#introduce .imgContents .prince", {
    scale: 0,
    opacity: 0,
  });

const introduce02TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#introduce02",
    markers: true,
    pin: true,
    scrub: 1,
    start: "top top",
    end: "bottom top",
  },
});
introduce02TL
  .to("#introduce02 .door-in", {
    rotationY: -45,
  })
  .from("#introduce02 .intro .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.05,
    },
  })
  .from(CSSRulePlugin.getRule("#main #introduce02 .me strong:before"), {
    cssRule: {
      scaleX: 0,
    },
    stagger: {
      each: 1,
    },
  });

const portfolioTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio",
    markers: true,
    pin: true,
    scrub: 1,
    start: "top top",
    end: "bottom top",
  },
});
portfolioTL
  .from("#portfolio .main .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.05,
    },
  })
  .from(CSSRulePlugin.getRule("#main #portfolio .main strong:before"), {
    cssRule: {
      scaleX: 0,
    },
    stagger: {
      each: 1,
    },
  })
  .from("#portfolio .sub .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.05,
    },
  })
  .from("#portfolio .no", {
    opacity: 0,
  })
  .from("#portfolio .prince", {
    opacity: 0,
    y: "+=300",
  });
const portfolioListTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolioList",
    markers: true,
    pin: true,
    scrub: 1,
    start: "top top",
    end: "bottom top",
  },
});
portfolioListTL
  .from("#portfolioList h2 .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.05,
    },
  })
  .from("#portfolioList .no", {
    opacity: 0,
  })
  .from("#portfolioList h3 .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.05,
    },
  })
  .from("#portfolioList .linkList li", {
    opacity: 0,
    scale: 0,
    stagger: {
      each: 0.05,
    },
  });

const roseTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#rose",
    markers: true,
    pin: true,
    scrub: 1,
    start: "top top",
    end: "bottom top",
  },
});
roseTL
  .from("#rose .main .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.05,
    },
  })
  .from(CSSRulePlugin.getRule("#main #rose .txtContents p strong:before"), {
    cssRule: {
      scaleX: 0,
    },
  })
  .from("#rose .no", {
    opacity: 0,
  })
  .from("#rose .sub .char", {
    opacity: 0,
    x: "+=100",
    stagger: {
      each: 0.05,
    },
  })
  .from("#rose .prince", {
    opacity: 0,
    y: "+=300",
  });
