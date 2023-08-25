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
set(ref(db, "jeremiahF"), {
  github: "https://github.com/jerom-physicus",
  mail: "jeremiahf091@gmail.com",
  room_name: "",
});
onValue(ref(db, "jeremiahF"), function (snapshot) {
  let values = Object.values(snapshot.val("github"));
  globalThis.github_link = values[0];
  globalThis.mail_link = values[1];
});
document.querySelector(".git-box").addEventListener("click", function () {
  window.location.href = github_link;
});
document.querySelector(".gmail-box").addEventListener("click", function () {
  window.location.href = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${mail_link}`;
});
