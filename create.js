import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
  set,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFbExkWdCe93Vkxk_6kAJ1itCuCQvL-WI",
  authDomain: "linkfolio-75f9c.firebaseapp.com",
  databaseURL: "https://linkfolio-75f9c-default-rtdb.firebaseio.com",
  projectId: "linkfolio-75f9c",
  storageBucket: "linkfolio-75f9c.appspot.com",
  messagingSenderId: "777012925295",
  appId: "1:777012925295:web:fd62335ab549fb4a198e9a",
  measurementId: "G-6E7ZR0SLB1",
};
const app = initializeApp(firebaseConfig);
var db = getDatabase(app);

document.getElementById("link-int").addEventListener("input", function () {
  let link_int = document.getElementById("link-int").value;
  onValue(ref(db, "linkfolio_users"), function (snapshot) {
    let users_list = Object.keys(snapshot.val());

    if (users_list.includes(link_int)) {
      document.querySelector(".green-tick ").style.display = "none";
      document.querySelector(".grab-btn ").style.display = "none";
      document.querySelector(".taken-alert ").style.display = "block";
    } else if (link_int == "") {
      document.querySelector(".green-tick ").style.display = "none";
      document.querySelector(".grab-btn ").style.display = "none";
      document.querySelector(".taken-alert ").style.display = "none";
    } else {
      document.querySelector(".green-tick ").style.display = "block";
      document.querySelector(".grab-btn ").style.display = "block";
      document.querySelector(".taken-alert ").style.display = "none";
    }
  });
});
document.querySelector(".grab-btn").addEventListener("click", function () {
  document.querySelector(".step2").style.display = "grid";
  document.querySelector(".step1").style.display = "none";
});
document.getElementById("upload-photo").addEventListener("input", function () {
  let inputPhoto = document.getElementById("upload-photo").files[0];
  let profile = document.querySelector(".place-img");
  profile.src = URL.createObjectURL(inputPhoto);
  document.querySelector(".place-img").style.display = "inline";
});

document.querySelector(".nxt-btn").addEventListener("click", function () {
  document.querySelector(".step1-create").style.display = "none";
  document.querySelector(".step2-create").style.display = "flex";
  step2();
  //document.querySelector(".step2-create").innerHTML =
});
function step2() {
  let inputPhoto = document.getElementById("upload-photo").files[0];
  let username = document.querySelector(".name-input").value;
  document.querySelector(".user-name").innerHTML = username;
  document.querySelector(".value-img").src = URL.createObjectURL(inputPhoto);
}
