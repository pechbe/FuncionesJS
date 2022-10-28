//Ejercicios de algoritmos con JS
/*function Ejercicio1 (arg1, arg2){
    let numero1 = +arg1;
    let numero2 = +arg2;
    let suma = numero1 + numero2;
    const result = document.getElementById('result')
    result.innerHTML = suma;
}
document.addEventListener('DOMContentLoaded',  Ejercicio1(6, 1)) */

function callMenu(){
    let nro_ejercicio = parseInt(
        prompt("Ingrese el nro. del ejercicio a ejecutar: \r\n 1.Suma \r\n 2.Promedio de \r\n examenes \r\n 3. Calcular área de rectángulo \r\n 4. Calcular el área de un triángulo \r\n 5. Calcular el área de una circunferencia  \r\n 6. Determinar el sueldo semanal de un trabajador \r\n 7.  Cuántas pulgadas pedir para los metros requeridos \r\n 8.  Cuántos dólares puede adquirir \r\n 9.  Determinar la edad de las personas postulantes a trabajo \r\n 10. De tres personas, saber el nombre y edad de la persona menor \r\n 11. Mostrar el bono de un trabajador según sus años de antiguedad.  \r\n  12. Cuál es el salario al cabo de 6 años \r\n 13. Número de aprobados y número de desaprobados \r\n 14. Número total de focos de un lote \r\n 15. Saber si una persona puede votar o no ")
    );

    if(isNaN(nro_ejercicio)){
        alert("Debe ingresar un número del menú");
    }
    else{
        MenuEjercicio(nro_ejercicio);
    }
}

function MenuEjercicio(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let par1= parseFloat(prompt("Ingrese el primer valor a sumar:"));
            let par2= parseFloat(prompt("Ingrese el segundo valor a sumar:"));
            alert(Ejercicio1(par1, par2));
            break;
        case 2:
            let par11= parseFloat(prompt("Ingrese la primera nota:"));
            let par21= parseFloat(prompt("Ingrese la segunda nota:"));
            let par31= parseFloat(prompt("Ingrese la tercera nota:"));
            let par41= parseFloat(prompt("Ingrese la cuarta nota:"));
            alert(Ejercicio2(par11, par21, par31, par41));
            break;
        case 3:
            let par12= parseFloat(prompt("Ingrese la base:"));
            let par22= parseFloat(prompt("Ingrese la altura:"));
            alert(Ejercicio3(par12, par22));
            break;
        case 4:
            let par13= parseFloat(prompt("Ingrese la base:"));
            let par23= parseFloat(prompt("Ingrese la altura:"));
            alert(Ejercicio4(par13, par23));
            break;
        case 5:
            let par14= parseFloat(prompt("Ingrese el diámetro:"));
            alert(Ejercicio5(par14));
            break;
        case 6:
            let par15= parseFloat(prompt("Ingrese las horas trabajadas:"));
            let par25= parseFloat(prompt("Ingrese el sueldo por hora:"));
            alert(Ejercicio6(par15, par25));
            break;
        case 7:
            let par16 = parseFloat(prompt("Ingrese el total de metros a comprar:"));
            alert(Ejercicio7(par16));
            break;
        case 8:
            let par17= parseFloat(prompt("Ingrese el total de soles para calcular el valor en dólares:"));
            let par27= parseFloat(prompt("Ingrese el tipo de cambio para dólares:"));
            alert(Ejercicio8(par17, par27));
            break;
        case 9:
            let par18= prompt("Ingrese la fecha de nacimiento, del postulante de trabajo, en el formato AAAA-MM-DD");
            alert(Ejercicio9(par18));
            break;
        case 10:
            let par19= prompt("Ingrese nombre y edad de la primera persona, siguiendo el ejemplo: \r\n Pedro,21");
            let par29= prompt("Ingrese nombre y edad de la segunda persona, siguiendo el ejemplo: \r\n Pedro,21");
            let par39= prompt("Ingrese nombre y edad de la tercera persona, siguiendo el ejemplo: \r\n Pedro,21");
            alert(Ejercicio10(par19, par29, par39));
            break;
        case 11:
            let par110 = parseInt(prompt("Ingrese los años de trabajo de un empleado para saber el bono que le corresponde:"));
            alert(Ejercicio11(par110));
            break;
        case 12:
            alert(Ejercicio12());
            break;
        case 13:
            let par111 = parseInt(prompt("Ingrese el nro de alumnos a los cuales se les revisará las notas:"));
            alert(Ejercicio13(par111));
            break;
        case 14:
            let par112 = parseInt(prompt("Ingrese el total de focos verdes:"));
            let par122 = parseInt(prompt("Ingrese el total de focos blancos:"));
            let par132 = parseInt(prompt("Ingrese el total de focos rojos:"));
            alert(Ejercicio14(par112, par122, par132));
            break;
        case 15:
            let par113 = parseInt(prompt("Ingrese la edad de la persona para saber si puede votar:"));
            alert(Ejercicio15(par113));
            break;
    }
}

//1.    Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.
function Ejercicio1 (arg1, arg2){
    if(isNaN(arg1) || isNaN(arg2)){
        return "Debe ingresar ambos valores"
    }
    else{
        return arg1 + arg2;
    }
}


//2.    Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.
function Ejercicio2 (par1, par2, par3, par4){
    if(isNaN(par1) || isNaN(par2) || isNaN(par3) || isNaN(par4)){
        return "Debe ingresar las cuatro notas"
    }
    else{
        let promedio = (par1+par2+par3+par4)/4;
        return promedio;
    } 
}


//3.    Calcular el área de un rectángulo
function Ejercicio3 (par1, par2){
    if(isNaN(par1) || isNaN(par2)){
        return "Debe ingresar la base y la altura"
    }
    else{
        let promedio = par1*par2;
        return promedio;
    }
    
}

//4.    Calcular el área de un triángulo
function Ejercicio4 (par1, par2){
    if(isNaN(par1) || isNaN(par2)){
        return "Debe ingresar la base y la altura"
    }
    else{
        let promedio = par1*par2/2;
        return promedio;
    }
}


//5.    Calcular el área de una circunferencia
function Ejercicio5 (par1){
    if(isNaN(par1)){
        return "Debe ingresar el diámetro"
    }
    else{
        let radio = par1/2;
        const pi = 3.14;
        let area = pi * (radio*radio);
        return area;
    }
    
}


//6.    Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre
function Ejercicio6 (par1, par2){
    if(isNaN(par1) || isNaN(par2)){
        return "Debe ingresar las horas trabajadas y el sueldo por hora"
    }
    else{
        const diaSemana = 7;
        let suelSeman = par1 * par2 * diaSemana;
        return suelSeman;
    }
}



//7.    Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).

function Ejercicio7 (par1){
    if(isNaN(par1)){
        return "Debe ingrese el total de metros"
    }
    else{
        const metroPulg = 0.0254;
        let totalPulgadas = par1 * 1 /metroPulg;
        let resultado = metros.toString() + ' metros se tiene que pedir ' + totalPulgadas.toFixed(2) + ' pulgadas'
    
        return resultado;
    }
}


//8.    Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.
function Ejercicio8 (par1, par2){
    if(isNaN(par1) || isNaN(par2)){
        return "Debe ingrese el total de soles y el tipo de cambio"
    }
    else{
        let dolares = par1 / par2;
        let resultado = ' Con '+ par1.toString() + ' soles se puede adquirir: ' + dolares.toLocaleString('es', { style: 'currency', currency: 'USD' });
    
        return resultado;
    }
}

//9. Determinar la edad de las personas que solicitan trabajo
function Ejercicio9 (par1){
    //if(isNaN(par1)){
    //    return "Debe ingresar las fechas de nacimiento de las dos personas que postulan al trabajo"
    //}
    let fecha1 = new Date(par1);

    let diferencia1 = (new Date().getTime() - fecha1.getTime()) / 1000;  
    diferencia1/= (60*60*24);
    diferencia1/= 360;

    return 'El postulante tiene ' + Math.abs(Math.round(diferencia1).toString()) + ' años';
}

//10. Determinar la edad de las personas que solicitan trabajo
function Ejercicio10 (cadena, cadena2, cadena3){
   
    let edadMenPer = 0;
    let nomMenPer = "";

    const myArray = cadena.split(",");
    const myArray2 = cadena2.split(",");
    const myArray3 = cadena3.split(",");

    const datos = [
        { nombre: myArray[0], edad: myArray[1]},
        { nombre: myArray2[0], edad: myArray2[1]},
        { nombre: myArray3[0], edad: myArray3[1]},
    ];

    for (o = 0; o < datos.length; o++){
        for (i = 0; i < datos.length; i++){
            if(edadMenPer === 0){
                if(datos[o].edad < datos[i].edad ){
                    edadMenPer = datos[o].edad;
                    nomMenPer = datos[o].nombre;
                }
            }
            else{
                if(datos[i].edad < edadMenPer){
                    edadMenPer = datos[i].edad;
                    nomMenPer = datos[i].nombre;
                }
            }
        }
    }
    
    /*for (let i = 0 ; i < datos.length; i++){
            console.log(datos[i].nombre + ' ' + datos[i].edad.toString());
    }*/
    
    return 'La persona de menor edad es : ' + nomMenPer + ' ' + edadMenPer;
}

//11. 
function Ejercicio11(par1){
    let bono = 0;
    switch(par1){
        case 1: bono = 100; break;
        case 2: bono = 200; break;
        case 3: bono = 300; break;
        case 4: bono = 400; break;
        case 5: bono = 500; break;
        default: bono = 1000; break;
    };

    return 'Por tener ' + par1 + ' año(s), el bono correspondiente es de: $ ' + bono.toString();
}

//12.
function Ejercicio12(){
    let salario = 1500;
    let incremento = 150;
    let salarioIncremento = salario +incremento;
    let salarioSeisAnios = (salario +incremento) * 6;

    return 'En seis años el salario total es de : ' + salarioSeisAnios.toString() + ' y el salario de cada uno de esos anos es de : ' + salarioIncremento;

}

//13.

function Ejercicio13(par1){
    var notas = [0]
    for (i = 1; i <= par1; i++){
        notas.push(parseInt(prompt("Ingrese el valor de la nota " + i)));
    };

    let aprobados = 0;
    let desaprbados = 0;

    for (let i = 0 ; i < notas.length; i++){
        if(i >0){
            if(notas[i] > 10){
                aprobados++;
            }
            else{
                desaprbados++;
            }
        }
    }
    return 'El nro de alumnos aprobados es: ' + aprobados + ' y el nro de alumnos desaprobados es: ' + desaprbados;
}

//14.
function Ejercicio14 (canFocVer, canFocBla, canFocRoj){

    const lote = [
        { cantidad: canFocVer},
        { cantidad: canFocBla},
        { cantidad: canFocRoj},
    ];

    let totalFocos = 0;
    for (o = 0; o < lote.length; o++){
        totalFocos  = totalFocos + lote[o].cantidad;
    }

    return 'El total de focos de un lote es de: ' +totalFocos
}

//15.
function Ejercicio15 (edad){
    let msj = "No puede votar por tener menos de 18 años";
    if(edad >= 18){
        msj = "Si puede votar por ser mayor de 17 años";
    }
  
    return msj;
}