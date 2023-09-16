function soma () {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
 
 let somar = parseInt(numero1) + parseInt(numero2);

 return document.getElementById('resultado').value = somar;
 
 }
    
function sub() {
    let numero1 = document.getElementById('num1').value;  
    let numero2 = document.getElementById('num2').value; 
    let subtrair = parseFloat(numero1) - parseFloat(numero2);
        
    return document.getElementById('resultado').value = subtrair;
        
}
    
    
function mult() {
    let numero1 = document.getElementById('num1').value; 
    let numero2 = document.getElementById('num2').value;
    let multiplicacao = parseFloat(numero1) * parseFloat(numero2);
        
    return document.getElementById('resultado').value = multiplicacao;
        
}
    
     
function divi() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
    let divisao = parseFloat(numero1) / parseFloat(numero2);
        
    return document.getElementById('resultado').value = divisao;

}

function pot() {

    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
    potencia = Math.pow(numero1, numero2);

    return document.getElementById('resultado').value = potencia; 
}



function raiz() {
    let numero1 = document.getElementById('num1').value;
    resultado = Math.sqrt(numero1);
        
    return document.getElementById('resultado').value = resultado;
        
}

function fato() {
    let numero1 = document.getElementById('num1').value;

          var acumula = 1;
          for(x = numero1; x > 1; x--) {
            acumula = acumula * x;
          }
          
          return document.getElementById('resultado').value = acumula;
}
