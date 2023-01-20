const removeFromArray = function(arr, ...moreArgs) {
for(arg of moreArgs){
    for(element of arr){
        if(element === arg){
            arr.splice(arr.indexOf(element),1);
        }
    }
}
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
