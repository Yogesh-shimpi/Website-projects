var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");


function openHTML() {
  content1.style.transform = "translate(0)";
  content2.style.transform = "translate(100%)";
  content3.style.transform = "translate(100%)";
  content4.style.transform = "translate(100%)";
  btn1.style.color = "#FF8200";
  btn2.style.color = "#000";
  btn3.style.color = "#000";
  btn4.style.color = "#000";
}

function openCSS() {
  content1.style.transform = "translate(100%)";
  content2.style.transform = "translate(0)";
  content3.style.transform = "translate(100%)";
  content4.style.transform = "translate(100%)";
  btn2.style.color = "#FF8200";
  btn1.style.color = "#000";
  btn3.style.color = "#000";
  btn4.style.color = "#000";
}
function openJS() {
  content2.style.transform = "translate(100%)";
  content1.style.transform = "translate(100%)";
  content3.style.transform = "translate(0)";
  content4.style.transform = "translate(100%)";
  btn3.style.color = "#FF8200";
  btn2.style.color = "#000";
  btn1.style.color = "#000";
  btn4.style.color = "#000";
}
function openJAVA() {
  content1.style.transform = "translate(100%)";
  content2.style.transform = "translate(100%)";
  content3.style.transform = "translate(100%)";
  content4.style.transform = "translate(0)";
  btn4.style.color = "#FF8200";
  btn2.style.color = "#000";
  btn3.style.color = "#000";
  btn1.style.color = "#000";
}
