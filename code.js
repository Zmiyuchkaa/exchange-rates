function moneyConverter(valNum) {
    document.getElementsByName("check").forEach(function(item) {  // подключись к чек-боксам
        item.addEventListener('click', function() { // как только на одну из чек-боксов нажмут
            if (true && item.id === "USD") { // и id чек-бокса будет USD
                let convertVal = (valNum * 0.27).toFixed(2)
                document.getElementById("outputrub").innerHTML = convertVal + " USD"
            }
            else if (true && item.id === "EUR") { // и id чек-бокса будет EUR
                convertVal = (valNum * 0.3).toFixed(2)
                document.getElementById("outputrub").innerHTML = convertVal + " EUR"
            }
            else if (true && item.id === "RUB") { // и id чек-бокса будет RUB
                convertVal = (valNum * 30).toFixed(2)
                document.getElementById("outputrub").innerHTML = convertVal + " RUB"
            }
            else if (true && item.id === "AUD") { // и id чек-бокса будет AUD
                convertVal = (valNum * 0.18).toFixed(2)
                document.getElementById("outputrub").innerHTML = convertVal + " AUD"
            }
            else if (true && item.id === "NPR") { // и id чек-бокса будет NPR
                convertVal = (valNum * 24).toFixed(2)
                document.getElementById("outputrub").innerHTML = convertVal + " NPR"
            } 
        })
    })
}

