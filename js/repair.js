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
document.getElementById("repair-form").addEventListener("submit", submitForm);

let notification = document.getElementById("notification-alert");

function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name-input").value;
  var tel = document.getElementById("tel-input").value;
  var marque = document.getElementById("marque").value;
  var ddl = document.getElementById("ddl").value;
  var message = document.getElementById("message-input").value;
  var user_id = name + "_" + Date.now().toString().slice(8);

  sendDataToFireBase(
    user_id,
    name,
    tel,
    marque,
    ddl,
    message
  );
}

let mydatabase = firebase.database();

function sendDataToFireBase(
  user_id,
  name,
  tel,
  marque,
  ddl,
  message
) {
  mydatabase.ref("repair-form/" + user_id).set({
    name: name,
    tel: tel,
    marque: marque,
    deadline: ddl,
    message: message,
  });
  document.getElementById("repair-form").reset();
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
  document.getElementById("repair-form").reset();
}
