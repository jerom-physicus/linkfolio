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
