const list = document.querySelectorAll('.list');
let selected = null;

async function fetchHtmlAsText(url) {
  return await (await fetch("./html/" + url)).text();
}

async function importPage(event) {
  if (selected) selected.target.classList.remove("selected");
  selected = event;
  event.target.classList.add("selected");
  document.querySelector('#main').innerHTML = await fetchHtmlAsText(event.target.id + '.html');
}

list.forEach((title) => (title.addEventListener("click", importPage)));
