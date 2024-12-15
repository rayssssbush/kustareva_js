;(function() {
    function each(arr, func) {
        for (let i = 0; i < arr.length; i++) {
            func(arr[i], i, arr);
        }
    }
    function map(arr, func) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(func(arr[i], i, arr));
        }
        return result;
    }
    function reduce(arr, func, initialValue) {
        let accumulator = initialValue;
        for (let i = 0; i < arr.length; i++) {
            accumulator = func(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
    function filter(arr, func) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    }
    function find(arr, func) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i], i, arr)) {
                return arr[i];
            }
        }
        return undefined;
    }
    window._ = { each, map, reduce, filter, find };
})();