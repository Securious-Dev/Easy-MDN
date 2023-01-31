function fetchTest() {
  const result = fetch('http://shibe.online/api/shibes?urls=true&httpsUrls=true')
    .then(response => response.json())
    .then(data => alertImgUrl(data));
}

function alertImgUrl(src) {
  alert(src[0]);
}