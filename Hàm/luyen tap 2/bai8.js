function daoNguocMang(mang) {
    return mang.reverse();
}
let mangSo = [1, 2, 3, 4, 5];
let mangDaoNguoc = daoNguocMang(mangSo);
console.log("Mảng đảo ngược:", mangDaoNguoc);