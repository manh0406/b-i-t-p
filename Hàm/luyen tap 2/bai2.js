function tinhDienTichHinhTron(banKinh) {
    const PI = 3.14159;
    return PI * banKinh * banKinh;
}

function tinhChuViHinhTron(banKinh) {
    const PI = 3.14159;
    return 2 * PI * banKinh;
}

let banKinh = 3;
let dienTich = tinhDienTichHinhTron(banKinh);
let chuVi = tinhChuViHinhTron(banKinh);
console.log("Diện tích hình tròn:", dienTich);
console.log("Chu vi hình tròn:", chuVi);  
