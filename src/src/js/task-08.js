const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  if (!formObject.email || !formObject.password) {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  console.log(formObject);
  loginForm.reset();
});
