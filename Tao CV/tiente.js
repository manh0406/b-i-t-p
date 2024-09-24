// function convertCurrency() {
//     const amount = parseFloat(document.getElementById('amount').value);
//     const fromCurrency = document.getElementById('fromCurrency').value;
//
//     const toCurrency = document.getElementById('toCurrency').value;
//     const resultElement = document.getElementById('result');
//
//
//     // Giả sử tỷ giá USD/VND là 23000
//     if (fromCurrency === "VND" && toCurrency === "USD") {
//         const result = amount / 23000;
//         resultElement.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
//     } else if (fromCurrency === "USD" && toCurrency === "VND") {
//         const result = amount * 23000;
//         resultElement.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
//     } else {
//         // Thực hiện các phép tính chuyển đổi khác
//         resultElement.textContent = "Tỷ giá chưa được hỗ trợ";
//     }
 //}
