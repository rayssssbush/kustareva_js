let elems = document.querySelectorAll('#parent p');
for (let elem of elems) {
  let span = document.createElement('span');
  span.textContent = elem.textContent;
  elem.textContent = '';
  elem.appendChild(span);
  let removeLink = document.createElement('a');
  removeLink.href = '';
  removeLink.textContent = 'remove';
  elem.appendChild(removeLink);
  span.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = span.textContent;
    span.textContent = '';
    span.appendChild(input);
    input.addEventListener('blur', function() {
      span.textContent = this.value;
      span.addEventListener('click', func);
    });
    span.removeEventListener('click', func);
  });
  removeLink.addEventListener('click', function(event) {
    event.preventDefault();
    elem.remove();
  });
}