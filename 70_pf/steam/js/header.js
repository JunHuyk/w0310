const login = document.querySelector(".login");
const signUp = document.querySelector(".sign_up");
const userUi = document.querySelector(".user_ui");
const userNameShow = document.querySelector(".username_show");

const loginUser = localStorage.getItem("loginUser");
const main = document.querySelector(".main");
const subs = document.querySelectorAll(".sub");

// 로컬스토리지 값 저장되면 헤더 상단메뉴 변경
if (loginUser) {
  login.style.display = "none";
  signUp.style.display = "none";

  userUi.style.display = "flex";
  userNameShow.textContent = loginUser;
}
// 마이페이지 이동
userUi.addEventListener("click", () => {
  window.location.href = "/w0310/70_pf/steam/sub/mypage.html";
});
// 내비게이션 서브메뉴 스타일 변경
main.addEventListener("mouseover", () => {
  subs.forEach((sub) => {
    sub.style.height = "200px";
    sub.style.opacity = "1";
    sub.style.visibility = "visible";
  });
});

main.addEventListener("mouseout", () => {
  subs.forEach((sub) => {
    sub.style.height = "0";
    sub.style.opacity = "0";
    sub.style.visibility = "hidden";
  });
});
