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
let Login = prompt("Enter :");
let message = (Login == 'Employee') ?
    'Hello':
    (Login == 'Director')?
        'Greetings' :
        (login == '') ?
            'No login' :
            '';
alert(mesage);