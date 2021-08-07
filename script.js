window.addEventListener("mousemove", animation);
window.addEventListener("touchstart", animation);
window.addEventListener("touchmove", animation);

function animation(e) {

    gsap.to(".cursor__circle", {
        x: e.clientX,
        y: e.clientY,
        stagger: -0.05,
    })
}