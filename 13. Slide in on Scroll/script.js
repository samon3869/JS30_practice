function checkSlide() {
  const pictures = document.querySelectorAll(".slide-in");
  pictures.forEach((picture)=>{
    const slideInAt = window.scrollY + window.innerHeight - picture.offsetHeight / 2;
    const pictureTop = picture.offsetTop;
    const pictureBottom = pictureTop + picture.offsetHeight;
    const isHalfShown = slideInAt > pictureTop;
    const isScrolledPast = window.scrollY > pictureBottom;
    if (isHalfShown && !isScrolledPast) {
      picture.classList.add("active");
    } else {
      picture.classList.remove("active");
    }
  })
  console.log("checkActivation");
}

function debounce(func, wait = 20) {
  let timeout;
  return (...args) => {
    const context = this;
    const later = () => {
      func.apply(context, ...args);
    };
    if (timeout) {clearTimeout(timeout);}
    timeout = setTimeout(later, wait);
  }
}

    window.addEventListener("scroll", debounce(checkSlide));