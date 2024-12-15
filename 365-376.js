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
    window.str1 = str1; 
    window.func1 = func1; 
    window.func2 = func2;  
})();
