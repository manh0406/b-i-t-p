function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * tinhGiaiThua(n - 1);
    }
}
let n = 5;
let giaiThua = tinhGiaiThua(n);
console.log("Giai thừa của", n, "là:", giaiThua);