import './style.css';

/* ==================== Load Navbar ==================== */
document.addEventListener("DOMContentLoaded", async () => {
  const navbarContainer = document.getElementById("navbar-index");

  try {
    const response = await fetch("/layout/navbar-index.html", { cache: "no-store" });
    const html = await response.text();
    navbarContainer.innerHTML = html;

    initNavbar();
  } catch (error) {
    console.error("Gagal memuat navbar:", error);
  }
});

/* ==================== Fitur Scroll ==================== */
const scrollButtons = document.getElementById('scrollButtons');
const scrollUpBtn = document.getElementById('scrollUp');
const scrollDownBtn = document.getElementById('scrollDown');

function updateScrollButtons() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop <= 0) {
    scrollUpBtn.style.display = 'none';
    scrollDownBtn.style.display = 'flex';
  } else if (scrollTop + clientHeight >= scrollHeight) {
    scrollUpBtn.style.display = 'flex';
    scrollDownBtn.style.display = 'none';
  } else {
    scrollUpBtn.style.display = 'flex';
    scrollDownBtn.style.display = 'flex';
  }

  scrollButtons.classList.add('opacity-100');
  scrollButtons.classList.remove('pointer-events-none');
}

function handleButtonClick(button) {
  const icon = button.querySelector('i');

  button.classList.add('bg-black', 'text-white', 'scale-110');
  icon.classList.add('text-white');

  button.classList.remove('bg-gradient-to-br', 'from-cyan-400', 'to-blue-600');

  const top = button.id === 'scrollUp' ? -window.innerHeight : window.innerHeight;
  window.scrollBy({ top, behavior: 'smooth' });

  setTimeout(() => {
    button.classList.remove('bg-black', 'text-white', 'scale-110');
    icon.classList.remove('text-white');
    button.classList.add('bg-gradient-to-br', 'from-cyan-400', 'to-blue-600');
  }, 600);
}

window.addEventListener('scroll', updateScrollButtons);

scrollUpBtn.addEventListener('click', () => handleButtonClick(scrollUpBtn));
scrollDownBtn.addEventListener('click', () => handleButtonClick(scrollDownBtn));

updateScrollButtons();

/* ==================== SLIDE 3 ==================== */
const slider = document.getElementById('slider');
const slides = slider.children;
const indicators = document.getElementById('indicators').children;
let currentIndex = 2;

function updateSlider() {
  const cardWidth = slides[0].offsetWidth + 24;
  const containerWidth = slider.parentElement.offsetWidth;
  const offset = (containerWidth - cardWidth) / 2;

  slider.style.transform = `translateX(${-currentIndex * cardWidth + offset}px)`;

  [...slides].forEach((slide, i) => {
    slide.classList.remove(
      'scale-110', 'border-4', 'border-blue-500', 'shadow-xl',
      'opacity-70', 'scale-90', 'z-10', 'z-0'
    );

    if (i === currentIndex) {
      slide.classList.add(
        'scale-110', 'border-4', 'border-blue-500', 'shadow-xl',
        'z-10', 'transition-transform', 'duration-500', 'ease-in-out'
      );
    } else {
      slide.classList.add(
        'opacity-70', 'scale-90', 'z-0', 'transition-transform', 'duration-500', 'ease-in-out'
      );
    }
  });

  [...indicators].forEach((dot, i) => {
    dot.className = `w-3 h-3 rounded-full transition-colors duration-500 ${i === currentIndex ? 'bg-cyan-400' : 'bg-gray-300'
      }`;
  });
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

[...indicators].forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
  });
});

[...slides].forEach((card, i) => {
  card.addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
  });
});

window.addEventListener('resize', updateSlider);

let autoplay = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}, 5000);

slider.addEventListener('mouseenter', () => clearInterval(autoplay));
slider.addEventListener('mouseleave', () => {
  autoplay = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }, 5000);
});

updateSlider();


/*================== JS SLIDE 6 ===================*/

const sliderBerita = document.getElementById('sliderBerita');
const wrapperBerita = document.getElementById('sliderWrapperBerita');
const slidesBerita = sliderBerita.children;
const indicatorsBerita = document.querySelectorAll('#indicatorsBerita button');
let currentIndexBerita = 0;

function updateSliderBerita() {
  const cardWidth = slidesBerita[0].offsetWidth;
  const gap = parseInt(getComputedStyle(sliderBerita).gap) || 0;
  const totalWidth = cardWidth + gap;

  const containerWidth = wrapperBerita.offsetWidth;
  const offset = (containerWidth - cardWidth) / 2;

  const translateX = -currentIndexBerita * totalWidth + offset;
  sliderBerita.style.transform = `translateX(${translateX}px)`;

  [...slidesBerita].forEach((slide, i) => {
    slide.classList.remove(
      'scale-110', 'border-4', 'border-blue-500', 'shadow-xl',
      'opacity-70', 'scale-90', 'z-10', 'z-0'
    );
    if (i === currentIndexBerita) {
      slide.classList.add(
        'scale-110', 'border-4', 'border-blue-500', 'shadow-xl', 'z-10',
        'transition-transform', 'duration-500', 'ease-in-out'
      );
    } else {
      slide.classList.add(
        'opacity-70', 'scale-90', 'z-0', 'transition-transform', 'duration-500', 'ease-in-out'
      );
    }
  });

  indicatorsBerita.forEach((dot, i) => {
    dot.className = `w-3 h-3 rounded-full transition-colors duration-500 ${i === currentIndexBerita ? 'bg-cyan-400' : 'bg-gray-300'
      }`;
    dot.setAttribute('aria-current', i === currentIndexBerita ? 'true' : 'false');
  });
}

document.getElementById('prevBtnBerita').addEventListener('click', () => {
  currentIndexBerita = (currentIndexBerita - 1 + slidesBerita.length) % slidesBerita.length;
  updateSliderBerita();
});

document.getElementById('nextBtnBerita').addEventListener('click', () => {
  currentIndexBerita = (currentIndexBerita + 1) % slidesBerita.length;
  updateSliderBerita();
});

indicatorsBerita.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndexBerita = i;
    updateSliderBerita();
  });
});

[...slidesBerita].forEach((card, i) => {
  card.addEventListener('click', () => {
    currentIndexBerita = i;
    updateSliderBerita();
  });
});

window.addEventListener('resize', updateSliderBerita);

let autoplayBerita = setInterval(() => {
  currentIndexBerita = (currentIndexBerita + 1) % slidesBerita.length;
  updateSliderBerita();
}, 5000);

sliderBerita.addEventListener('mouseenter', () => clearInterval(autoplayBerita));
sliderBerita.addEventListener('mouseleave', () => {
  autoplayBerita = setInterval(() => {
    currentIndexBerita = (currentIndexBerita + 1) % slidesBerita.length;
    updateSliderBerita();
  }, 5000);
});

updateSliderBerita();


/* ===================== JS SLIDE 7 ==================== */
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("videoSlider");
  const prevBtn = document.getElementById("videoPrevBtn");
  const nextBtn = document.getElementById("videoNextBtn");
  const indicatorContainer = document.getElementById("videoIndicators");

  if (!slider || !prevBtn || !nextBtn || !indicatorContainer) return;

  const cards = Array.from(slider.querySelectorAll(".video-card"));
  let currentIndex = 0;
  let autoplay;

  cards.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className =
      "w-3 h-3 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300";
    dot.addEventListener("click", () => {
      goToSlide(i);
      resetAutoplay();
    });
    indicatorContainer.appendChild(dot);
  });

  const indicators = indicatorContainer.querySelectorAll("button");

  function setActive(index) {
    indicators.forEach((dot, i) => {
      dot.classList.toggle("bg-cyan-400", i === index);
      dot.classList.toggle("bg-gray-300", i !== index);
    });
  }

  function goToSlide(index) {
    if (!cards[index]) return;
    const card = cards[index];
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const sliderWidth = slider.clientWidth;

    let left = cardLeft - (sliderWidth - cardWidth) / 2;

    const lastCard = cards[cards.length - 1];
    const maxScroll = lastCard.offsetLeft - (sliderWidth - lastCard.offsetWidth) / 2;

    if (left < 0) left = 0;
    if (left > maxScroll) left = maxScroll;

    slider.scrollTo({ left, behavior: "smooth" });
    currentIndex = index;
    setActive(index);
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    goToSlide(currentIndex);
    resetAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    goToSlide(currentIndex);
    resetAutoplay();
  });

  function startAutoplay() {
    autoplay = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      goToSlide(currentIndex);
    }, 6000);
  }

  function stopAutoplay() {
    clearInterval(autoplay);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  window.addEventListener("resize", () => goToSlide(currentIndex));

  goToSlide(0);
  startAutoplay();
});