const link = document.querySelectorAll(".link-text");
const navItem = document.querySelectorAll(".nav-item")

navItem.forEach((item)=>{
    if(!item.classList.contains("active")){
        item.classList.add("active");
    }
})

link.forEach((lt)=>{
    lt.addEventListener('click' , (e)=>{
            lt.closest('.nav-item').classList.toggle("active")
    })
})

link.forEach((li)=>{
    li.addEventListener('mouseover', (e)=>{
        e.target.style.borderBottom = "5px solid black";
        e.target.style.transition = "all .3s"
    })
})

link.forEach((li)=>{
    li.addEventListener('mouseout', (e)=>{
        e.target.style.borderBottom = "0 solid black";
    })
})