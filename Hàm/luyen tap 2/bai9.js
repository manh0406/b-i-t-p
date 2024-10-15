function demSoLanXuatHien(mangKyTu, kyTuCanTim) {
    let dem = 0;
    for (let i = 0; i < mangKyTu.length; i++) {
        if (mangKyTu[i] === kyTuCanTim) {
            dem++;
        }
    }
    return dem > 0 ? dem : -1;
}
let mangKyTu = ['a', 'b', 'c', 'a', 'd'];
let kyTuCanTim = 'a';
let soLanXuatHien = demSoLanXuatHien(mangKyTu, kyTuCanTim);
console.log("Số lần xuất hiện của ký tự", kyTuCanTim, "là:", soLanXuatHien);