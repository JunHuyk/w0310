const ellipse = document.querySelectorAll(".ellipse");
const slide = document.querySelector(".slidelist");
const inner = document.querySelectorAll(".inner");
const left = document.querySelector(".slide_left");
const right = document.querySelector(".slide_right");

let idx = 0;
let i = 0;

setInterval(() => {
    ellipse[idx].classList.remove("choice");
    idx = (idx + 1) % ellipse.length;
    ellipse[idx].classList.add("choice");
}, 3000);

// setInterval(() => {
//     i++;
//     slide.style.transition = "transform .3s ease";
//     slide.style.transform = `translateX(-${i * 25}%)`;
//     setTimeout(() => {
//         if (i === inner.length - 1) {
//             slide.style.transition = "none";
//             i = 0;
//             slide.style.transform = `translateX(-${i * 25}%)`;
//         }
//     }, 300);
// }, 3000);

right.addEventListener("click", () => {
    i++;
    slide.style.transition = "transform .3s ease";
    slide.style.transform = `translateX(-${i * 25}%)`;
    setTimeout(() => {
        if (i === inner.length - 1) {
            slide.style.transition = "none";
            i = 0
            slide.style.transform = `translateX(-${i * 25}%)`;
        }
    }, 300);
});

left.addEventListener("click", () => {
    slide.style.transition = "transform .3s ease";
    i--;
    slide.style.transform = `translateX(-${i * 25}%)`;
//    setTimeout(() => {
        if (i === -1) {
            slide.style.transition = "none";
            i = inner.length-1  ;
            slide.style.transform = `translateX(-${i * 25}%)`;
            slide.style.transition = "transform .3s ease";            
            i--;
            slide.style.transform = `translateX(-${i * 25}%)`;
        }
    // }, 300)
});