const slidegnb = document.querySelector('.slidegnb');
const inner = document.querySelectorAll('.navinner');
let idx = 0;

setInterval(() => {
  idx = (idx + 1) % inner.length;
  slidegnb.style.transition = "transform .3s ease";
  slidegnb.style.transform = `translateX(-${idx * 100}vw)`;
  if( idx === inner.length-1){
    setTimeout(()=>{
        slidegnb.style.transition = 'none';
        idx=0;
        slidegnb.style.transform = `translateX(-${idx*100}vw)`;
    },300)
    
  }
}, 3000);