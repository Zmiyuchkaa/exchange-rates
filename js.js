// Домашка про кастом джоин с приколами


function customJoin(arr) {
    let result = arr[0][0].toUpperCase() + arr[0].slice(1) + " ";
    let commaWords = ["moreover", "however"];

    for (let i = 1; i < arr.length; i++) {
        if (commaWords.includes(arr[i + 1]) || commaWords.includes(arr[i])) {
            result += arr[i] + ", ";
            continue
        
        }
        result += arr[i] + " ";
    } 
    return result;
}

console.log(customJoin(["jane", "loves", "football", "however", "it's", "not", "her", "sport"]))

// "jane"
// arr


//arr[0].slice(1) => "ane"

// ты отрезаешь первую букву, а потом приходится добавлять к ней срез из ane

// forEach(function ) - обязательно
//i = 0 ...continue. обращается к каждой