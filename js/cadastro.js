const form = document.getElementById("form");
const username = document.getElementById("username");
const CPF = document.getElementById("CPF");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


  form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function checkInputs() {
  const usernameValue = username.value;
  const CPFValue = CPF.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  
  if (CPFValue === "") {
    setErrorFor(CPF, "O CPF é obrigatório.");
  } else if (CPFValue.length <11 || CPFValue.length >11) {
    setErrorFor(CPF, "O CPF está errado");
  } else {
    setSuccessFor(CPF);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
    form.setAttribute("class", "lo");
    form2.removeAttribute("class", "lo");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}
