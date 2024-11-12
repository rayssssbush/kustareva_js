let n = [4, 2, 5, 19, 13, 0, 10];
let m = 0;
for (let i = 0; i < n.length; i++) {
    m += Math.pow(n[i], 3);
}
console.log(Math.sqrt(m));
