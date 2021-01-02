const signupform = document.querySelector('#signupform');
signupform.addEventListener('submit', (e) =>{
e.PreventDefault();

const email = signupform['txtEmail'].value;
const password = signupform['txtPassword'].value;
console.log(email, password);
auth.createUserWithEmailAndPassword(email, password).then(cred =>{   
      console.log(cred.user);
 });

});