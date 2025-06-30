// 슬라이드 (Section1)
const slides = document.getElementById("slides");
const rects = document.querySelectorAll(".rect");
const total = rects.length;
const slideHeight = 895;
let idx = 0;

function goToSlide(index) {
  slides.style.transition = "transform 0.8s ease-in-out";
  slides.style.transform = `translateY(-${slideHeight * index}px)`;

  rects.forEach((rect, i) =>
    rect.classList.toggle("choice", i === index % total)
  );
}

function nextSlide() {
  idx++;
  goToSlide(idx);

  // 슬라이드가 복제본(마지막) 도달 시 → 진짜 첫 번째로 리셋
  if (idx === total) {
    setTimeout(() => {
      slides.style.transition = "none";
      slides.style.transform = `translateY(0px)`;
      idx = 0;
      rects.forEach((r, i) => r.classList.toggle("choice", i === 0));
    }, 850); // transition 시간보다 살짝 크게
  }
}

// 자동 루프
setInterval(nextSlide, 3000);
