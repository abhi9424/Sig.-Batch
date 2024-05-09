console.log('hello World')

console.log(document.body)

console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[3])

let cont = document.body.childNodes[1]
console.log(cont)
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)
console.log(cont.lastElementChild.style.color='orange')
console.log(cont.lastElementChild.style.backgroundColor='yellow')
console.log(cont.lastElementChild.parentNode)

console.log(cont.childNodes)
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[4])
console.log(document.body.firstElementChild.children[3])
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.firstElementChild.children[3].nextSibling)
console.log(document.body.firstElementChild.children[3].previousSibling)


console.log(document.body.children)
console.log(document.body.children[1])
console.log(document.body.children[1].rows)