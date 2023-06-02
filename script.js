let opcion = -1;
let contOpcion1 = 0;
let contOpcion2 = 0;
let contOpcion3 = 0;
let contOpcion4 = 0;
let contOpcion5 = 0;
let contOpcion6 = 0;


while (opcion !== 0) {
  opcion = parseInt(prompt('MEMU DE EJERCICIOS: \n 1. Ordenar tres números ingresador por teclado de mayor a menor y de menor a mayor \n 2. Calcular el Area de una circunferencia \n 3. De acuerdo a las medidas de los lados de un triangulo, mostrar de qué tipo es este \n 4. Ingresar dos números por teclado y definir si uno es amigo del otro \n 5. Calcular el valor de una compra recibiendo un valor de compra y una cantidad \n 6. Recibir cuatro notas de un estudiante para determinar si gana o pierde \n 0. Salir '));

  if (opcion === 1){
    contOpcion1++
    let num1 = Number(prompt('Ingresar número: '));
let num2 = Number(prompt('Ingresar número: '));
let num3 = Number(prompt('Ingresar número: '));

 if (num1 > num2 ) {
    if(num2 > num3) {
        console.log("Mayor a menor "+num1 +"  " + num2 +"  "+ num3);
    }else{
        console.log("Mayor a menor "+ num3+"  "+ num1 +"  "+ num2);}
}else{if(num1 > num3){
    console.log("Mayor a menor " + num2 +" "+ num1 +" "+ num3);
}else{ if(num3 > num2){console.log ("Mayor a menor " + num3 +"  "+ num2 +"  "+ num1);}}
}

if (num1 < num2 ) {
    if(num2 < num3) {
        console.log("Menor a mayor "+num1 +"  " + num2 +"  "+ num3);
    }else{
        console.log("Menor a mayor "+ num3+"  "+ num1 +"  "+ num2);}
}else{if(num1 < num3){
    console.log("Menor a mayor " + num2 +" "+ num1 +" "+ num3);
}else{ if(num3 < num2){console.log ("Menor a mayor " + num3 +"  "+ num2 +"  "+ num1);}}
}
}else if (opcion === 2){
    contOpcion2++
    const pi = 3.1416
    let radio = parseFloat(prompt('Ingrese el radio del circulo: '))
    
    console.log('El area del circulo es: '+ pi*radio*radio);

}else if (opcion === 3){
    contOpcion3++
    let lado1 = parseFloat(prompt("Ingrese el primer lado del triángulo:"));
    let lado2 = parseFloat(prompt("Ingrese el segundo lado del triángulo:"));
    let lado3 = parseFloat(prompt("Ingrese el tercer lado del triángulo:"));
        if (lado1 === lado2 && lado2 === lado3) {
                console.log(" Triángulo Equilátero.");
          } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
                console.log("Triángulo Isósceles.");
          } else {
                console.log("Triángulo Escaleno.");
            }
}else if (opcion === 4){
    contOpcion4++
    let num1= parseInt(prompt('Ingrese un número: '));
    let num2 = parseInt(prompt('Ingrese un número: '));
            function numAm(numero) {
                let suma = 0;
                for (let i = 1; i <= numero / 2; i++) {
                  if (numero % i === 0) {
                    suma += i;
                  }
                }
                return suma;
              }
            
              const n1d = numAm(num1);
              const n2d = numAm(num2);
            
              if (n1d === num2 && div2 === num1) {
                console.log(num1 + " y " + num2 + " son  amigos.");
              } else {
                console.log(num1 + " y " + num2 + " no son  amigos.");
              }
            
}else if (opcion === 5){
    contOpcion5++
    let valCompra = parseInt(prompt('Ingrese el valor de la compra: $'));
    let cant = parseInt(prompt('Ingrese la cantidad del producto: '));

    let subtotal = valCompra * cant;
    let iva = subTotal * 0.19;
    let total = subTotal + iva;

    if (subtotal > 500000) {
      total = subTotal;
      iva = 0;
      console.log(`El valor del IVA es: $${iva}`);
      console.log(`El valor de la compra es: $${subtoTal}`);
      if (subtotal > 1000000) {
        let descuento = subTotal * 0.1;
        total -= descuento;
        console.log(`Descuento del 10% aplicado. Total: $${total}`);
      }
    } else {
      console.log(`Valor del IVA: $${iva}`);
      console.log(`Total: $${total}`);
}



}
}