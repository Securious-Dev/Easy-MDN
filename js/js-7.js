function fetchTestWithoutAwait() {
  return fetch('http://shibe.online/api/shibes?urls=true&httpsUrls=true').then(response => response.json());
}

function test() {
  const data = fetchTestWithoutAwait();
  console.log(data)
}