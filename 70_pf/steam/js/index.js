// 내비게이션 서브메뉴 스타일 변경
const main = document.querySelector('.main');
const subs = document.querySelectorAll('.sub');
const login = document.querySelector('.login');
const signUp = document.querySelector('.sign_up');
const userUi = document.querySelector('.user_ul');



main.addEventListener('mouseover',()=>{
    subs.forEach(sub => {
        sub.style.height = "200px";
        sub.style.opacity = "1";
        sub.style.visibility = "visible";
    });
});

main.addEventListener('mouseout',()=>{
    subs.forEach(sub => {
        sub.style.height = "0";
        sub.style.opacity = "0";
        sub.style.visibility = "hidden";
    });
});