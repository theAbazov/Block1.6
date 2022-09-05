const handleMore = (btn, el, text, img) => {
    const handleClick = () => {
      el.classList.toggle(`show`);
      img.classList.toggle("rotate");
      if (el.classList.contains("show")) {
        text.textContent = "Скрыть";
      } else {
        text.textContent = "Показать все";
      }
    };
    btn.addEventListener("click", handleClick);
  };
  
  const brandMore = document.getElementById("brand-more");
  const brandSwiper = document.getElementById("brand-swiper");
  const brandMoreText = document.getElementById("more-text-2");
  const brandMoreImg = document.getElementById("more-img-2");
  
  handleMore(brandMore, brandSwiper, brandMoreText, brandMoreImg);
  
  const descrMore = document.getElementById("descr-more");
  const descrContent = document.getElementById("descr-text");
  const descrMoreText = document.getElementById("more-text-1");
  const descrMoreImg = document.getElementById("more-img-1");
  
  const handleClick = (el, text, img) => {
    el.classList.toggle(`show`);
    img.classList.toggle("rotate");
    if (el.classList.contains("show")) {
      text.textContent = "Скрыть";
    } else {
      text.textContent = "Читать далее";
    }
  };
  descrMore.addEventListener("click", () =>
    handleClick(descrContent, descrMoreText, descrMoreImg)
  );
  
  const typeMore = document.getElementById("type-more");
  const typeContent = document.getElementById("type-swiper");
  const typeMoreText = document.getElementById("more-text-3");
  const typeMoreImg = document.getElementById("more-img-3");
  
  handleMore(typeMore, typeContent, typeMoreText, typeMoreImg);
  