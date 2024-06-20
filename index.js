let menuBtn=document.querySelector("#menu");
let mobailMenu=document.getElementById("mobile-menu");
let main=document.getElementById("main");
let closeBtn=document.getElementById("close")
console.log(menuBtn);
console.log(mobailMenu);
menuBtn.addEventListener("click",()=>{
    main.classList.add("display-none");
    mobailMenu.classList.add("mobile-menu")
    console.log(mobailMenu);
})
closeBtn.addEventListener("click",()=>{
    console.log('hylo');
    main.classList.remove("display-none");
    mobailMenu.classList.remove("mobile-menu")
})