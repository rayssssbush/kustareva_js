const arr = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
const ul = document.getElementById('elem');

arr.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);

    li.addEventListener('click', () => {
        alert(item);
    });
});
