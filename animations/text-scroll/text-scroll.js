gsap.to("#page2 h1" , {
    delay: 1,
    duration: 2,
    transform: "translateX(60%)",
    scrollTrigger: {
        trigger: '#page1 h1', 
        scroller: "body",
        markers: true,
        start: 'top 40%',
        end: "top 10%",
        scrub: 5,
        pin: true
    }
})
