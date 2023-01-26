const list = document.querySelectorAll('.list');
const cssLink = document.getElementById("pageStyle");
let selected = null;

function changeStyle(url) {
  if (cssLink) {
    cssLink.href = "./css/" + url;
  }
}

async function fetchHtmlAsText(url) {
  return await (await fetch("./html/" + url)).text();
}

async function importPage(event) {
  if (selected) selected.target.classList.remove("selected");
  selected = event;
  event.target.classList.add("selected");
  changeStyle(event.target.id + ".css")
  document.querySelector('#main').innerHTML = await fetchHtmlAsText(event.target.id + ".html");
}

list.forEach((title) => (title.addEventListener("click", importPage)));
