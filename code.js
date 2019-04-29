/* 
Создать конвертер валют. Все находится в простой форме:
Инпут
Чекбокс с валютами, в которую конвертируем
Кнопка "конвертировать"
Валюта ввода пусть будет гривна. В чекбоксе будут остальные валюты (сделать штук 5).
При нажатии на конвертировать, он конвертирует гривну в нужную валюту и отображает на странице.
*/

let convertInput = document.getElementById("input-summ") // хранит введенное значение
let convertCurrency = document.getElementsByTagName("label");
let currency = {
    usd: .27,
    rub: 0.3,
    eur: .3,

}
    
// document.getElementsByName("check").forEach(function(item) {  //при выборе валюты выводит алерт
//     item.addEventListener('click', function() {
//         alert("Hello"); 
//     })
// })

// document.getElementById("result").onclick = function() {
//     alert("Hello")
//     document.getElementsById("result__output").innerText = "Hello";
//     return
// }

function moneyConverter(valNum) {
    document.getElementsByName("check").forEach(function(item) {  //при выборе валюты выводит алерт
        item.addEventListener('click', function() {
            if (true && item.id === "USD") {
                document.getElementById("outputrub").innerHTML = valNum * 0.27 + " USD"
            }
            else if (true && item.id === "EUR") {
                document.getElementById("outputrub").innerHTML = valNum * 0.3 + " EUR"
            }
            else if (true && item.id === "RUB") {
                document.getElementById("outputrub").innerHTML = valNum * 30 + " RUB"
            }
            else if (true && item.id === "AUD") {
                document.getElementById("outputrub").innerHTML = valNum * 0.18 + " AUD"
            }
            else if (true && item.id === "NPR") {
                document.getElementById("outputrub").innerHTML = valNum * 24 + " NPR"
            } 
        })
    })
    
}

