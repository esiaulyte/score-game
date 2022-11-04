let PlayNo = document.getElementById("PlayNo");
let input = document.querySelector("input");

input.addEventListener("input", updatePlayNo);
function updatePlayNo(event) {
  PlayNo.innerText = event.target.value;
}

const buttons = document.getElementsByTagName("button");
let displayNumber1 = document.getElementById("displayNumber1");
let displayNumber2 = document.getElementById("displayNumber2");
let number1 = 0;
let number2 = 0;

buttons[0].addEventListener("click", function () {
  // if (displayNumber1.innerText == PlayNo.innerText) {
  //   // buttons[0].disabled = true;
  //   // buttons[1].disabled = true;
  //   displayNumber1.style.color = "green";
  // } else {
  if (
    displayNumber2.innerText < PlayNo.innerText &&
    displayNumber1.innerText < PlayNo.innerText
  ) {
    number1++;
    displayNumber1.innerText = number1;
    if (displayNumber1.innerText == PlayNo.innerText) {
      displayNumber1.style.color = "green";
    }
  }
  // }
});

buttons[1].addEventListener("click", function () {
  // if (displayNumber2.innerText == PlayNo.innerText) {
  //   // buttons[0].disabled = true;
  //   // buttons[1].disabled = true;
  //   displayNumber2.style.color = "red";
  // } else {
  if (
    displayNumber1.innerText < PlayNo.innerText &&
    displayNumber2.innerText < PlayNo.innerText
  ) {
    number2++;
    displayNumber2.innerText = number2;
    if (displayNumber2.innerText == PlayNo.innerText) {
      displayNumber2.style.color = "red";
    }
  }
});

buttons[2].addEventListener("click", function () {
  number1 = 0;
  displayNumber1.innerText = number1;
  displayNumber1.style.color = "black";
  number2 = 0;
  displayNumber2.innerText = number2;
  displayNumber2.style.color = "black";
  // buttons[0].disabled = false;
  // buttons[1].disabled = false;
});

// button[2].addEventListener("click", function () {
//   number1 = 0;
//   countNum.innerText = number1;
//   number2 = 0;
//   countNums.innerText = number2;
// });
