let select = document.querySelector('#select');
for (let option of select.options) {
    if (option.selected) {
        option.textContent += '!';
    } else {
        option.textContent += '?';
    }
}
