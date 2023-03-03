const fibonacci = function(num) {
    num = Number(num)
    if(num < 0){
        return "OOPS"
    }
    let number = [1,1]
    for(let i =1; i < num; i++){
        newNum = number[i]+number[i-1]
        number.push(newNum)
    }
    return number[num-1]
    
};

// Do not edit below this line
module.exports = fibonacci;
