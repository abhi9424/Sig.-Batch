let button = document.getElementById('btn')

button.addEventListener('dblclick',()=>{
    // alert('I was Clicked');
    document.querySelector('.box').innerHTML = 'yuyy you clicked me Ab <b>enjoy kr beta</b>'
})

button.addEventListener('contextmenu',()=>{
    alert('Dont use Right  Click please');
    // document.querySelector('.box').innerHTML = 'yuyy you clicked me Ab <b>enjoy kr beta</b>'
})

document.addEventListener('keydown',(e)=>{
    console.log(e.key,e.keyCode)
})