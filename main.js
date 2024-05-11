let element = document.querySelector("*");
let elements = document.querySelectorAll("*");
console.log(element);
console.log("queryAll", elements[0]);

let firstHeading = document.querySelector("h1");
console.log(firstHeading);
let secondHeading = document.querySelectorAll("h2");
console.log(secondHeading);
let note = document.querySelector(".menu-item");
let notes = document.querySelectorAll(".menu-item");
console.log("menu", notes);
console.log("note", note);

let logo = document.querySelector("#logo");
console.log("logo", logo);

let autoPlay = document.querySelector("[autoplay]");
console.log("autoPlay", autoPlay);
let autoplays = document.querySelectorAll("[autoplay]");

console.log("autoPlays", autoplays);
let nodes = document.querySelectorAll("div, p");
console.log("nodes", nodes);

let links = document.querySelector("p::first-line");

console.log("links", links);
let link = document.querySelectorAll("h2 ~ p");
console.log("link", link);

let pNote = document.querySelector(".note");
console.log("note", pNote.parentNode);

//next sibling
let currentNode = document.querySelector(".current");
let nextSibling = currentNode.nextElementSibling;
console.log("nextSibling", nextSibling);

let current = document.querySelector(".current");

while (nextSibling) {
  console.log(nextSibling);
  nextSibling = nextSibling.nextElementSibling;
}
let previousSibilng = current.previousElementSibling;
console.log("previousSibling", previousSibilng);

let textContentDiv = document.querySelector("#note");
console.log("textContentDiv", textContentDiv.textContent);
console.log("innerText", textContentDiv.innerText);
textContentDiv.textContent = "This is a note";

const scriptHTML = `<script>alert("Alert from innerHTML");</script>`;
const main = document.getElementById("main");

main.innerHTML = scriptHTML;

let menuItems = document.querySelector("#menu");
menuItems.innerHTML = "hello";

console.log("================================", menuItems.innerHTML);

const firstHeader = document.querySelector("h1");
const firstHeaderPro = document.createElement("h1");
firstHeaderPro.textContent = "Welcome to the before demo";
console.log(firstHeaderPro);

firstHeader.before(firstHeaderPro);

const libs = ["React", "Meteor", "Polymer"];

const items = libs.map((lib) => {
  const item = document.createElement("li");
  item.textContent = lib;
  return item;
});

const langsList = document.querySelector("#langs");
// langsList.firstElementChild.before(...items);
langsList.lastElementChild.after(...items);

let list = document.querySelector("#list");
list.insertAdjacentHTML("beforebegin", "<h4>List</h4>");
list.insertAdjacentHTML("afterbegin", "<li>Java</li>");
list.insertAdjacentHTML("beforeend", "<li>JavaScript</li>");
list.insertAdjacentHTML("afterend", "<h4>This is the whole list</h4>");
