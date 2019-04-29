function moneyConverter(valNum) {
    document.getElementsByName("check").forEach(function(item) {  // подключись к чек-боксам
        item.addEventListener('click', function() { // как только на одну из чек-боксов нажмут
            if (true && item.id === "USD") { // и id чек-бокса будет USD
                usdVal = (valNum * 0.27).toFixed(2)
                document.getElementById("outputrub").innerHTML = usdVal + " USD"
            }
            else if (true && item.id === "EUR") { // и id чек-бокса будет EUR
                eurVal = (valNum * 0.3).toFixed(2)
                document.getElementById("outputrub").innerHTML = eurVal + " EUR"
            }
            else if (true && item.id === "RUB") { // и id чек-бокса будет RUB
                document.getElementById("outputrub").innerHTML = valNum * 30 + " RUB"
            }
            else if (true && item.id === "AUD") { // и id чек-бокса будет AUD
                document.getElementById("outputrub").innerHTML = valNum * 0.18 + " AUD"
            }
            else if (true && item.id === "NPR") { // и id чек-бокса будет NPR
                document.getElementById("outputrub").innerHTML = valNum * 24 + " NPR"
            } 
        })
    })
    
}

