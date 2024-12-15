function forEach(selector, func) {
    let elems = document.querySelectorAll(selector);
    for (let elem of elems) {
        func(elem);
    }
}
forEach('p', function(elem) {
    elem.textContent += '!';
});
