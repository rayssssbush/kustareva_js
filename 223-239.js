const obj = {
    func1: function() { return 1; },
    func2: function() { return 2; },
    func3: function() { return 3; }
};

const sum = obj.func1() + obj.func2() + obj.func3();
console.log(sum); // 6
