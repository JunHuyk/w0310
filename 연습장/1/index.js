const slideList = document.querySelector(".slide_list");
const inner = document.querySelectorAll(".inner");

idx = 0;

setInterval(() => {
    idx++;
    slideList.style.transition = "transform .3s ease";
    slideList.style.transform = `translateY(-${idx*300}px)`;
    setTimeout(() => {
        if (idx === inner.length-1){
        slideList.style.transition = "none";
        idx = 0;
        slideList.style.transform = `translateY(-${idx*300}px)`;
    }        
    }, 300);
}, 3000);