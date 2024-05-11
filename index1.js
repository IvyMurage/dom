function js_style() {
  const paragragph = document.querySelector("#text");
  paragragph.style.font = "Georgia";
  paragragph.style.fontSize = "20px";
  paragragph.style.color = "red";
}
const btn = document.querySelector("#jsstyle");

btn.addEventListener("click", js_style);
