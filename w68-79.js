let arr = [1,2,3,4,5];
let arr1 = ['a', 'b', 'c'];
let arr2=[];
let arr3 = ['a', 'b', 'c', 'd', 'e'];
let key1 = 1;
let key2 = 2;
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
for (let i = 1; i<6;i++){
    arr2.push(i);
}
console.log(arr2)
console.log(arr[key1]+arr[key2])
console.log(delete arr3[2])
console.log(arr[arr.length]);