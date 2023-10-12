const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const dataLength = parseInt(validationInput.getAttribute("data-length"), 10);
  const inputLength = validationInput.value.length;

  if (inputLength === dataLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
