let dia2_contenedor = document.querySelector('.dia2_contenedor');

let dia2_linea1 = document.querySelector('.dia2_linea1')
let dia2_linea2 = document.querySelector('.dia2_linea2')
let dia2_linea3 = document.querySelector('.dia2_linea3')

let dia2_bandera = true;

dia2_contenedor.addEventListener('click',()=>{

    if (dia2_bandera) {
        dia2_linea1.classList.remove('dia2_linea1_reverse')
        dia2_linea2.classList.remove('dia2_linea2_reverse')
        dia2_linea3.classList.remove('dia2_linea3_reverse')
        dia2_linea1.classList.toggle('dia2_linea1_')
        dia2_linea2.classList.toggle('dia2_linea2_')
        dia2_linea3.classList.toggle('dia2_linea3_')
        dia2_bandera = false;
    }else{
        dia2_linea1.classList.remove('dia2_linea1_')
        dia2_linea2.classList.remove('dia2_linea2_')
        dia2_linea3.classList.remove('dia2_linea3_')
        dia2_linea1.classList.toggle('dia2_linea1_reverse')
        dia2_linea2.classList.toggle('dia2_linea2_reverse')
        dia2_linea3.classList.toggle('dia2_linea3_reverse')
        dia2_bandera = true;
    }

})


/* //////////////////////////////////////////////////////////////////////////////////////////////////// */

let dia5_circulo1 = document.querySelector('.dia5_circulo1');
let dia5_detalle1 = document.querySelector('.dia5_detalle1')

let dia5_circulo2 = document.querySelector('.dia5_circulo2');
let dia5_detalle2 = document.querySelector('.dia5_detalle2')

let dia5_circulo3 = document.querySelector('.dia5_circulo3');
let dia5_detalle3 = document.querySelector('.dia5_detalle3')

let dia5_circulo4 = document.querySelector('.dia5_circulo4');
let dia5_detalle4 = document.querySelector('.dia5_detalle4')

let dia5_circulo6 = document.querySelector('.dia5_circulo6');
let dia5_detalle6 = document.querySelector('.dia5_detalle6')

let dia5_circulo7 = document.querySelector('.dia5_circulo7');
let dia5_detalle7 = document.querySelector('.dia5_detalle7')

let dia5_circulo5 = document.querySelector('.dia5_circulo5');
let dia5_detalle5 = document.querySelector('.dia5_detalle5')

let dia5_circulo8 = document.querySelector('.dia5_circulo8');
let dia5_detalle8 = document.querySelector('.dia5_detalle8')

dia5_circulo1.addEventListener('mouseover',()=>{
    dia5_detalle1.classList.add("desaparecer")
})

dia5_circulo1.addEventListener('mouseout',()=>{
    dia5_detalle1.classList.remove("desaparecer")
})

dia5_circulo2.addEventListener('mouseover',()=>{
    dia5_detalle2.classList.add("desaparecer")
})

dia5_circulo2.addEventListener('mouseout',()=>{
    dia5_detalle2.classList.remove("desaparecer")
})

dia5_circulo3.addEventListener('mouseover',()=>{
    dia5_detalle3.classList.add("desaparecer")
})

dia5_circulo3.addEventListener('mouseout',()=>{
    dia5_detalle3.classList.remove("desaparecer")
})

dia5_circulo4.addEventListener('mouseover',()=>{
    dia5_detalle4.classList.add("desaparecer")
})

dia5_circulo4.addEventListener('mouseout',()=>{
    dia5_detalle4.classList.remove("desaparecer")
})

dia5_circulo5.addEventListener('mouseover',()=>{
    dia5_detalle5.classList.add("desaparecer")
})

dia5_circulo5.addEventListener('mouseout',()=>{
    dia5_detalle5.classList.remove("desaparecer")
})

dia5_circulo6.addEventListener('mouseover',()=>{
    dia5_detalle6.classList.add("desaparecer")
})

dia5_circulo6.addEventListener('mouseout',()=>{
    dia5_detalle6.classList.remove("desaparecer")
})

dia5_circulo7.addEventListener('mouseover',()=>{
    dia5_detalle7.classList.add("desaparecer")
})

dia5_circulo7.addEventListener('mouseout',()=>{
    dia5_detalle7.classList.remove("desaparecer")
})