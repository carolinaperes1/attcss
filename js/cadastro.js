const form = document.getElementById('form');
const form2 = document.getElementById('form2');
const username = document.getElementById('username');
const CPF = document.getElementById('CPF');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const profession = document.getElementById('profession');
const years = document.getElementById('years');
const radio = document.getElementsByName('estado');
const radioDiv = document.querySelector('.radio');
let radioValue = '';

form.addEventListener('submit', e => {
  e.preventDefault();
 
  const CPFValue = CPF.value;
  const usernameValue = username.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
   checkInputs();
});

function checkInputs() {

  if (usernameValue === '') {
    setErrorFor(username, 'O nome é obrigatório.');
  } else {
    setSuccessFor(username);
  }

  if (CPFValue === '') {
    setErrorFor(CPF, 'O CPF é obrigatório.');
  } else if (CPFValue.length < 11 || CPFValue.length > 11) {
    setErrorFor(CPF, 'O CPF está errado');
  } else {
    setSuccessFor(CPF);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'A senha é obrigatória.');
  } else if (passwordValue.length < 8) {
    setErrorFor(password, 'A senha precisa ter no mínimo 8 caracteres.');
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === '') {
    setErrorFor(passwordConfirmation, 'A confirmação de senha é obrigatória.');
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, 'As senhas não conferem.');
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll('.form-control');

  const formIsValid = [...formControls].every(formControl => {
    return formControl.className === 'form-control success';
  });

  if (formIsValid) {
    console.log('O formulário está 100% válido!');
    form.classList.add('lo');
    form2.classList.remove('lo');
  }
}

form2.addEventListener('submit', e => {
  // e.preventDefault();

  const professionValue = profession.value;
  const yearsValue = years.value;
    checkInputs2();
});

function checkInputs2() {
  
  if (professionValue === '') {
    setErrorFor(profession, 'A profissão é obrigatória.');
  } else {
    setSuccessFor(profession);
  }

  if (yearsValue === '') {
    setErrorFor(years, 'Obrigatório.');
  } else if (yearsValue < 0 || yearsValue > 50) {
    setErrorFor(years, 'Inválido');
  } else {
    setSuccessFor(years);
  }
  if (
    radio[0].checked == false &&
    radio[1].checked == false &&
    radio[2].checked == false
  ) {
    setErrorFor(radioDiv, 'Estado é obrigatório.');
  } else {
    if (radio[0].checked == true) {
      radioValue = 'RS';
    }
    if (radio[1].checked == true) {
      radioValue = 'SC';
    }
    if (radio[2].checked == true) {
      radioValue = 'PR';
    }
    setSuccessFor(radioDiv);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = 'form-control success';
}

// document.form2.enviar.addEventListener('click', (e) => {
//   // console.log(e);
//   // console.log(document.form2.estado.value);
//   if (!document.form2.estado.value) {
//     document.form2.querySelector('.radio').className = 'form-control error';
//   } else {
//     document.form2.querySelector('.radio').className = 'form-control success';
//   }
// });
