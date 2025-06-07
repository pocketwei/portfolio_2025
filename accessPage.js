function accessPage() {
let inputPswd = document.getElementById("pswdInput")
.value;
let correctPswd = "mlanson.demo";
if (inputPswd === correctPswd) {
document.getElementById("lockScreenOverlay").style.display = "none";
}
else {
alert("Incorrect password!");
}
}
