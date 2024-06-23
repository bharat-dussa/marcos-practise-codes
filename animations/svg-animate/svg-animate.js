let initialPathForLine = `M 10 100 Q 250 100 590 100`;

let followValue = 100;
let finalPathForLine = `M 10 100 Q 250 ${followValue} 590 100`;

let string = document.querySelector("#string");

string.addEventListener("click", () => {
  console.log("clicked");
});

string.addEventListener("mouseleave", (event) => {
  console.log("mouseleave");

  gsap.to("svg path", {
    attr: { d: finalPathForLine },
    duration: 0.8,
    ease: "elastic.out(1,0.2)",
  });
});
string.addEventListener("mousemove", (event) => {
  console.log("mouseenter");

  const path = `M 10 100 Q ${event.x} ${event.y * 2} 590 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});
