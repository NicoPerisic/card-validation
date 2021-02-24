import validator from './validator.js';

console.log(validator);

//alert(validator.isValid("4137894711755904"));//

let btnDonar = document.getElementById("btnDonar");
let btnFinal = document.getElementById("btnFinal");
let btnStart = document.getElementById("btnStart");

btnDonar.addEventListener("click", ()=>{ // si hago clic en el boton, ejecuto la funcion para ocultar el modal con fcss
    
    document.getElementById("start").style.display = "none";
    document.getElementById("donate").style.display = "block";
});

btnFinal.addEventListener("click", ()=>{ // si hago clic en el boton, ejecuto la funcion para ocultar el modal con fcss
    
    document.getElementById("donate").style.display = "none";
    document.getElementById("final").style.display = "block";
});

btnStart.addEventListener("click", ()=>{ // si hago clic en el boton, ejecuto la funcion para ocultar el modal con fcss
    
    document.getElementById("final").style.display = "none";
    document.getElementById("start").style.display = "block";
});
