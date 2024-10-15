function doiChoHaiSo(a, b) {
    [a, b] = [b, a];
    console.log("Sau khi đổi chỗ: a =", a, ", b =", b);
}
let x = 5, y = 10;
doiChoHaiSo(x, y);