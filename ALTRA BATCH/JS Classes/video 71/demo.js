console.log(document.querySelector('.box'))
console.log(document.querySelector('.container').innerHTML)
console.log(document.querySelector('.box').innerHTML)

console.log(document.querySelector('.box').innerText)

console.log(document.querySelector('.container').innerText)

console.log(document.querySelector('.container').outerHTML)

console.log(document.querySelector('.container').tagName)
console.log(document.querySelector('.container').nodeName)
console.log(document.querySelector('.container').textContent)

console.log(document.querySelector('.box').innerHTML = 'this is a my box')

console.log(document.querySelector('.box').hasAttribute('style'))

console.log(document.querySelector('.box').getAttribute('style'))

// console.log(document.querySelector('.box').setAttribute('style','color:green'))

console.log(document.querySelector('.box').attributes)

// console.log(document.querySelector('.box').removeAttribute('style'))

console.log(document.designMode = 'on')

console.log(document.querySelector('.box').dataset)

let div = document.createElement('div');
div.innerHTML = 'I have inserted By <b>Harry Bhai</b>'
div.setAttribute('class','created');
document.querySelector('.container').append(div);


'----------------------------'

console.log(document.querySelector('.container').classList)
console.log(document.querySelector('.container').className)
console.log(document.querySelector('.container').classList.toggle('green'))
console.log(document.querySelector('.container').classList.toggle('green'))
console.log(document.querySelector('.container').classList.toggle('green'))


