let dia2_contenedor = document.querySelector('.dia2_contenedor');
let dia2_barra2 = document.querySelector('.dia2_barra2');
let dia2_barra1 = document.querySelector('.dia2_barra1');
let dia2_barra3 = document.querySelector('.dia2_barra3');


dia2_contenedor.addEventListener('click',()=>{
    dia2_barra2.setAttribute("style","visibility: hidden;")
    dia2_barra1.setAttribute("style","animation: mover_top 300ms linear forwards;")
    dia2_barra3.setAttribute("style","    animation: mover_bottom 300ms linear forwards;")

})