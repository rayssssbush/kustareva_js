function func(a) {
    let arr = [a];
    return function(b) {
        arr.push(b);
        return function(c) {
            arr.push(c);
            return function(d) {
                arr.push(d);
                return function() {
                    return arr;
                };
            };
        };
    };
}
console.log(func(2)(3)(4)(5)());
