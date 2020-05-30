// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDgb53eA7xY_or8Lbr5KrFyEAcweqGTh2E',
  authDomain: 'cleansweep-6eedd.firebaseapp.com',
  databaseURL: 'https://cleansweep-6eedd.firebaseio.com',
  projectId: 'cleansweep-6eedd',
  storageBucket: 'cleansweep-6eedd.appspot.com',
  messagingSenderId: '731187500214',
  appId: '1:731187500214:web:9a3e123dad1eaa096d8217',
  measurementId: 'G-93JJ383TPN'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// form elements
const TextEmail = document.getElementById("TextEmail");
const TextPassword = document.getElementById("TextPassword");
const LoginButton = document.getElementById("LoginButton");
const SignUpButton = document.getElementById("SignUpButton");
const LogoutButton = document.getElementById("LogoutButton");

//Login in event

LoginButton.addEventListener('click', e => {
  //get email and password
  const email = TextEmail.value;
  const pword = TextPassword.value;
  const auth = firebase.auth();
  //Sign in
  const promise = auth.sighInWithEmailAndPassword(email,pword);
  promise.catch(e => console.log(e.message));

});
//sigh up event
SignUpButton.addEventListener('click',e =>{
   //get email and password
   const email = TextEmail.value;
   const pword = TextPassword.value;
   const auth = firebase.auth();
   //Sign up
   const promise = auth.createUserWithEmailAndPassword(email,pword);
   promise.catch(e => console.log(e.message));

});


LogoutButton.addEventListener('click', e =>{
  firebase.auth().sighOut();
});

//Real time listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
    LogoutButton.classList.remove('hide');
  }else{
    console.log('Error: User not logged in');
    LogoutButton.classList.add('hide');
  }

});


