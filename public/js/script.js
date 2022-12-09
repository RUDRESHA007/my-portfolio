const msg=document.querySelector('.msg')
const thanks=document.querySelector('.thanks-container')
const open=document.querySelector('.toggle-bar1')
const close=document.querySelector('.toggle-bar2')
const navbar=document.querySelector('.nav-tabs')
console.log(window.innerWidth);
// const reload=setInterval(() => {
//     if(window.innerWidth>=850){
//         open.style.display='none'
//         close.style.display='none'
//         navbar.style.top='0rem'
// }
// else{
//     navbar.style.top='-18.2rem'
    
// }

// }, 1000);

open.addEventListener('click',
()=>{
    open.style.display='none'
    close.style.display='block'
    navbar.style.top='5.2rem'
    console.log('open');
})

close.addEventListener('click',
()=>{
    close.style.display='none'
    open.style.display='block'
    console.log('close');
    navbar.style.top='-18.2rem'

})





// msg.innerHTML

const condition=msg.innerHTML=='Thank you...!'
if(condition==true){
    thanks.style.display='flex'

    setInterval(() => {
            thanks.style.display='none'
    }, 7000);

}
else{
    thanks.style.display='none'

}