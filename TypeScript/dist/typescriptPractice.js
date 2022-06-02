"use strict";
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
function findNameOfTallestMountain(mountainArray) {
    //declare a variable to hold the max height
    //iterate through each mountain
    //look at the height
    //compare the height of the mountain to variable. If greater, then set it to that height. If not, contiue
    //return variable that holds max height
    let maxHeight = 0;
    let maxName = '';
    for (let i = 0; i < mountainArray.length; i++) {
        //mountainArray[i].height
        if (mountainArray[i].height > maxHeight) {
            maxHeight = mountainArray[i].height;
            maxName = mountainArray[i].name;
        }
    }
    return maxName;
}
console.log(findNameOfTallestMountain(mountains));
let products = [
    { name: "Plunger", price: 10 },
    { name: "Electric Drill", price: 40 },
    { name: "Hammer", price: 5 },
    { name: "motor", price: 10.00 },
    { name: "sensor", price: 12.50 },
    { name: "LED", price: 1.00 }
];
function calcAverageProductPrice(productArray) {
    let totalSum = 0;
    for (let i = 0; i < productArray.length; i++) {
        //productArray[i].price is the element of each object in the array.
        totalSum += productArray[i].price;
    }
    return totalSum / productArray.length;
}
console.log(calcAverageProductPrice(products));
