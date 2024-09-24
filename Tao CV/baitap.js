//function: hàm
// addEventListener: lắng nghe sự kiện click.
// Khi sự kiện click xảy ra thì nó sẽ thực hiện function và hiển thị
//document.getElementById("btn").addEventListener("click", function () {
 //   alert("Hello")
//})
/*let userName = prompt("who is there?", '');
if (userName == 'Admin'){
    let pass = prompt('Password?', '');
    if(pass == 'TheMaster') {
        alert('Welcome');
    }else if(pass == null){
        alert('Canceled');
    } else{
        alert('Wrong password');}
}else if (userName == null){
    alert('Canceled');

}else{
    alert("I don't know you");
}*/
/*let Login = prompt("Enter :");
let message = (Login == 'Employee') ?
    'Hello':
    (Login == 'Director')?
        'Greetings' :
        (login == '') ?
            'No login' :
            '';
alert(mesage);*/
let a = +prompt('a?', '');
switch(a){
    case 0:
        alert(0);
        break;
        case 1:
            alert(1);
        case 2:
            case 3:
            alert('2,3');
            break;
}
let value = prompt('Type a number', 0);
if(value > 0){
    alert('1');
}else if(value < 0){
    alert(-1);
}else{
    alert(0);
}