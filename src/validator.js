const validator = {
  isValid : (cardNumber) => { //objeto, recibe parametro con cardNumber//
      let convert = cardNumber.split('').reverse(); //split transforma en array para poder recorrerlo luego en el for, y reverse lo da vuelta
      let sum     = 0;
      let n       = 0;

      for (let i = 0; i < convert.length; i++) { //ciclo da la vuelta al codigo, definimos i (indice/posición de lo que voy a recorrer), comienza en 0, si la posición es menor al largo de convert, se suma uno hasta llegar a 16.
          if (i % 2 === 1) { //si en i dividido 2 y el restante es igual a 1, se ejecuta lo que sigue
              n = Number(convert[i] * 2); //selecciona sólo el numero que esta en i en la variable convert(posicion dada), y que ese numero lo multipliques por dos
              if (n >= 10) { //si n es mayor o igual a 10
                  n = (n + 10) + 1 //el resultado es n, se le suma 10 y después se le suma 1
              }
          } else {
              n = Number(convert[i]) //selecciona sólo el numero que esta en i en la variable convert, se deja como está
          }
          sum = sum + n //sum es 0, se le suman todos n (los resultados de la formula (cambia tras cada vuelta al ciclo))
      }

      return sum % 10 === 0 ? true :false // si el residuo dividido 10 es igual a cero (%), if(?), si no retorna 0, es falso (else(:))
  },

  maskify : (cardNumber) => { //
      let arr    = cardNumber.split(''); //defino arr (array), nombre simple para la definicion de el array card number y split lo transforma en array
      let string = ''; //definimos string a la que le asignaremos un valor después

      for (let i = 0; i < arr.length; i++) { //ciclo da la vuelta al codigo, definimos que i comienza en 0, si la posición es menor al largo de arr, se incrementa en 1 hasta llegar a 16.
          if (i < arr.length - 4) { //el largo de arr menos los 4 ultimos caracteres, se borran los ltimos 4 para usar maskify y ocultarlos
              string = string + '#'; //definimos que # será el caracter para ocultar los 12 digitos
          } else {
              string = string + arr[i]; //y si no, a string se suma a el numero que esta en i en la variable arr - aparece la alerta
          }
      }

      return string;
  }
}

export default validator;

