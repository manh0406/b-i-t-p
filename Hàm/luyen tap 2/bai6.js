function laSoNguyenDuong(so) {
    return Number.isInteger(so) && so > 0;
}
let so = 3.5;
let ketQua = laSoNguyenDuong(so);
console.log("Có phải là số nguyên dương:", ketQua);