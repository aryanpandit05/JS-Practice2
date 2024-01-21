window.addEventListener("mousemove", function (details) {
  var valx = gsap.utils.mapRange(
    0,
    window.innerWidth,
    50 + rectangle.getBoundingClientRect().width / 2,
    window.innerWidth - (50 + rectangle.getBoundingClientRect().width / 2),
    details.clientX
  );
  var valy = gsap.utils.mapRange(
    0,
    window.innerHeight,
    50 + rectangle.getBoundingClientRect().width / 2,
    window.innerHeight - (50 + rectangle.getBoundingClientRect().width / 2),
    details.clientY
  );
  gsap.to("#rectangle", {
    left: valx + "px",
    top: valy + "px",
    ease: Power3,
  });
});
