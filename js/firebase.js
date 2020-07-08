// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDfPJn9qOn6rnEro5eQbp7ts51Mo9T3rrM",
  authDomain: "techmaster-f6b5d.firebaseapp.com",
  databaseURL: "https://techmaster-f6b5d.firebaseio.com",
  projectId: "techmaster-f6b5d",
  storageBucket: "techmaster-f6b5d.appspot.com",
  messagingSenderId: "1018680727349",
  appId: "1:1018680727349:web:bda28e2a312e17b25a1e7c",
  measurementId: "G-PR37LTRBV0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Form contact form
/*******************/
document.getElementById("contact-form").addEventListener("submit", submitForm);

let notification = document.getElementById("notification-alert");

function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name-input").value;
  var email = document.getElementById("email-input").value;
  var message = document.getElementById("message-input").value;
  var user_id = name + "_" + Date.now().toString().slice(8);

  sendDataToFireBase(user_id, name, email, message);
}

let mydatabase = firebase.database();

function sendDataToFireBase(user_id, name, email, message) {
  mydatabase.ref("contact-form/" + user_id).set({
    name: name,
    email: email,
    message: message,
  });
  document.getElementById("contact-form").reset();
  notification.style.display = "block";
  setTimeout(() => {
    notification.classList.add("fadeOut");
    setTimeout(() => {
      notification.style.display = "none";
      location.replace("index.html");
    }, 1000);
  }, 3000);
}

function resetForm() {
  document.getElementById("contact-form").reset();
}
