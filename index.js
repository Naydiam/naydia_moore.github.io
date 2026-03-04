const decreaseBtn = document.getElementById("DEC");
const resetBtn = document.getElementById("RES");
const increaseBtn = document.getElementById("IN");

const countLabel = document.getElementById("myCount");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count =0;
    countLabel.textContent = count;
}