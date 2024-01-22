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

  var winval = window.innerWidth / 2;
  if (details.clientX < winval) {
    var redColor = gsap.utils.mapRange(0, winval, 255, 100, details.clientX);
    gsap.to(document.body, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power3,
    });
  } else {
    var greenColor = gsap.utils.mapRange(
      winval,
      window.innerWidth,
      180,
      255,
      details.clientX
    );
    const rgbColor = `rgb(255,${greenColor},0)`;
    gsap.to(document.body, {
      backgroundColor: rgbColor,
      ease: Power3,
    });
  }
});
