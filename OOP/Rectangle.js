class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);

    }

    draw(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillRect(0, 0, this.length, this.width);
    }

}
const rect = new Rectangle(100, 50);
const canvas = document.getElementById('myCanvas');
rect.draw(canvas);

rect.length = 150;
rect.width = 75;
rect.draw(canvas);

console.log("Diện tích:", rect.getArea());
console.log("Chu vi:", rect.getPerimeter());