// Your code goes here

window.addEventListener("load", (e) => {
  console.log("YAY!! The page has been loaded successfully!!");
});

// nav buttons change to pink and get big on click, revert on second click

let navButtons = document.querySelectorAll(".nav-link");
navButtons.forEach(function (element) {
  element.addEventListener("click", () => {
    if (element.style.backgroundColor !== "red") {
      element.style.backgroundColor = "red";
    } else {
      element.style.backgroundColor = "orange";
    }
    if (element.style.fontSize !== "25px") {
      element.style.fontSize = "25px";
    } else {
      element.style.fontSize = null;
    }
    if (element.style.textDecorationLine !== "line-through") {
      element.style.textDecorationLine = "line-through";
    } else {
      element.style.textDecorationLine = null;
    }
    e.preventDefault();
  });
});

//Welcome To Fun Bus changes to purple on click

let funBusWelcome = document.querySelector(".intro h2");
funBusWelcome.addEventListener("click", () => {
  funBusWelcome.style.color = "purple";
});

// Let's Go changes to dodgerblue when text is copied

let letsGo = document.querySelector(".text-content h2");
letsGo.addEventListener("copy", () => {
  letsGo.style.color = "dodgerblue";
});

// images enlarge with mouseover

let allImg = document.querySelectorAll("img");
allImg.forEach(function (element) {
  element.addEventListener("mouseover", () => {
    element.style.transform = "scale(1.5)";
    element.style.transition = "all 0.5s";
  });
  element.addEventListener("mouseleave", () => {
    element.style.transform = "scale(1)";
  });
});

let contactUs = document.querySelector("a");

// to change color on double click "Fun Bus"

const mainTitle = document.querySelector(".logo-heading");
mainTitle.addEventListener("dblclick", () => {
  mainTitle.style.backgroundColor = "hotpink";
  mainTitle.style.color = "white";
});

//
const contentPick = document.querySelector(".content-pick");
contentPick.addEventListener("dblclick", () => {
  contentPick.style.backgroundColor = "purple";
  contentPick.style.color = "hotpink";
});

// change the color of the body

let body = document.querySelector("body");
body.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "red";
});

// change background color of header nav

let mainHeader = document.querySelector(".main-navigation");
mainHeader.addEventListener("click", () => {
  mainHeader.style.backgroundColor = "orange";
  event.stopPropagation();
});

let textSection = document.querySelectorAll("p");
console.log("This is the text selection ", textSection);
textSection.forEach(function (element) {
  element.addEventListener("dblclick", () => {
    element.style.backgroundColor = "blue";
    event.stopPropagation();
  });
});
