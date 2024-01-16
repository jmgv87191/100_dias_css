let menu_dia2 = document.querySelector('.dia2_contenedor');
let dia2_lineTop = document.querySelector('.dia2_linea1')
let dia2_line = document.querySelector('.dia2_linea2')
let dia2_lineBottom = document.querySelector('.dia2_linea3')

menu_dia2.addEventListener('click',()=>{
    dia2_lineTop.classList.toggle('dia2_top');
    dia2_line.classList.toggle('dia2_centro');
    dia2_lineBottom.classList.toggle('dia2_bottom');
})