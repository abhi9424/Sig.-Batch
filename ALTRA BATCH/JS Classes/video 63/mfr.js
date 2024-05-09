// !----------Map--------------
let arr = [4, 8, 5, 2, 15]
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//    newArr.push(element**2) 
// }

let newArr = arr.map((e,index,array)=>{
    return e**2;
})
console.log(newArr);

// !----Filter-------------------------
let greaterThenSeven = (e)=>{
    if(e > 7){
        return true
    }
    else{
        return false
    }
}
console.log(arr.filter(greaterThenSeven))


let a = [1, 2, 5, 50 ,6]
let greater_then_3 = (e)=>{
    if(e > 3){
        return true
   }
   else{
        return false
   }
}
console.log(a.filter(greater_then_3))

// !-----------Reduce-------------------------
let arr2 = [5, 6, 8, 9, 10 ]
const red = (a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))

let str = 'Abhimanyu'
console.log(Array.from(str))
