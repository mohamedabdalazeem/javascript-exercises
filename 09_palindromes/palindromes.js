const palindromes = function (string) {
    const newStr = string.toLowerCase()

    const strArr = newStr.split("")
    const rmPun = strArr.filter(char => {
        if(char == '.' || char ==  '?' || char ==  ',' || char ==  '!' || char == ';' || char == ':' || char == '-' || char == ' ' || char == '‘'){
            return false
        } else {
            return true
        }
       
    })

    return (rmPun.join("") === rmPun.reverse().join(""))
      

};

// Do not edit below this line
module.exports = palindromes;
