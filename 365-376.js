function appendText(selector, text) {
    let elems = document.querySelectorAll(selector);
    for (let elem of elems) {
        elem.textContent += text;
    }
}
appendText('.elem', ' added text');
