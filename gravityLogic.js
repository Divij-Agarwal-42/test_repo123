//This is the gravity logic for the website
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.getElementById("DrawButton").addEventListener("click", function() {
    let userInput = document.getElementById("TextInput").value;
    ctx.font = "30px Arial";
    ctx.fillText(userInput, 10, 50);
});
document.getElementById("ClearButton").addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
document.getElementById("AnimateButton").addEventListener("click", function() {
    let userInput = document.getElementById("TextInput").value;
    ctx.font = "30px Arial";
    window.requestAnimationFrame(draw);
});

function draw{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}