console.log('I AM A tutorial for Loop');

let a =1
console.log(a)
// console.log(a + 1);
// console.log(a + 2);
// console.log(a + 3);

for(let i = 1; i <= 10; i++)
{
    console.log(a+i)
}
console.log('-----------------------------------------')

let obj ={
    Name : 'Akshay',
    Role : 'Programmer',
    Id : 345,
    Company : 'code with JavaScript',
}

for (const key in obj) {
        const element = obj[key];
        console.log(key, ':' , element);        
    
}

for (const c of 'Akshay') {
    console.log(c);
}

console.log('-------------------------------');

// let i = 5;
// while( i < 7){
//     console.log(i);
//     i++;
// }

 i = 10;
 do {
    console.log(i);
    i++;
 } while (i < 11);