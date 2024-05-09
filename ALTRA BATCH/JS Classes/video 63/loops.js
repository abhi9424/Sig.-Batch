let a = [1, 3, 5, 10,95 ]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element) 

}

// !-------forEach-------------------

a.forEach((value, index, array) =>{
    console.log(value, index, array)
})

// !------For Of -------------------------
// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
//     }
// }

console.log('---------------------')


for (const iterator of a) {
    console.log(iterator)
}

