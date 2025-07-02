const userName = document.querySelector(".username");
const loginUser = localStorage.getItem("loginUser");

userName.textContent = loginUser;
