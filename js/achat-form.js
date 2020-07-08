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
document.getElementById("laptop-form").addEventListener("submit", submitForm);

let notification = document.getElementById("notification-alert");

function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name-input").value;
  var tel = document.getElementById("tel-input").value;
  var marque = document.getElementById("marque").value;
  var processeur = document.getElementById("marque").value;
  var ram = document.getElementById("ram").value;
  var dd = document.getElementById("dd").value;
  var ssd = document.getElementById("ssd").value;
  var ecran = document.getElementById("ecran").value;
  var price = document.getElementById("price").value;
  var message = document.getElementById("message-input").value;
  var user_id = name + "_" + Date.now().toString().slice(8);

  sendDataToFireBase(
    user_id,
    name,
    tel,
    marque,
    processeur,
    ram,
    dd,
    ssd,
    ecran,
    price,
    message
  );
}

let mydatabase = firebase.database();

function sendDataToFireBase(
  user_id,
  name,
  tel,
  marque,
  processeur,
  ram,
  dd,
  ssd,
  ecran,
  price,
  message
) {
  mydatabase.ref("laptop-achat-form/" + user_id).set({
    name: name,
    tel: tel,
    marque: marque,
    processeur: processeur,
    ram: ram,
    disqueDur: dd,
    ssd: ssd,
    ecran: ecran,
    prix: price,
    message: message,
  });
  document.getElementById("laptop-form").reset();
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
  document.getElementById("laptop-form").reset();
}
