
gsap.from(".page1 .box", {
    scale: 0, 
    delay: 1,
    duration: 2,
    rotate: 100,
    borderRadius: '50%',
  
});

gsap.from("#page2 #box2", {
    scale: 0,
    rotate: 600,
    delay: 1,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: 'body',
        markers: true,
        scrub: 4,
        start: 'top 40%',
        end: "top 20%"

    }
});


gsap.from("#page3 #box", {
    scale: 1,
    scrollTrigger: "#page3 #box"
})
