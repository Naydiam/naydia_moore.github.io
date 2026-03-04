const textBox = document.getElementById("textbox");
const toF = document.getElementById("toFar");
const toC = document.getElementById("toCel");
const res = document.getElementById("result");
let temp;

function convert()
{   
    if(toF.checked)
    {
        temp = Number(textBox.value);
        temp = temp * 9/5 +32;
        res.textContent = temp.toFixed(1) + "F";
    }
    else if(toC.checked)
    {
        temp = Number(textBox.value);
        temp = (temp-32) * 5/9;
        res.textContent = temp.toFixed(1)+"C";
    }
    else
    {
        res.textContent = "buns";
    }
}