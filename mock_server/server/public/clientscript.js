const moviesElement = document.getElementById('movies');
fetch('movies')
  .then((res) => res.json())
  .then((data) => {
    const items = data.items;
    items.forEach((movie) => {
      const row = document.createElement('tr');
      for (let prop in movie) {
        const td = document.createElement('td');
        td.innerHTML = movie[prop];
        row.append(td);
      }
      moviesElement.append(row);
    });
  });
function addMovie() {
  console.log(this);
  var formData = new FormData(document.querySelector('form'));
  const data = Object.fromEntries(formData.entries());
  let b = JSON.parse(JSON.stringify(data));
  fetch('movie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(b),
  }).then((res) => {});
  return false;
}
