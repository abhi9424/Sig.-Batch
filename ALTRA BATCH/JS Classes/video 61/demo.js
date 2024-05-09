let random = Math.random()
console.log(random)

let a = prompt('Enter First Number');
let c = prompt('Enter operation Number');
let b = prompt('Enter Second Number');

let obj = {
    '+' : '-',
    "*" : "+",
    "-" : "/",
    "/" : "*",
}

if(random > 0.2){
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c];
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)

}