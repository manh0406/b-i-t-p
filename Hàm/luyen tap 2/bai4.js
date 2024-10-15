function laKyTuSo(kyTu) {
    return !isNaN(kyTu) && kyTu >= '0' && kyTu <= '9';
}
let kyTu = '5';
let ketQua = laKyTuSo(kyTu);
console.log("Có phải là ký tự số:", ketQua);