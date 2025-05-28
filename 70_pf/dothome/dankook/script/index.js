const gnb = document.querySelector('.gnb');
const inner = document.querySelectorAll('.navinner')
let idx = 0;

setInterval(() => {
  idx = (idx + 1) % inner.length;
  gnb.style.transition = "transform .3s ease";
  gnb.style.transform = `translateX(-${idx * 100}vw)`;
  if( idx === inner.length-1){
    setTimeout(()=>{
        gnb.style.transition = 'none';
        idx=0;
        gnb.style.transform = `translateX(-${idx*100}vw)`;
    },300)
    
  }
}, 3000);