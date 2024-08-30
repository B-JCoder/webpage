// Toggle Button
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};


// Page 4 Animation
function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function () {
      fixed.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
      fixed.style.display = "none";
    });
  
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
      });
    });
  }
  page4Animation();
  

  document.querySelector('.animation-container').addEventListener('mouseenter', function() {
    this.style.animationPlayState = 'paused';
});

document.querySelector('.animation-container').addEventListener('mouseleave', function() {
    this.style.animationPlayState = 'running';
});

// Mouse Cursor
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("cursor");

  if (cursor) {
    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.boxShadow = `
        0 0 25px rgba(0, 255, 255, 1),
        0 0 50px rgba(0, 255, 255, 0.8),
        0 0 100px rgba(0, 255, 255, 0.6),
        0 0 200px rgba(0, 255, 255, 0.4),
        0 0 350px rgba(0, 255, 255, 0.3)
      `;
    };

    document.addEventListener("mousemove", moveCursor);
  } else {
    console.error("Cursor element not found");
  }
});

function loferanimation() {
    var tl = gsap.timeline();
    tl.from(".child span", {
      x: "100%",
      duration: 1.2,
      stagger: 0.2,
      ease: Power3.easeInOut,
    })
      .to(".parent .child", {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut,
      })
      .to("#loder", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut,
      })
      .to("#green", {
        height: "100%",
        top: 0,
        duration: 1,
        delay: -0.4,
        ease: Circ.easeInOut,
      })
      .to("#green", {
        height: 0,
        top: 0,
        duration: 1,
        delay: -0.2, // Corrected from 'delat' to 'delay'
        ease: Circ.easeInOut,
      });
  }
  loferanimation();

// Image Hover Effect
  const images = document.querySelectorAll(".image-container img");

  images.forEach((image) => {
    image.addEventListener("mouseenter", (e) => {
      const overlay = image.nextElementSibling;
      overlay.classList.add("active");
    });

    image.addEventListener("mouseleave", (e) => {
      const overlay = image.nextElementSibling;
      overlay.classList.remove("active");
    });
  });
