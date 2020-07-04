
function sum(x) {

    var total = 0;
    for (var i = 0; i < x.length; i++) {
        total += Number(x[i]);
    }
    // return total;
}

// console.log(sum([1, 2, 3]));




function round(x) {
    return parseFloat(x.toFixed(4));

}

var x = -4.5555555;
var x = 5.0001000;

// console.log(round(-4.5555555));
// console.log(round(5.0001000));




function roundTo5(num) {
    return Math.ceil(num / 5) * 5;
}

// console.log(roundTo5(39));
// console.log(roundTo5(113));


// function getDiff(day, month, year) {
//     const currentDate = new Date();
//     const birthDate = new Date(`${year}-${month}-${day}`).getFullYear();

//     return currentDate-birthDate;
// }

// console.log(getDiff(`10`,`03`,`1995`));


function getDiff(date1, date2) {

    var diff = (date2.getTime() - date1.getTime())/1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365));

}

date1 = new Date(1995, 03, 10);
date2 = new Date(2020, 07, 05);
console.log(getDiff(date1, date2));
