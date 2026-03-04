const label = document.getElementById("mylabel");
const button = document.getElementById("butts");
const min = 1;
const max =6;
let randnum;
button.onclick = function(){
    randnum = Math.floor(Math.random() * max)+min;
    label.textContent = "You rolled a " + randnum + "!";
}
