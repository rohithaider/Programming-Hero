//target is to find the youngest person

const age = [23,78,82,7,76,34,19,21]


//writing the minimum age function

function minAge(age){
    let  minimumAge = age[0];
    for(const min of age){
        if(min<minimumAge){
        
            minimumAge=min;

        }
    }

    return minimumAge;
}

console.log(minAge(age));


