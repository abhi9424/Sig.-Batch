let button = document.getElementById('btn')


button.addEventListener("dblclick",()=>{
    // alert('Hay I was Clicked')
    document.querySelector(".box").innerHTML = "<b>Enjoy your Click</b>"
})


button.addEventListener("contextmenu",()=>{
    alert('you are Click Right button')
    // document.querySelector(".box").innerHTML = "<b>Enjoy your Click</b>"
})

document.addEventListener("keydown",(e)=>{
    // alert('you are Click Right button')
    console.log(e.key)
    console.log(e.keyCode)
})
