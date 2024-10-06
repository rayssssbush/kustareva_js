let arr = [1,2,3,4,5];
let arr1 = ['a', 'b', 'c'];
console.log(arr);
//Вывод массиав при помощи цикла в консоль
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};
console.log('leght:'+arr.length);
arr1[0]=1;
arr1[1]=2;
arr1[2]=3;
for (let i = 0; i < arr1.length; i++) {
    arr1[i] += 3;
    arr1[i] ++;
}
console.log(arr1);