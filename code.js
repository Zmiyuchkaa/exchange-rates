let calcButtons = document.getElementsByName("button"); // переменная принимает список всех кнопок
let calcInput = document.getElementById("input"); // переменная принимает всё, что попадет в инпут
calcInput.innerText = "0"; // изначальное значение инпута - 0

function eachButton(button) {
    button.addEventListener("click", function() {
        let buttonValue = button.innerText; // переменная хранит текст из кнопки

        if(calcInput.innerText === "0") calcInput.innerText = ""; // стирает нолик когда начинаем вводить цифры

        switch (buttonValue) {
            case "AC":
                calcInput.innerText = "0";
                break;
            case "C":
                calcInput.innerText = calcInput.innerText.substring(0, calcInput.innerText.length - 1);
                if(calcInput.innerText === "") calcInput.innerText = "0";
                break;
            case "=":
                let resValue = calcInput.innerText;
                if (resValue.indexOf("UAH"))
                calcInput.innerText = eval(resValue);
                break;
            case "UAH":
                calcInput.innerText

            default:
            calcInput.innerText += buttonValue;
        }
    } 
    )
}

calcButtons.forEach(eachButton);