const findTheOldest = function(people) {
    const sorted = people.sort( (a,b) => {
        let aDeathYear = "yearOfDeath" in a ? a.yearOfDeath : new Date().getFullYear()
        let bDeathYear = "yearOfDeath" in b ? b.yearOfDeath : new Date().getFullYear()
        
        return (aDeathYear-a.yearOfBirth > bDeathYear-b.yearOfBirth ? -1 : 1) 
    })
    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
