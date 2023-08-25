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
