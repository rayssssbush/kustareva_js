let ul = document.querySelector('#elem');
let arr = ['item 1', 'item 2', 'item 3', 'item 4'];

for (let elem of arr) {
	let li = document.createElement('li');
	li.textContent = elem;
	li.addEventListener('click', function() {
		alert(li.textContent);
	});

	ul.appendChild(li);
}
