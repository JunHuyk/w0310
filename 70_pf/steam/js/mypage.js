const userName = document.querySelector(".username");
const editBtn = document.querySelector(".edit-btn");
const user = localStorage.getItem("loginUser");

userName.textContent = user;

editBtn.addEventListener("click", () => {
  window.location.href = "/w0310/70_pf/steam/sub/profile_edit.html";
});
