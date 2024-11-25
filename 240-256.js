let strings = ["hello", "world", "javascript"];
each(strings, function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
});
console.log(strings);
