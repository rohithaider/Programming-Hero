// To check if a year is a leap year, you can use the following logic:
// Divisibility by 4: If a year is evenly divisible by 4, it is a leap year.
// Divisibility by 100: If a year is divisible by 100, but not by 400, it is not a leap year.
// Divisibility by 400: If a year is divisible by 100, but also by 400, it is a leap year 

function isLeapYear(year){
    let leapYear = false;
        if(year%4===0){
            if(year%100===0){
                if(year%400===0){
                    leapYear=true;
                }
                else{
                    leapYear=false;
                }

            }
            else{
                leapYear=true
            }
}
return leapYear;

}
console.log(isLeapYear(400))