console.log('Akshay')


// let myBox = document.getElementsByClassName('box')
// console.log(myBox)
// myBox[2].style.backgroundColor = 'red'

document.getElementById('redBox').style.backgroundColor ='blue'

document.querySelector('.box').style.backgroundColor = 'green'

console.log(document.querySelectorAll('.box'))

document.querySelectorAll('.box').forEach(e =>{
    e.style.backgroundColor = 'red'

})

console.log(document.getElementsByTagName('div'))

// !+----------Matches Closes -------------------------------------
e = document.getElementsByTagName('div')
console.log(e[3].matches('#redBox'))