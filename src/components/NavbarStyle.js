let arrow = document.querySelectorAll(".arrow");

for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("verMenu");
    })
}

let menuBarra = document.querySelector(".menuBarra");
let menuBarraBtn = document.querySelector(".fa-bars");
console.log(menuBarraBtn);
menuBarraBtn.addEventListener("click", ()=>{
    menuBarra.classList.toggle("cierre");
});