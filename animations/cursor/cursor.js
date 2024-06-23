const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");
const image = document.querySelector("#image");

window.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
  });
});

window.addEventListener("mouseleave", (dets) => {
  gsap.to(cursor, {
    scale: 2,
    width: '0vw',
    height: '0vw'
  });
});

image.addEventListener("mouseenter", (dets) => {
    gsap.to(cursor, {
      scale: 2,
      width: '7vw',
      height: '7vw',
      backgroundColor: 'white',
      opacity: 0.4
    });
  });