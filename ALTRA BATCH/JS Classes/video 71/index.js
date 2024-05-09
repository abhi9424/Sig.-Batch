console.log(document.querySelector('.box'))
console.log(document.querySelector('.container').innerHTML)
console.log(document.querySelector('.box').innerHTML)
console.log(document.querySelector('.container').innerText )
console.log(document.querySelector('.container').outerHTML )
console.log(document.querySelector('.box').outerHTML )

console.log(document.querySelector('.container').tagName)
console.log(document.querySelector('.container').nodeName)

console.log(document.querySelector('.container').textContent)
console.log(document.querySelector('.container').hidden)
// console.log(document.querySelector('.container').hidden = true)

console.log(document.querySelector('.box').innerHTML = 'Hay I am Abhi Dangi')
console.log(document.querySelector('.box').hasAttribute('style'))
console.log(document.querySelector('.box').getAttribute('style'))
console.log(document.querySelector('.box').setAttribute('style', 'color : pink'))

console.log(document.querySelector('.box').attributes)
// console.log(document.querySelector('.box').removeAttribute('style'))

console.log(document.querySelector('.box').dataset)

// !----------------------------

// let div = document.createElement('div')
// div.innerHTML = 'i have been inserted <b>by Harry</b>'
// div.setAttribute('class','created');
// document.querySelector('.container').after(div)

let div = document.createElement('div')
div.innerHTML = 'i have been inserted <b>by Harry</b>'
div.setAttribute('class','created');
document.querySelector('.container').prepend(div)

let cont = document.querySelector('.container')
cont.insertAdjacentHTML('afterbegin', '<b> I am under the water , please help me </b>')

// !-----------------------------

// console.log(document.getElementsByClassName('container'))

console.log(document.querySelector('.container').classList)
console.log(document.querySelector('.container').classList)
console.log(document.querySelector('.container ').className)
console.log(document.querySelector('.container').classList.add('red'))
console.log(document.querySelector('.container').classList.add('abhi'))
console.log(document.querySelector('.container').classList.remove('red'))
console.log(document.querySelector('.container').classList.toggle('red'))
