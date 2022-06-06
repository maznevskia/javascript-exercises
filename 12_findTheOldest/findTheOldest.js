const findTheOldest = function(people) {
    let oldest = people[0];
    
    if(!oldest.yearOfDeath)
        oldest.yearOfDeath = new Date().getFullYear(); 
    yearsOldest = oldest.yearOfDeath - oldest.yearOfBirth;

    for ( let i = 1; i < people.length; i++) {
        if (!people[i].yearOfDeath)
            people[i].yearOfDeath = new Date().getFullYear(); 

        let yearsCurrent = people[i].yearOfDeath - people[i].yearOfBirth

        if ( yearsOldest < yearsCurrent ) {
            yearsOldest = yearsCurrent;
            oldest = people[i];
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
