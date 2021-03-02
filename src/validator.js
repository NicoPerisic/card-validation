const validator = {
  isValid : (cardNumber) => { //objeto, recibe parametro con cardNumber//
      let convert = cardNumber.split('').reverse();
      let sum     = 0;
      let n       = 0;
    //console.log(convert)
      for (let i = 0; i < convert.length; i++) { //condicion para que el for funcione, el 0 es el primer numero//
          if (i % 2 === 1) {
              n = Number(convert[i] * 2);

              if (n >= 10) {
                  n = (n + 10) + 1
              }
          } else {
              n = Number(convert[i])
          }

          sum = sum + n
      }
      
      return sum % 10 === 0 ? true :false
  },

  maskify : (cardNumber) => {
      let arr    = cardNumber.split('');
      let string = '';

      for (let i = 0; i < arr.length; i++) {
          if (i < arr.length - 4) {
              string = string + '#';
          } else {
              string = string + arr[i];
          }
      }

      return string;
  }
}

export default validator;

