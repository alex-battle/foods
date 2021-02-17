document.querySelector('.menu').addEventListener('click', ()=>{
document.querySelectorAll('.target').forEach((item)=>{
    item.classList.toggle('change')
})
})


const icons = document.querySelectorAll('.section-1-icons i')

let i = 1
// counter variable
// on each change this counter should increase by one


setInterval(() => {
    // set interval for icons to do a slideshow of all images every second 
    // 2 arguments (function, time in milliseconds)

    i++

    const icon = document.querySelector('.section-1-icons .change')
    // select the element
    icon.classList.remove('change')
    // takes the class change off of the egg class that has a class of change
    if (i > icons.length){
        icons[0].classList.add('change')
        i = 1
    } else{
    icon.nextElementSibling.classList.add('change')
    }
}, 2000)
// 2000 is 2 seconds

