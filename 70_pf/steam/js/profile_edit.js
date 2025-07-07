const signUpData = localStorage.getItem("signUpData");
const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () => {
  const userName = document.getElementById("username");
  const currentPw = document.getElementById("currentpw");
  const passWord = document.getElementById("newpw");
  const confirmPw = document.getElementById("confirmpw");
  const email = document.getElementById("email");
  const tel = document.getElementById("tel");

  const updateData = {
    userName: userName.value,
    passWord: passWord.value,
    email: email.value,
    tel: tel.value,
  };

  localStorage.setItem("signUpData", JSON.stringify(updateData));
  localStorage.setItem("loginUser", updateData.userName);

  window.location.href = "../index.html";
});
