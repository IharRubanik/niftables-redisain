window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    function ifPreloaderLoad() {
      document.querySelector(".preloader").classList.add("remove");
      document.querySelector(".blue-triangle").classList.add("active");
      document.querySelector(".purple-triangle").classList.add("active");
      document.querySelector(".city").classList.add("active");
      document.querySelector(".main-info__text b").classList.add("active");
      document.querySelector("body").classList.remove("active");
    }

    function removePreloader() {
      document.querySelector(".preloader").remove();
      document.querySelector("html").style.overflowY = "auto";
    }

    setTimeout(ifPreloaderLoad, 3000);
    setTimeout(removePreloader, 3500);
  });

  let arrActive = ([] = document.querySelectorAll(
    ".header-button, .header, .header-content, .header-name, body, html"
  ));

  document.querySelector(".header-button").onclick = function () {
    for (i = 0; i < arrActive.length; i++) {
      arrActive[i].classList.toggle("active");
    }
  };

  const mediaQuery = window.matchMedia("only screen and (max-width: 1200px)");
  const mediaQueryMobile = window.matchMedia("only screen and (max-width: 600px)");

  let footerBg = document.querySelector('.footer__background');
  function changeBackground(){
    if(mediaQueryMobile.matches) {
      footerBg.src = './img/contact/footet-background-mobile.png'
    }
    else{
      footerBg.src = './img/contact/footet-background.webp'
    }
  }
  changeBackground()




  if (mediaQuery.matches) {
    // Accordion
    const accordionItem = document.querySelectorAll(".accordion-item"),
      accordionTitle = document.querySelectorAll(".top-block"),
      accordionDescriptions = document.querySelectorAll(".bottom-block");
    for (let i = 0; i < accordionItem.length; i++) {
      accordionItem[i].style.height = `${accordionTitle[i].scrollHeight}px`;
      accordionItem[i].addEventListener("click", function (e) {
        if (accordionItem[i].classList.contains("show")) {
          accordionItem[i].style.height = `${accordionTitle[i].scrollHeight}px`;
          accordionItem[i].classList.remove("show");
        } else {
          accordionItem[i].style.height = `${
            accordionTitle[i].scrollHeight +
            accordionDescriptions[i].scrollHeight
          }px`;
          accordionItem[i].classList.add("show");
          removeAccordion(e.currentTarget);
        }
      });
    }
    function removeAccordion(item) {
      for (let i = 0; i < accordionItem.length; i++) {
        if (item !== accordionItem[i]) {
          accordionItem[i].classList.remove("show");
          accordionItem[i].style.height = `${accordionTitle[i].scrollHeight}px`;
        }
      }
    }
  }

  // Process
  const sticky = document.querySelector(".process-parent");
  const gridItems = document.querySelectorAll(".process-parent__item");
  const processArrow = document.querySelector(".process__arrow");
  const processArrowItem = document.querySelectorAll(".process__arrow-item");
  const blockLine = document.querySelectorAll(".item__block-line");
  const dottedLine = document.querySelectorAll(".dotted-line");
  const manElem = document.querySelectorAll(".man-elem");
  const line = document.querySelectorAll(".line");
  const oval = document.querySelector(".oval");
  const line1 = document.querySelector(".line-1");
  const line2 = document.querySelector(".line-2");
  const line3 = document.querySelector(".line-3");
  const line4 = document.querySelector(".line-4");
  const line5 = document.querySelector(".line-5");
  const line6 = document.querySelector(".line-6");
  const line7 = document.querySelector(".line-7");
  const line8 = document.querySelector(".line-8");
  const line9 = document.querySelector(".line-9");
  const line10 = document.querySelector(".line-10");

  let zi = 0;

  function initProcess(zi) {
    if (window.innerWidth <= 1200) {
      document.querySelector("#first-number").innerHTML = `0${zi + 1}`;
    }
    for (let j = 0; j < gridItems.length; j++) {
      gridItems[j].classList.remove("active");
      gridItems[j].classList.remove("next");
      if (j < zi) {
        gridItems[j].classList.add("prev");
        gridItems[j].classList.remove("next");
        gridItems[j].classList.remove("active-reverse");
      } else if (j > zi) {
        gridItems[j].classList.add("next");
        gridItems[j].classList.remove("prev");
        gridItems[j].classList.remove("active-reverse");
      }
    }

    if (gridItems[zi].classList.contains("prev")) {
      gridItems[zi].classList.add("active-reverse");
      gridItems[zi].classList.remove("active");
      gridItems[zi].classList.remove("prev");
    } else if (!gridItems[zi].classList.contains("active-reverse")) {
      gridItems[zi].classList.add("active");
    }

    // Line
    if (zi == 0) {
      processArrow.style.width = "11.042vw";
    } else if (zi == 1) {
      processArrow.style.width = "23.438vw";
    } else if (zi == 2) {
      processArrow.style.width = "35.833vw";
    } else if (zi == 3) {
      processArrow.style.width = "48.229vw";
    } else if (zi == 4) {
      processArrow.style.width = "60.625vw";
    } else if (zi == 5) {
      processArrow.style.width = "72.865vw";
    }
    for (var x = 0; x < processArrowItem.length; x++) {
      manElem[x].classList.add("active");
      line[x].classList.add("active");
      processArrowItem[x].classList.remove("back");
      if (x < zi) {
        processArrowItem[x].classList.add("back");
        processArrowItem[x].classList.remove("active");
        manElem[x].classList.add("active");
      } else if (x == zi) {
        processArrowItem[x].classList.remove("back");
        processArrowItem[x].classList.add("active");
        processArrowItem[x].classList.remove("next");
        manElem[x].classList.add("active");
      } else if (x > zi) {
        processArrowItem[x].classList.add("next");
        processArrowItem[x].classList.remove("active");
        manElem[x].classList.remove("active");
      }
      if (zi == 1) {
        line1.classList.add("active");
        line2.classList.add("active");
      } else if (zi < 1) {
        line1.classList.remove("active");
        line2.classList.remove("active");
      }
      if (zi == 2) {
        line3.classList.add("active");
        line4.classList.add("active");
      } else if (zi < 2) {
        line3.classList.remove("active");
        line4.classList.remove("active");
      }
      if (zi == 3) {
        line5.classList.add("active");
        line6.classList.add("active");
      } else if (zi < 3) {
        line5.classList.remove("active");
        line6.classList.remove("active");
      }
      if (zi == 4) {
        line7.classList.add("active");
        line8.classList.add("active");
      } else if (zi < 4) {
        line7.classList.remove("active");
        line8.classList.remove("active");
      }
      if (zi == 5) {
        line9.classList.add("active");
        line10.classList.add("active");
        oval.classList.add("active");
      } else if (zi < 5) {
        line9.classList.remove("active");
        line10.classList.remove("active");
        oval.classList.remove("active");
      }
    }
  }

  function checkProcessSize() {
    if (window.innerWidth > 1200) {
      const scroll = window.pageYOffset - sticky.offsetTop,
        height = sticky.scrollHeight;
      scroll < 1 * (height / 6) - 600
        ? (zi = 0)
        : scroll < 2 * (height / 6) - 600
        ? (zi = 1)
        : scroll < 3 * (height / 6) - 600
        ? (zi = 2)
        : scroll < 4 * (height / 6) - 600
        ? (zi = 3)
        : scroll < 5 * (height / 6) - 600
        ? (zi = 4)
        : (zi = 5);
      initProcess(zi);
    }
  }
  checkProcessSize();

  window.addEventListener("scroll", function () {
    checkProcessSize();
  });

  window.addEventListener("resize", function () {
    checkProcessSize();
    if (window.innerWidth > 600) {
      initProcess(0);
    }
    changeBackground()
  });

  window.addEventListener("orientationchange", function () {
    checkProcessSize();
    if (window.innerWidth > 600) {
      initProcess(0);
    }
    changeBackground()
  });

  // planets

  if (!mediaQuery.matches) {
    function hasTextContent(element) {
      const textContent = element.textContent.trim();
      return textContent.length > 0;
    }

    const planets = document.querySelectorAll(".planet");
    planets.forEach((planet) => {
      planet.addEventListener("mouseover", () => {
        const descriptionsContainer = planet.querySelector(
          ".planet__descriptions-container"
        );
        const descriptions = planet.querySelector(".planet-descriptions");
        if (hasTextContent(descriptions)) {
          descriptionsContainer.style.height = descriptions.offsetHeight + "px";
          planet.classList.add("hover");
        }
      });

      planet.addEventListener("mouseout", () => {
        const descriptionsContainer = planet.querySelector(
          ".planet__descriptions-container"
        );
        descriptionsContainer.style.height = 0;
        planet.classList.remove("hover");
      });
    });

    function updateWrapperHeight() {
      const wrapper = document.querySelector(".slider__text-wrapper");
      const activeText = document.querySelector(".slider-text.active");

      if (activeText) {
        const activeHeight = activeText.offsetHeight;
        wrapper.style.height = `${activeHeight}px`;
      }
    }
    updateWrapperHeight();
  }

  const slider1 = document.querySelector(".slider1");
  const slider2 = document.querySelector(".slider2");

  // функция следующий слайд
  function nextSlide(slides, dots, sliderText, planetSlide) {
    for (let i = 0; i < slides.length; i++) {
      if (
        slides[i].classList.contains("active") ||
        slides[i].classList.contains("active-reverse")
      ) {
        slides[i].classList.remove("active-reverse");
        slides[i].classList.add("active");
        if (i !== slides.length - 1) {
          slides[i].classList.remove("prev");
          slides[i].classList.remove("active");
          slides[i].classList.add("prev");
          slides[i + 1].classList.add("active");
          slides[i + 1].classList.remove("prev");
          slides[i + 1].classList.remove("next");
          try {
            dots[i].classList.remove("active");
            dots[i + 1].classList.add("active");
            sliderText[i].classList.remove("active");
            sliderText[i + 1].classList.add("active");
            planetSlide[i].classList.remove("active");
            planetSlide[i + 1].classList.add("active");
          } catch {
            return;
          }
        } else {
          slides[i].classList.remove("active");
          slides[i].classList.add("prev");
          slides[0].classList.add("active");
          slides[0].classList.remove("prev");
          slides[0].classList.remove("next");
          try {
            dots[i].classList.remove("active");
            dots[0].classList.add("active");
            sliderText[i].classList.remove("active");
            sliderText[0].classList.add("active");
            planetSlide[i].classList.remove("active");
            planetSlide[0].classList.add("active");
          } catch {
            return;
          }
        }
        break;
      }
    }
    updateWrapperHeight();
  }
  // функция предыдущий слайд
  function prevSlide(slides, dots, sliderText, planetSlide) {
    for (let i = 0; i < slides.length; i++) {
      if (
        slides[i].classList.contains("active") ||
        slides[i].classList.contains("active-reverse")
      ) {
        slides[i].classList.remove("active");
        slides[i].classList.add("active-reverse");
        if (i !== 0) {
          slides[i].classList.remove("active-reverse");
          slides[i].classList.add("next");
          slides[i - 1].classList.add("active-reverse");
          slides[i - 1].classList.remove("next");
          slides[i - 1].classList.remove("prev");
          try {
            dots[i].classList.remove("active");
            dots[i - 1].classList.add("active");
            sliderText[i].classList.remove("active");
            sliderText[i - 1].classList.add("active");
            planetSlide[i].classList.remove("active");
            planetSlide[i - 1].classList.add("active");
          } catch {
            return;
          }
        } else {
          slides[i].classList.add("next");
          slides[i].classList.remove("active-reverse");
          slides[slides.length - 1].classList.add("active-reverse");
          slides[slides.length - 1].classList.remove("next");
          slides[slides.length - 1].classList.remove("prev");
          try {
            dots[i].classList.remove("active");
            dots[slides.length - 1].classList.add("active");
            planetSlide[i].classList.remove("active");
            planetSlide[slides.length - 1].classList.add("active");
          } catch {
            return;
          }
        }
        break;
      }
    }
    updateWrapperHeight();
  }

  const canvas1 = document.getElementById("c1"),
    canvas2 = document.getElementById("c2"),
    canvas3 = document.getElementById("c3");

  let processProgress = 0;

  // Вешаем на прикосновение функцию handleTouchStart
  canvas1.addEventListener("touchstart", handleTouchStart, false);
  // canvas2.addEventListener('touchstart', handleTouchStart, false);
  canvas3.addEventListener("touchstart", handleTouchStart, false);
  // А на движение пальцем по экрану - handleTouchMove
  canvas1.addEventListener("touchmove", handleTouchMove, false);
  // canvas2.addEventListener('touchmove', handleTouchMove, false);
  canvas3.addEventListener("touchmove", handleTouchMove, false);

  canvas1.addEventListener("touchend", handleTouchEnd, false);
  // canvas2.addEventListener('touchend', handleTouchEnd, false);
  canvas3.addEventListener("touchend", handleTouchEnd, false);

  var xDown = null;
  var yDown = null;

  function handleTouchStart(evt) {
    xDown = evt.changedTouches[0].clientX;
    yDown = evt.changedTouches[0].clientY;
  }

  var timeoutHandle = window.setTimeout(swipeDelay, 400);

  function handleTouchEnd() {
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(swipeDelay, 400);
  }

  function swipeDelay() {
    document
      .querySelectorAll("canvas")
      .forEach((el) => el.classList.remove("touch"));
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.changedTouches[0].clientX;
    var yUp = evt.changedTouches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.classList.add("touch");

        if (this.id === "c1") {
          document
            .querySelector(
              ".features__slider.slider1 .slider__button .button.next"
            )
            .click();
        }
        if (this.id === "c2") {
          document
            .querySelector(".tokenomics__slider__button .button.next")
            .click();
        }
        if (this.id === "c3") {
          if (processProgress <= 4) {
            processProgress++;
            initProcess(processProgress);
          }
        }
      } else {
        /* right swipe */
        this.classList.add("touch");

        if (this.id === "c1") {
          document
            .querySelector(
              ".features__slider.slider1 .slider__button .button.prev"
            )
            .click();
        }
        if (this.id === "c2") {
          document
            .querySelector(".tokenomics__slider__button .button.prev")
            .click();
        }
        if (this.id === "c3") {
          if (processProgress != 0) {
            processProgress--;
            initProcess(processProgress);
          }
        }
      }
    } else {
      this.classList.remove("touch");
    }
    xDown = null;
    yDown = null;
  }

  // собираем элементы слайдера
  function toogleSlider(slider) {
    const buttons = slider.querySelectorAll(".button");
    const slides = slider.querySelectorAll(".slider-item");
    const dots = slider.querySelectorAll(".dots");
    const sliderText = slider.querySelectorAll(".slider-text");
    const planetSlide = slider.querySelectorAll(".planet-slide");
    function onButtonClick(e) {
      let direction = e.currentTarget.dataset.direction;
      if (direction === "next") {
        nextSlide(slides, dots, sliderText, planetSlide);
      } else {
        prevSlide(slides, dots, sliderText, planetSlide);
      }
    }
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", onButtonClick);
    }
  }
  toogleSlider(slider1);
  // toogleSlider(slider2)

  // Smooth scroll
  function scrollTo(element) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top:
        window.innerWidth <= 375
          ? element.offsetTop
          : element.offsetTop -
            document.querySelector(".header-logo").clientHeight,
    });
  }

  // Scroll script
  document.querySelectorAll(".scroll-link").forEach((el) =>
    el.addEventListener("click", function (e) {
      e.preventDefault();
      scrollTo(document.getElementById(`${el.href.split("#")[1]}`));
      arrActive.forEach((el) => el.classList.remove("active"));
    })
  );

  // Vision
  const wrapper = document.querySelector(".vision"),
    block = document.querySelector(".vision__content"),
    block_caption = document.querySelector(".vision__content h3"),
    visionLine = document.querySelector("#line_purpure"),
    planetTitles = document.querySelectorAll(".planet-wrapper .planet");

  const visionLineTablet = document.querySelector(".vision-line-progress"),
    trianglesTablet = document.querySelectorAll(
      ".vision-line-tablet .triangle-item"
    );

  window.addEventListener("scroll", function () {
    let containerStageWidth =
        document.querySelector(".container__stage").clientWidth,
      stageScrolled =
        -1 *
        (wrapper.getBoundingClientRect().y +
          block.getBoundingClientRect().y +
          block_caption.clientWidth);
    percentScrolled = stageScrolled / (containerStageWidth / 100);
    (visionLineWidth = document.querySelector(".vision-line").clientWidth),
      (stageTablet = document.querySelector(".vision__descripcion-container")),
      (headerHeight = document.querySelector(".header-inner").clientHeight),
      (percentTabletScrolled =
        -1 *
        (stageTablet.getBoundingClientRect().top /
          (stageTablet.clientHeight / 100)));

    if (window.innerWidth > 1200) {
      // VISION CONTENT MOTION
      block.style.transform = `translateX(${
        wrapper.getBoundingClientRect().y + block.getBoundingClientRect().y
      }px)`;
      // SVG PROGRESS
      visionLine.style.strokeDashoffset =
        9469 - (percentScrolled - 10) * (9469 / 100);

      if (percentScrolled >= 16.1) {
        planetTitles[0].classList.add("active");
        document.querySelector("#triangle1").style.opacity = 0;
        document.querySelector("#triangle1-1").style.opacity = 1;
      } else {
        planetTitles[0].classList.remove("active");
        document.querySelector("#triangle1").style.opacity = 1;
        document.querySelector("#triangle1-1").style.opacity = 0;
      }

      if (percentScrolled >= 30.7) {
        planetTitles[1].classList.add("active");
        document.querySelector("#triangle2").style.opacity = 0;
        document.querySelector("#triangle2-2").style.opacity = 1;
      } else {
        planetTitles[1].classList.remove("active");
        document.querySelector("#triangle2").style.opacity = 1;
        document.querySelector("#triangle2-2").style.opacity = 0;
      }

      if (percentScrolled >= 45.4) {
        planetTitles[2].classList.add("active");
        document.querySelector("#triangle3").style.opacity = 0;
        document.querySelector("#triangle3-3").style.opacity = 1;
      } else {
        planetTitles[2].classList.remove("active");
        document.querySelector("#triangle3").style.opacity = 1;
        document.querySelector("#triangle3-3").style.opacity = 0;
      }

      if (percentScrolled >= 60.1) {
        planetTitles[3].classList.add("active");
        document.querySelector("#triangle4").style.opacity = 0;
        document.querySelector("#triangle4-4").style.opacity = 1;
      } else {
        planetTitles[3].classList.remove("active");
        document.querySelector("#triangle4").style.opacity = 1;
        document.querySelector("#triangle4-4").style.opacity = 0;
      }

      if (percentScrolled >= 74.8) {
        planetTitles[4].classList.add("active");
        document.querySelector("#triangle5").style.opacity = 0;
        document.querySelector("#triangle5-5").style.opacity = 1;
      } else {
        planetTitles[4].classList.remove("active");
        document.querySelector("#triangle5").style.opacity = 1;
        document.querySelector("#triangle5-5").style.opacity = 0;
      }

      if (percentScrolled >= 89.53) {
        planetTitles[5].classList.add("active");
        document.querySelector("#triangle6").style.opacity = 0;
        document.querySelector("#triangle6-6").style.opacity = 1;
      } else {
        planetTitles[5].classList.remove("active");
        document.querySelector("#triangle6").style.opacity = 1;
        document.querySelector("#triangle6-6").style.opacity = 0;
      }

      if (percentScrolled >= 104.2) {
        planetTitles[6].classList.add("active");
        document.querySelector("#triangle7").style.opacity = 0;
        document.querySelector("#triangle7-7").style.opacity = 1;
      } else {
        planetTitles[6].classList.remove("active");
        document.querySelector("#triangle7").style.opacity = 1;
        document.querySelector("#triangle7-7").style.opacity = 0;
      }
    } else if (window.innerWidth <= 1200 && window.innerWidth > 768) {
      visionLineTablet.style.height = `${percentTabletScrolled + 20}%`;

      if (percentTabletScrolled < -20) {
        visionLineTablet.style.height = `0%`;
      }

      if (percentTabletScrolled >= -14.9) {
        trianglesTablet[0].classList.add("active");
      } else {
        trianglesTablet[0].classList.remove("active");
      }

      if (percentTabletScrolled >= -0.4) {
        trianglesTablet[1].classList.add("active");
      } else {
        trianglesTablet[1].classList.remove("active");
      }

      if (percentTabletScrolled >= 14.4) {
        trianglesTablet[2].classList.add("active");
      } else {
        trianglesTablet[2].classList.remove("active");
      }

      if (percentTabletScrolled >= 29) {
        trianglesTablet[3].classList.add("active");
      } else {
        trianglesTablet[3].classList.remove("active");
      }

      if (percentTabletScrolled >= 43.9) {
        trianglesTablet[4].classList.add("active");
      } else {
        trianglesTablet[4].classList.remove("active");
      }

      if (percentTabletScrolled >= 58.8) {
        trianglesTablet[5].classList.add("active");
      } else {
        trianglesTablet[5].classList.remove("active");
      }

      if (percentTabletScrolled >= 73.7) {
        trianglesTablet[6].classList.add("active");
      } else {
        trianglesTablet[6].classList.remove("active");
      }
    } else if (window.innerWidth <= 768 && window.innerWidth > 600) {
      visionLineTablet.style.height = `${percentTabletScrolled + 20}%`;

      if (percentTabletScrolled >= -15.6) {
        trianglesTablet[0].classList.add("active");
      } else {
        trianglesTablet[0].classList.remove("active");
      }

      if (percentTabletScrolled >= -0.6) {
        trianglesTablet[1].classList.add("active");
      } else {
        trianglesTablet[1].classList.remove("active");
      }

      if (percentTabletScrolled >= 13.7) {
        trianglesTablet[2].classList.add("active");
      } else {
        trianglesTablet[2].classList.remove("active");
      }

      if (percentTabletScrolled >= 28.5) {
        trianglesTablet[3].classList.add("active");
      } else {
        trianglesTablet[3].classList.remove("active");
      }

      if (percentTabletScrolled >= 43.2) {
        trianglesTablet[4].classList.add("active");
      } else {
        trianglesTablet[4].classList.remove("active");
      }

      if (percentTabletScrolled >= 57.6) {
        trianglesTablet[5].classList.add("active");
      } else {
        trianglesTablet[5].classList.remove("active");
      }

      if (percentTabletScrolled >= 72.5) {
        trianglesTablet[6].classList.add("active");
      } else {
        trianglesTablet[6].classList.remove("active");
      }
    } else if (window.innerWidth <= 600) {
      visionLineTablet.style.height = `${percentTabletScrolled + 20}%`;
      if (percentTabletScrolled >= -16.7) {
        trianglesTablet[0].classList.add("active");
      } else {
        trianglesTablet[0].classList.remove("active");
      }

      if (percentTabletScrolled >= -2.2) {
        trianglesTablet[1].classList.add("active");
      } else {
        trianglesTablet[1].classList.remove("active");
      }

      if (percentTabletScrolled >= 12.2) {
        trianglesTablet[2].classList.add("active");
      } else {
        trianglesTablet[2].classList.remove("active");
      }

      if (percentTabletScrolled >= 26.9) {
        trianglesTablet[3].classList.add("active");
      } else {
        trianglesTablet[3].classList.remove("active");
      }

      if (percentTabletScrolled >= 41.2) {
        trianglesTablet[4].classList.add("active");
      } else {
        trianglesTablet[4].classList.remove("active");
      }

      if (percentTabletScrolled >= 55.8) {
        trianglesTablet[5].classList.add("active");
      } else {
        trianglesTablet[5].classList.remove("active");
      }

      if (percentTabletScrolled >= 70.4) {
        trianglesTablet[6].classList.add("active");
      } else {
        trianglesTablet[6].classList.remove("active");
      }
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 1200) {
      block.style.transform = `translateX(0px)`;
    }
  });
});
