const sumAll = function(num1, num2) {
    let sum = 0;
    let biggerNum = num2;
    let smallerNum = num1;
    if(num1 < 0 || num2 < 0 || !(typeof num1 == "number") || !(typeof num2 == "number")){
        return "ERROR";
    }
    if (num1 > num2){
        biggerNum = num1;
        smallerNum = num2;
    }
    for(let i = 0; i <= biggerNum-smallerNum; i++){
        sum += biggerNum-i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
