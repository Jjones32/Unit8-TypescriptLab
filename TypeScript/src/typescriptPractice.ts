interface Mountain{
    name:string;
    height:number;
}

let mountains:Array<Mountain>= [
    {name:"Kilimanjaro", height: 19341},
    {name:"Everest", height: 29029},
    {name:"Denali", height: 20310},
];

function findNameOfTallestMountain(mountainArray:Array<Mountain>) :string{
    //declare a variable to hold the max height
    //iterate through each mountain
    //look at the height
    //compare the height of the mountain to variable. If greater, then set it to that height. If not, contiue
    //return variable that holds max height
    let maxHeight:number = 0;
    let maxName:string= '';

    for(let i = 0; i< mountainArray.length; i++){
        //mountainArray[i].height
        if(mountainArray[i].height > maxHeight){
            maxHeight = mountainArray[i].height;
            maxName= mountainArray[i].name;
        }
    }

    return maxName;
}

console.log(findNameOfTallestMountain(mountains));


//==============================================================================================================================================


interface Product{
    name:string
    price:number
}

let products:Array<Product>=[
    {name:"Plunger", price:10},
    {name:"Electric Drill", price:40},
    {name:"Hammer", price:5},
    {name:"motor", price:10.00},
    {name:"sensor", price:12.50},
    {name:"LED", price:1.00}
]

function calcAverageProductPrice(productArray:Array<Product>) :number{
    let totalSum= 0;
    for(let i = 0; i< productArray.length; i++){
        //productArray[i].price is the element of each object in the array.
       totalSum += productArray[i].price;
    }
    return totalSum / productArray.length;

    
}
console.log(calcAverageProductPrice(products))

interface InventoryItem{
    product:Product
    quantity:number
}

let inventory:Array<InventoryItem>=[
    {product:{name:"motor", price:10.00}, quantity:10 },
    {product:{name:"sensor", price:12.50}, quantity:4 },
    {product:{name:"LED", price:1.00}, quantity:20 }
]

function calcInventoryValue(items:Array<InventoryItem>) :number{
    let totalSum = 0;
    for(let i = 0; i<= items.length; i++){
        (items[i].product.price * items[i].quantity)* items.length;
    }
    return totalSum;
}
console.log(calcInventoryValue(inventory));