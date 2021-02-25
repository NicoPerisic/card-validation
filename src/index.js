import validator from './validator.js';


    let cardNumber = "";

    let btnDonar = document.getElementById("btnDonar");
    let btnVerify = document.getElementById("btnVerify");
    let btnStart = document.getElementById("btnStart");
    let btnFinal = document.getElementById("btnFinal");

btnDonar.addEventListener("click", ()=>{ // si hago clic en el boton, ejecuto la funcion para ocultar el modal con fcss
    
    document.getElementById("start").style.display = "none";
    document.getElementById("donate").style.display = "block";
});

btnVerify.addEventListener("click", ()=>{ // si hago clic en el boton, ejecuto la funcion para ocultar el modal con fcss
    
    cardNumber = document.getElementById("cardNumber").value;
    let validation = validator.isValid(cardNumber);
    console.log(validation)
    let maskify = validator.maskify(cardNumber);
    console.log(maskify)
    let newCardNumber= Number(cardNumber);
    let arraySum = 0;

        for (let i = 0; i< newCardNumber.length; i++){
            arraySum += newCardNumber[i];
        };
            
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
        }
 });

btnStart.addEventListener("click", ()=>{ // si hago clic en el boton, ejecuto la funcion para ocultar el modal con fcss
    
    document.getElementById("final").style.display = "none";
    document.getElementById("start").style.display = "block";
});
