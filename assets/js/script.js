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
      450: { slidesPerView: 1.5},
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
