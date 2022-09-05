let swiper = new Swiper(window.innerWidth < 768 ? ".mySwiper" : "", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  