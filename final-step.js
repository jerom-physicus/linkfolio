let l = [];
for (let [key, value] of Object.entries(localStorage)) {
  l.push(key);
}
console.log(l);
