const userName = document.querySelector(".username");
const user = localStorage.getItem("loginUser");
userName.textContent = user;
