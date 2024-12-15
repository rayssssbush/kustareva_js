let rows = document.querySelectorAll('table tr');
for (let row of rows) {
  let link = document.createElement('a');
  link.href = '#';
  link.textContent = ' [highlight]';
  let cell = document.createElement('td');
  cell.appendChild(link);
  row.appendChild(cell);
  link.addEventListener('click', function(event) {
    event.preventDefault();
    if (row.style.backgroundColor === 'green') {
      row.style.backgroundColor = '';
    } else {
      row.style.backgroundColor = 'green';
    }
  });
}