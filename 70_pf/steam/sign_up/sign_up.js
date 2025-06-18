// 1. 버튼 눌렀을 때 .sign_up_list 넘어가기
// 2. 넘어가는 페이지 idx 맞춰서 step_bar 색 변하게 완
// 3. 버튼 누르면 해당 idx 페이지로 이동 
// 4. input안 내용 submit되는 조건 설정

const signUpBox = document.querySelectorAll('.sign_up_box');
const btn = document.querySelector('.btn');
const stepBar = document.querySelectorAll('.step_bar')
let i = 0;
let idx = 0;
btn.addEventListener('click',()=>{
    if(i === signUpBox.length-1){
       window.location.href = "index.html"
       return;
    }
    signUpBox[i].classList.remove('active');
    i++;
    signUpBox[i].classList.add('active');
    stepShow();
});

// 스텝바 이벤트
const stepShow = ()=>{
    stepBar[idx].classList.remove('now_step');
    idx++;
    stepBar[idx].classList.add('now_step');
}

// function validateStep(step) {
//     switch (step) {
//         case 0: {
//             const state = document.getElementById('state').value;
//             const birth = signUpBox[step].querySelector('input[type="text"]').value.trim();
//             const agree = document.getElementById('agree_btn').checked;

//             if (state === '=========' || !birth || !agree) {
//                 alert('국가, 생년월일, 약관 동의를 모두 완료해주세요.');
//                 return false;
//             }
//             return true;
//         }

//         case 1: {
//             const lastName = document.getElementById('last_name').value.trim();
//             const firstName = document.getElementById('first_name').value.trim();
//             const email = signUpBox[step].querySelector('input[type="email"]').value.trim();
//             const tel = signUpBox[step].querySelector('input[type="tel"]').value.trim();

//             if (!lastName || !firstName || !email || !tel) {
//                 alert('모든 항목을 입력해주세요.');
//                 return false;
//             }

//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             const telRegex = /^\d{3}-\d{4}-\d{4}$/;

//             if (!emailRegex.test(email)) {
//                 alert('이메일 형식이 올바르지 않습니다.');
//                 return false;
//             }
//             if (!telRegex.test(tel)) {
//                 alert('전화번호 형식: 010-1234-5678');
//                 return false;
//             }

//             return true;
//         }

//         case 2: {
//             const username = signUpBox[step].querySelector('input[placeholder="Username"]').value.trim();
//             const passwords = signUpBox[step].querySelectorAll('input[type="password"]');
//             const pwd1 = passwords[0].value.trim();
//             const pwd2 = passwords[1].value.trim();

//             const idRegex = /^[a-zA-Z][a-zA-Z0-9]{9,23}$/;
//             const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

//             if (!idRegex.test(username)) {
//                 alert('아이디는 영문으로 시작하는 10~24자의 영문+숫자 조합이어야 합니다.');
//                 return false;
//             }
//             if (!pwRegex.test(pwd1)) {
//                 alert('비밀번호는 8자 이상, 영문+숫자+특수문자 조합이어야 합니다.');
//                 return false;
//             }
//             if (pwd1 !== pwd2) {
//                 alert('비밀번호가 일치하지 않습니다.');
//                 return false;
//             }

//             return true;
//         }

//         default:
//             return true;
//     }
// }