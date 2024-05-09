console.log('Hello Akshay');


let myBox = document.getElementsByClassName('box')
console.log(myBox)

myBox[2].style.backgroundColor = 'gray';

document.getElementById('redBox').style.backgroundColor='red'

document.querySelector('.box').style.backgroundColor = 'green'
console.log(document.querySelectorAll('.box'))


document.querySelectorAll('.box').forEach(e => {
    console.log(e)
    e.style.backgroundColor = 'orange'
    e.style.border = '2px solid blue'
})
document.getElementsByTagName('h1').backgroundColor = ' red'

e = document.getElementsByTagName('div');

console.log(e);

console.log(e[3].matches('#redBox'))
console.log(e[6].matches('#redBox'))

console.log(e[3].closest('#redBox'))
console.log(e[3].closest('.Box'))
console.log(e[1].closest('.container'))
console.log(e[3].closest('html'))
console.log(e[3].closest('body'))

console.log(document.querySelector('.container').contains(e[3]))
console.log(document.querySelector('.container').contains(document.querySelector('body')))
console.log(document.querySelector('body').contains(document.querySelector('.container')))
 