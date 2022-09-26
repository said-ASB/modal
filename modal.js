let modal = document.querySelector(".modal");
let openbutton = document.querySelector(".openbutton");
let closebtn = document.querySelector(".closebtn");

openbutton.addEventListener('click',function(){
    modal.classList.add("show-modal")
})
modal.addEventListener('click',function(){
    modal.classList.remove("show-modal")
})

