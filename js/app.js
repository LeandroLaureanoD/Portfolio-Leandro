//particulas nav
particlesJS(
  {
    "particles": {
      "number": {
        "value": 25,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
//projects
const controlsProj = document.querySelectorAll(".control-proj");
let currentItemProj = 0;
const projUnit = document.querySelectorAll("#project-content");
const maxItemsProj = projUnit.length;

controlsProj.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeftProj = control.classList.contains("arrow-left-proj");
    if(isLeftProj) {
      currentItemProj -= 1;
    }else {
      currentItemProj += 1;
    }
    if(currentItemProj >= maxItemsProj){
      currentItemProj = 0;
    }
    if(currentItemProj < 0){
      currentItemProj = maxItemsProj -1;
    }
   
    projUnit[currentItemProj].scrollIntoView({
      inline: "start",
      behavior: "smooth",
    });
    console.log('control cliked' , isLeftProj, maxItemsProj, currentItemProj)
  });
});
//Certificates
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const card = document.querySelectorAll(".card");
const maxItems = card.length;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");
    if(isLeft) {
      currentItem -= 1;
    }else {
      currentItem += 1;
    }
    if(currentItem >= maxItems){
      currentItem = 0;
    }
    if(currentItem < 0){
      currentItem = maxItems -1;
    }
    card.forEach((item) => item.classList.remove("current-item"));
    card[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
    card[currentItem].classList.add("current-item");
    console.log('control cliked' , maxItems, currentItem)
  });
});
