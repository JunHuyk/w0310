const signUpData = localStorage.getItem("signUpData");
const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () => {
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
  };

  localStorage.setItem("signUpData", JSON.stringify(updateData));
  localStorage.setItem("loginUser", updateData.userName);

  window.location.href = "../index.html";
});
