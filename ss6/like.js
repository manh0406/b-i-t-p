// function: hàm
// addEventListener: lắng nghe sự kiện click.
// Khi sự kiện click xảy ra thì nó sẽ thực hiện function và hiển thị
/*let btn : HTMLElement = document.getElementById("btn")
btn.addEventListener("click", function(){
    btn.style.backgroundColor = "blue";
    btn.style.color="white";
    btn.innerText="Unlike";

})

let a = prompt("a");
console.log(a)
let b = prompt("b");
console.log(b)
alert(a + b)
*/
let thu = prompt("Nhap thu")
switch (thu){
    case "1": console.log("Chu Nhat"); break; // Nếu không có từ khóa break

case "2":
    console.log("Thu hai"); break;

case "3":
    console.log("Thu ba"); break;
    default:console.log("khong hop le "); break;
}


