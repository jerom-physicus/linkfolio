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
let uid = localStorage.getItem("uid");
const location = ref(db, "linkfolio_users/" + uid);

let l = [];
for (let [key, value] of Object.entries(localStorage)) {
  l.push(key);
}
console.log(l);
if (l.includes("instagram")) {
  document.getElementById("instagram").style.display = "flex";
}
if (l.includes("linkedin")) {
  document.getElementById("linkedin").style.display = "flex";
}
if (l.includes("telegram")) {
  document.getElementById("telegram").style.display = "flex";
}
if (l.includes("facebook")) {
  document.getElementById("facebook").style.display = "flex";
}
if (l.includes("whatsapp")) {
  document.getElementById("whatsapp").style.display = "flex";
}
if (l.includes("github")) {
  document.getElementById("github").style.display = "flex";
}
if (l.includes("twitter")) {
  document.getElementById("twitter").style.display = "flex";
}
if (l.includes("spotify")) {
  document.getElementById("spotify").style.display = "flex";
}
if (l.includes("gmail")) {
  document.getElementById("gmail").style.display = "flex";
}
if (l.includes("bio")) {
  document.getElementById("bio").style.display = "flex";
}
if (l.includes("bio")) {
  document.getElementById("bio").style.display = "";
}
if (l.includes("custom-1")) {
  document.getElementById("custom-1").style.display = "";
}
if (l.includes("custom-2")) {
  document.getElementById("custom-2").style.display = "";
}
if (l.includes("custom-3")) {
  document.getElementById("custom-3").style.display = "";
}
if (l.includes("custom-4")) {
  document.getElementById("custom-4").style.display = "";
}
document.getElementById("execute").addEventListener("click", function () {
  let instagram_int = document.getElementById("instagram-int").value;
  let linkedin_int = document.getElementById("linkedin-int").value;
  let facebook_int = document.getElementById("facebook-int").value;
  let telegram_int = document.getElementById("telegram-int").value;
  let whatsapp_int = document.getElementById("whatsapp-int").value;
  let github_int = document.getElementById("github-int").value;
  let twitter_int = document.getElementById("twitter-int").value;
  let spotify_int = document.getElementById("spotify-int").value;
  let gmail_int = document.getElementById("gmail-int").value;
  let bio_int = document.getElementById("bio-int").value;

  set(ref(db, "linkfolio_users/" + uid), {
    instagram: instagram_int,
    linkedin: linkedin_int,
    github: github_int,
    facebook: facebook_int,
    telegram: telegram_int,
    whatsapp: whatsapp_int,
    twitter: twitter_int,
    spotify: spotify_int,
    gmail: gmail_int,
    bio: bio_int,
  });
});
