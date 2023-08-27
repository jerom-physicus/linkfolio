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

//--------------------------Step2-----------------------------------------------------------------//

document.getElementById("upload-photo").addEventListener("input", function () {
  let inputPhoto = document.getElementById("upload-photo").files[0];
  let profile = document.querySelector(".place-img");
  profile.src = URL.createObjectURL(inputPhoto);
  document.querySelector(".place-img").style.display = "inline";
});

document.querySelector(".nxt-btn").addEventListener("click", function () {
  document.querySelector(".step1").style.display = "none";
  document.querySelector(".step2").style.display = "none";
  document.querySelector(".step3").style.display = "grid";
});
// function step2() {
//   let inputPhoto = document.getElementById("upload-photo").files[0];
//   let username = document.querySelector(".name-input").value;
//   document.querySelector(".user-name").innerHTML = username;
//   document.querySelector(".value-img").src = URL.createObjectURL(inputPhoto);
// }

//--------------------------------------step3-----------------------------------------//

document.getElementById("instagram").addEventListener("click", function () {
  let btn = document.getElementById("instagram");
  btn.classList.toggle("green");
  //---------append him------------//
  let toggle = document.getElementById("instagram-int");
  if (toggle.value == "OFF") {
    toggle.value = "ON";
    document.querySelector(".instagram-close").style.display = "block";
    localStorage.setItem("instagram", " instagram");
  } else if (toggle.value == "ON") {
    toggle.value = "OFF";
    document.querySelector(".instagram-close").style.display = "none";
    localStorage.removeItem("instagram");
  }
});
document.getElementById("linkedin-int").addEventListener("click", function () {
  let btn = document.getElementById("linkedin");
  btn.classList.toggle("green");
  //---------append him------------//
  let toggle = document.getElementById("linkedin-int");
  if (toggle.value == "OFF") {
    toggle.value = "ON";
    document.querySelector(".linkedin-close").style.display = "block";

    localStorage.setItem("linkedin", " linkedin");
  } else if (toggle.value == "ON") {
    toggle.value = "OFF";
    localStorage.removeItem("linkedin");
    document.querySelector(".linkedin-close").style.display = "none";
  }
});
document.getElementById("github-int").addEventListener("click", function () {
  let btn = document.getElementById("github");
  btn.classList.toggle("green");
  //---------append him------------//
  let toggle = document.getElementById("github-int");
  if (toggle.value == "OFF") {
    document.querySelector(".github-close").style.display = "block";

    toggle.value = "ON";
    localStorage.setItem("github", " github");
  } else if (toggle.value == "ON") {
    toggle.value = "OFF";
    localStorage.removeItem("github");
    document.querySelector(".github-close").style.display = "none";
  }
});
document.getElementById("whatsapp-int").addEventListener("click", function () {
  let btn = document.getElementById("whatsapp");
  btn.classList.toggle("green");
  //---------append him------------//
  let toggle = document.getElementById("whatsapp-int");
  if (toggle.value == "OFF") {
    document.querySelector(".whatsapp-close").style.display = "block";

    toggle.value = "ON";
    localStorage.setItem("whatsapp", " whatsapp");
  } else if (toggle.value == "ON") {
    toggle.value = "OFF";
    localStorage.removeItem("whatsapp");
    document.querySelector(".whatsapp-close").style.display = "none";
  }
});
document.getElementById("bio-int").addEventListener("click", function () {
  let btn = document.getElementById("bio");
  btn.classList.toggle("green");
  //---------append him------------//
  let toggle = document.getElementById("bio-int");
  if (toggle.value == "OFF") {
    document.querySelector(".bio-close").style.display = "block";

    toggle.value = "ON";
    localStorage.setItem("bio", " bio");
  } else if (toggle.value == "ON") {
    toggle.value = "OFF";
    localStorage.removeItem("bio");
    document.querySelector(".bio-close").style.display = "none";
  }
});
// document
//   .getElementById("snapchat-add-btn")
//   .addEventListener("click", function () {
//     let btn = document.getElementById("snapchat-add-btn");
//     btn.classList.toggle("green");
//     //---------append him------------//
//     let toggle = document.getElementById("snapchat-btn");
//     if (toggle.value == "OFF") {
//       toggle.value = "ON";
//       localStorage.setItem("snapchat", " snapchat");
//     } else if (toggle.value == "ON") {
//       toggle.value = "OFF";
//       localStorage.removeItem("snapchat");
//     }
//   });
// document
//   .getElementById("telegram-add-btn")
//   .addEventListener("click", function () {
//     let btn = document.getElementById("telegram-add-btn");
//     btn.classList.toggle("green");
//   });
// document
//   .getElementById("github-add-btn")
//   .addEventListener("click", function () {
//     let btn = document.getElementById("github-add-btn");
//     btn.classList.toggle("green");
//   });
// document
//   .getElementById("spotify-add-btn")
//   .addEventListener("click", function () {
//     let btn = document.getElementById("spotify-add-btn");
//     btn.classList.toggle("green");
//   });
// document.getElementById("bio-add-btn").addEventListener("click", function () {
//   let btn = document.getElementById("bio-add-btn");
//   btn.classList.toggle("green");
// });
