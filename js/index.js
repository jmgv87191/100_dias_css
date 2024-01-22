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

dia5_circulo1.addEventListener('mouseover',()=>{
    dia5_circulo1.classList.add("mouseover1")
})