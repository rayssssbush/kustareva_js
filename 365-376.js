;(function() {
    let str1 = 'переменная модуля';
    let str2 = 'переменная модуля';
    let str3 = 'переменная модуля';
    function func1() {
        alert('функция модуля');
    }
    function func2() {
        alert('функция модуля');
    }
    function func3() {
        alert('функция модуля');
    }
    function func4() {
        alert('функция модуля');
    }
    function func5() {
        alert('функция модуля');
    }
    window.module = { str1, str2, func1, func2, func3, func4, func5 };
})();
