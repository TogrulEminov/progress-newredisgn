document.addEventListener("DOMContentLoaded", () => {
  const myBlogNavigation = document.querySelector(".blog-navigation");
  let productsSwiper = new Swiper("#blogSwiper", {
    slidesPerView: 1,
    loop: true,
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
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
});
