const particlesConfig = {
  "fpsLimit": 120,
  "fullScreen": {
    "enable": true
  },
  "background": {
    "color": "#fff"
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onClick": {
        "enable": false,
        "mode": "push"
      },
      "onHover": {
        "enable": false,
        "mode": "repulse",
        "parallax": {
          "enable": false,
          "force": 60,
          "smooth": 10
        }
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 10, // Tamaño de partículas más pequeñas
        "speed": 3
      },
      "grab": {
        "distance": 400,
        "links": {
          "opacity": 1
        }
      },
      "push": {
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "particles": {
    "color": {
      "value": "00204B"
    },
    "links": {
      "color": "00204B",
      "distance": 150,
      "enable": false,
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      },
      "bounce": false,
      "direction": "none",
      "enable": true,
      "out_mode": "out",
      "random": false,
      "speed": 1,
      "straight": false
    },
    "rotate": {
      "animation": {
        "enable": true,
        "speed": 10,
        "sync": false
      }
    },
    "number": {
      "value": 10,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "shape": {
      "character": [
        {
          "fill": true,
          "font": "Verdana",
          "value": ["△", "☐", "〇", "⨉"],
          "style": "",
          "weight": 100
        }
      ],
      "image": {
        "height": 100,
        "replace_color": true,
        "src": "images/github.svg",
        "width": 100
      },
      "polygon": {
        "nb_sides": 5
      },
      "stroke": {
        "color": "random",
        "width": 1
      },
      "type": "char"
    },
    "size": {
      "anim": {
        "enable": false,
        "minimumValue": 8,
        "speed": 1,
        "sync": false
      },
      "random": {
        "minimumValue": 8,
        "enable": true
      },
      "value": 10 // Tamaño de partículas más pequeñas
    }
  },
  "detectRetina": true
}


export default particlesConfig