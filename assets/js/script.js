document.addEventListener("DOMContentLoaded", () => {
  const myBlogNavigation = document.querySelector(".blog-navigation");
  let productsSwiper = new Swiper("#blogSwiper", {
    slidesPerView: 1,
    loop: true,
    effect: "slide",
    spaceBetween: 10,
    navigation: {
      nextEl: ".blog-navigation-next",
      prevEl: ".blog-navigation-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      450: { slidesPerView: 1.5 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
  productsSwiper.init();
  const newBlogSwiper = productsSwiper.slides.length;

  if (newBlogSwiper > 4) {
    console.log("red");
    myBlogNavigation.classList.remove("notNavigation");
  } else {
    myBlogNavigation.classList.add("notNavigation");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#5b8c51 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
});

document.addEventListener("DOMContentLoaded", () => {
  let prodListSwiper = new Swiper(".productsSwiper", {
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 10,
    effect: "slide",
    direction: "horizontal",
    keyboard: true,
    navigation: false,
    breakpoints: {
      345: {
        slidesPerView: 1.5,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
      1399: {
        slidesPerView: 5,
      },
    },
    allowTouchMove: true,
    pagination: {
      enable: false,
      el: ".products-pagination",
      clickable: true,
      type: "bullets",
      bulletElement: "span",
      bulletClass: "products-bullet swiper-pagination-bullet",
      bulletActiveClass:
        "products-active-bullet swiper-pagination-bullet-active",
    },
  });
  prodListSwiper.init();
});

document.addEventListener("DOMContentLoaded", () => {
  let advantagesSwiper = new Swiper(".aboutAdvantageSwiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    effect: "fade",
    pagination: {
      el: ".aboutAdvantagesNavigation li",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },
  });
  const paginationBullets = document.querySelectorAll(
    ".aboutAdvantagesNavigation li"
  );

  paginationBullets.forEach((el, index) => {
    el.addEventListener("mouseover", () => {
      advantagesSwiper.slideToLoop(index);
    });
  });

  advantagesSwiper.on("slideChange", () => {
    const activeIndex = advantagesSwiper.realIndex;
    paginationBullets.forEach((el, index) => {
      if (index === activeIndex) {
        el.classList.add("activePagination");
      } else {
        el.classList.remove("activePagination");
      }
    });
  });
  advantagesSwiper.emit("slideChange");

  advantagesSwiper.init();
});

document.addEventListener("DOMContentLoaded", () => {
  let prodListSwiper = new Swiper(".myHeroSlider", {
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: 10,
    effect: "fade",
    direction: "horizontal",
    keyboard: true,
    navigation: false,
    allowTouchMove: true,
    pagination: {
      enable: false,
      el: ".hero-pagination",
      clickable: true,
      type: "bullets",
      bulletElement: "span",
      bulletClass: "hero-pagination-bullet swiper-pagination-bullet",
      bulletActiveClass:
        "hero-pagination-active-bullet swiper-pagination-bullet-active",
    },
  });
  prodListSwiper.init();
});
