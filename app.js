const h1 = document.querySelectorAll("h1");
const p = document.querySelectorAll("p");
const h3 = document.querySelectorAll("h3")
//const content = document.querySelector(".content")
const TL = gsap.timeline();

TL.to(h1, { duration: 2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', y: "30px" });
TL.to(h3, { duration: 2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', y: "40px" });
TL.to(p, { duration: 3, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: "30px" });


/* TL.to(content, { duration: 2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', y: "30px" }); */

