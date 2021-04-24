const btn = document.querySelector(".btn");
const inputData = document.querySelector("input[name=outputText]");
const txtColor = document.querySelector("input[name=txt]");
const bgColor = document.querySelector("input[name=bg]");
const elementSelector = document.querySelector("select[name=elementSelector]");
const createElement = document.querySelector("select[name=addElement]");
const addElementBTN = document.querySelector("button[name=adder]");
const clsToggle = document.querySelector("select[name=classes]");
const main = document.querySelector("#main");
const output = document.querySelector("#output");
const note = document.querySelector("#note");
const classesArray = ["bigger", "border", "linear"];
const elementsArray = ["section", "main", "header"];
let nodelister;

document.addEventListener("DOMContentLoaded", () => {
  classesArray.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.innerHTML = item;
    clsToggle.appendChild(option);
  });
  elementsArray.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.innerHTML = item;
    createElement.appendChild(option);
  });
  nodelister = document.querySelectorAll("#main > *");
  elementRemover();

  elementsGenerator();
});

function elementsGenerator() {
  elementSelector.innerHTML = "";
  nodelister = document.querySelectorAll("#main > *");

  nodelister.forEach((element, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.innerHTML = element.tagName;
    elementSelector.appendChild(option);
  });
}
function elementRemover() {
  nodelister.forEach((item) => {
    item.addEventListener("dblclick", eraseElement);
  });
}
function eraseElement() {
  main.removeChild(this);
  elementsGenerator();
}

btn.addEventListener("click", (e) => {
  let tempElement = nodelister[elementSelector.value];
  tempElement.innerText = inputData.value;
  tempElement.style.backgroundColor = bgColor.value;
  tempElement.style.color = txtColor.value;
  tempElement.style.padding = "10px 5px";
  tempElement.classList.toggle(clsToggle.value);
});

addElementBTN.addEventListener("click", () => {
  console.log(createElement.value);
  let temp = document.createElement(createElement.value);
  temp.textContent = `this is a ${createElement.value} element`;
  temp.addEventListener("click", eraseElement);
  main.appendChild(temp);
  elementsGenerator();
});

const hide = () => {
  note.style.display = "none";
};
setTimeout(hide, 6000);
