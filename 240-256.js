let strings = ["hello", "world", "javascript"];
each(strings, function(str) {
    return str.split('').reverse().join('');
});
console.log(strings);