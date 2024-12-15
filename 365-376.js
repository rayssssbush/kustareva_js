let elems = document.querySelectorAll('p');
for (let elem of elems) {
  let removeLink = document.createElement('a');
  removeLink.href = '#';
  removeLink.textContent = ' [strike]';
  elem.appendChild(removeLink);
  removeLink.addEventListener('click', function(event) {
    event.preventDefault();
    elem.style.textDecoration = 'line-through';
  });
}
