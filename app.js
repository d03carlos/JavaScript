let nombre = "Hola Mundo JS";

console.log(nombre);
let numero1 = 12.3;
let numero2 = 12.5;
let suma = numero1 + numero2;

let nom1 = "jana Cova";
console.log(suma);

console.log(nom1);
for (i = 1; i <= 10; i++) {
    console.log(i);
}
if (suma > 30) {
    console.log('el numero es mayor a: ' + suma)
}
else {
    console.log('el numero es: ' + suma)
}

let diaSemana = 'martes';
switch (diaSemana) {
    case 'lunes':
        console.log("es el primer dia de la semana");
        break;
    case 'martes':
        console.log('El dia es martes');
        break;
    case "miercoles":
        console.log("el dia es miercoles")
        break;
    default:
        console.log('Dia no valido');
        break;
}