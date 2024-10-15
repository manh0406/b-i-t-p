/*
* Tom tat noi dung :
*  -cách lập tình hàm -> khó có theeer mô tẩ được dữ liệu  của 1 phần tử
* vd; gia sử các cần phải xây dựng app quản lý sinh viên
* - Sử dụng hàm: không thể mô tả được
* - triwwst lý lập trính OOP: thiết kế chuognw trình theo đối tượng
* bawnfd cách mô tả lại đối tườợng thực  tế vào đói tuognwj lập trinhd trong ÔOP
* TẤT CAE MỌI TỨ ĐỀU*
Luu ý: tạo 1 class thì cần tạo 1 file có */
class Temperature {
    constructor(celsius) {
        if (celsius < -273) {
            throw new Error("Nhiệt độ không hợp lệ. Nhiệt độ thấp nhất là -273 độ C.");
        }
        this.celsius = celsius;
    }

    getFahrenheit() {
        return (this.celsius * 9/5) + 32;
    }

    getKelvin() {
        return this.celsius + 273.15;
    }
}
const temperature = new Temperature(25);
console.log("Nhiệt độ Fahrenheit:", temperature.getFahrenheit());
console.log("Nhiệt độ Kelvin:", temperature.getKelvin());
