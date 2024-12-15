function setAttr(selector, attr, value) {
    let elem = document.querySelector(selector);
    elem.setAttribute(attr, value);
}
setAttr('#elem1', 'class', 'newClass');
setAttr('#elem2', 'title', 'New Title');
