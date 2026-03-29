const increasebtn = document.getElementById("increasebtn");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const mycount = document.getElementById("mycount");

let count = 0;
function updateColor() {
    if (count > 0) {
        mycount.style.color = "green";
    } else if (count < 0) {
        mycount.style.color = "red";
    } else {
        mycount.style.color = "black";
    }
}

increasebtn.onclick = function () {
    count++;
    mycount.textContent = count;
    updateColor();
};

decreasebtn.onclick = function () {
    count--;
    mycount.textContent = count;
    updateColor();
};

resetbtn.onclick = function () {
    count = 0;
    mycount.textContent = count;
    updateColor();
};