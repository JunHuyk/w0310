const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () => {
  const userName = document.getElementById("username");
  const currentPw = document.getElementById("currentpw");
  const passWord = document.getElementById("newpw");
  const confirmPw = document.getElementById("confirmpw");
  const email = document.getElementById("email");
  const tel = document.getElementById("tel");

  let signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];
  const loginUser = localStorage.getItem("loginUser");

  signUpData = signUpData.map((user) => {
    if (user.userName === loginUser) {
      return {
        ...user,
        userName: userName.value,
        passWord: passWord.value,
        email: email.value,
        tel: tel.value,
      };
    }
    return user;
  });

  // 저장
  localStorage.setItem("signUpData", JSON.stringify(signUpData));

  // 유저네임도 다시 저장
  localStorage.setItem("loginUser", userName.value);

  // 페이지 이동
  window.location.href = "../index.html";
});
