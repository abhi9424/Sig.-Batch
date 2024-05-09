// console.log('Hay ABHI you are very intelligent')
// console.log('Hay ABHI your TShirt is very nice')
// console.log('Hay ABHI your course is very nice')

console.log('----------------------------------')
function nice(name) {
    console.log('Hay', name, 'you are very intelligent!');
    console.log('Hay', name, 'you are very nice!');
    console.log('Hay', name, 'your course very nice!');
}
// nice('Rohan');
// console.log('------------')
// nice('Akshay');
// console.log('------------')
// nice('Vijay');

console.log('----------------------------------')


function sum(a, b, c=3){
    // console.log(a + b)
    // console.log(typeof(a));
    // console.log(typeof(b));
    // console.log(typeof(c));
    return a + b + c;

}
// result1 = sum(4,5,'A',5);
// result2 = sum(8);
// result3 = sum("4",1);

// console.log('Sum of the number is ',result1);
// console.log('Sum of the number is ',result2);
// console.log('Sum of the number is ',result3);


console.log('-------Arrow Function--------------------------')

const func1 = (x)=>{
    console.log('This Is A Arrow Function');
}

func1(45);
func1(34);
func1(64);