const signUpData = localStorage.getItem("signUpData");
const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () => {
<<<<<<< HEAD
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
=======
  const userName = document.getElementById("username").value;
  const currentPassword = document.getElementById('current_password').value;
  const password = document.getElementById("new_password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const date = document.getElementById("date").value;

  const updateData = {
    userName,
    currentPassword,
    password,
    confirmPassword,
    name,
    email,
    tel,
    date
>>>>>>> df30743ec2afb1d28d6314d3a805f3ba5e012022
  };

  localStorage.setItem("signUpData", JSON.stringify(updateData));
  localStorage.setItem("loginUser", updateData.userName);

  window.location.href = "../index.html";
});
