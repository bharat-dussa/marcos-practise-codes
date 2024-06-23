const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");
const container = document.querySelector(".names");

const defaultWidth = "1vw";
const defaultHeight = "1vw";

let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function(){
    gsap.set(cursor, {
      duration: 2,
      css: {
        left: mouseX,
        top: mouseY,
      }
    })
  }
});

window.addEventListener('mousemove', (e)=> {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

window.addEventListener("mouseleave", (dets) => {
  gsap.to(cursor, {
    scale: 1,
    width: "1vw",
    height: "1vw",
  });
});

container.addEventListener("mouseenter", (dets) => {
  gsap.to(cursor, {
    scale: 20,
    // backgroundColor: "white",
    
  });
});

container.addEventListener("mouseleave", (dets) => {
  gsap.to(cursor, {
    scale: 1,
    width: "1vw",
    height: "1vw",
    backgroundColor: "white",
  });
});


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Animate the cube rotation using GSAP
gsap.to(".cube", {
  duration: 10,
  rotationX: 360,
  rotationY: 360,
  repeat: -1,
  ease: "none",
});

const faces = document.querySelectorAll('.face');
faces.forEach(face => {
  gsap.to(face, {
    backgroundColor: () => getRandomColor(),
    duration: 2,
    repeat: -1,
    yoyo: true
  });
});











document.addEventListener('mousemove', (event) => {
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
    const pupil = eye.querySelector('.pupil');
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    const deltaX = event.clientX - eyeCenterX;
    const deltaY = event.clientY - eyeCenterY;
    const angle = Math.atan2(deltaY, deltaX);
    const maxDistance = (rect.width - pupil.offsetWidth) / 2;
    const pupilX = Math.cos(angle) * maxDistance;
    const pupilY = Math.sin(angle) * maxDistance;

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
