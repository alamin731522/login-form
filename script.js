const passwordInput = document.getElementById("password");
const shwoPassword = document.getElementById("showPassword");

passwordInput.addEventListener("input", function () {
  if (this.value.length > 1) {
    shwoPassword.style.display = "block";
  } else {
    shwoPassword.style.display = "none";
  }
});

shwoPassword.addEventListener("click", function () {
  if (passwordInput.type === "text") {
    passwordInput.type = "password";

    shwoPassword.classList.remove("fa-eye-slash");
    shwoPassword.classList.add("fa-eye");
  } else {
    passwordInput.type = "text";

    shwoPassword.classList.remove("fa-eye");
    shwoPassword.classList.add("fa-eye-slash");
  }
});
