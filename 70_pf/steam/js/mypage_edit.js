const signUpData = localStorage.getItem("signUpData");
const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () => {
  const userName = document.getElementById("username").value;
  const passWord = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;

  const updateData = {
    userName,
    passWord,
    name,
    email,
    tel,
  };

  localStorage.setItem("signUpData", JSON.stringify(updateData));
});
