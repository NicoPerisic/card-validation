import validator from './validator.js';

//definir tarjeta
    let cardNumber = "";

//definir páginas
    let btnDonar = document.getElementById("btnDonar");
    let btnVerify = document.getElementById("btnVerify");
    let btnStart = document.getElementById("btnStart");

/// boton avanzar
btnDonar.addEventListener("click", ()=>{ // si hago clic en el boton, ejecuto la funcion para ocultar el modal con fcss
    
    document.getElementById("start").style.display = "none";
    document.getElementById("donate").style.display = "block";
});

///boton volver
btnStart.addEventListener("click", ()=>{ // si hago clic en el boton, ejecuto la funcion para ocultar el modal con fcss
    
    document.getElementById("final").style.display = "none";
    document.getElementById("start").style.display = "block";
});


btnVerify.addEventListener("click", ()=>{ // si hago clic en el boton, ejecuto la funcion para ocultar el modal con fcss
    
    cardNumber = document.getElementById("cardNumber").value;
    let validation = validator.isValid(cardNumber);
    let maskify = validator.maskify(cardNumber);
            
        if(cardNumber.length < 16){
            alert("Ingresa un número de tarjeta válido.");
        }else if(cardNumber === 0){
            alert("Ingresa un número de tarjeta válido.");
        }else if(validation===true){
            alert("Tarjeta " + maskify + " válida.");
                document.getElementById("final").style.display = "block";
                document.getElementById("start").style.display = "none";
                document.getElementById("donate").style.display = "none";
        }else {
            alert("Tarjeta "+ maskify + " inválida.")
            //verificar que el usuario ingresa numeros correctos, usar enseguida el validation - refactorizar
        }
 });

