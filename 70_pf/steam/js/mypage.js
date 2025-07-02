const userName = document.querySelector(".username");
const name = localStorage.getItem("loginUser");

userName.textContent = name;
