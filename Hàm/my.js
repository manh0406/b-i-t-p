class Product{
    id;
    name;
    price;
    manufacturer;
    description;
    constructor(id, name, price, manufacturer, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.manufacturer = manufacturer;
        this.description = description;
    }
    sale(percent){
        this.price = (1 - percent/100) * this.price;

    }
}
let ss24 = new Product(1, "SS24 ultra", 30000000, "Samsung", "Hơi đắt")
console.log(ss24);
ss24.name="ss24 ultra pro"
console.log(ss24);
ss24.sale(10);
alert(ss24.price)
let iphone16 = new Product()