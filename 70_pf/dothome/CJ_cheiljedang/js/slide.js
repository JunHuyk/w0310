const slides = document.querySelectorAll('.slide li');
const pp = document.getElementsByTagName("p");

let current = 0;

//처음 보이는 슬라이드
slides[current].classList.add('active');

setInterval(() => {
  slides[current].classList.remove('active'); // current 번째 slide 사라지게
  current = (current + 1) % slides.length; // 다음 slide로 이동
  slides[current].classList.add('active'); // 이동 한 슬라이드 보여지게
}, 3000); 
