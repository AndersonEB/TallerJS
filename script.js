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
    let num1 = Number(prompt('Ingresar numero: '));
let num2 = Number(prompt('Ingresar numero: '));
let num3 = Number(prompt('Ingresar numero: '));

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

}



}