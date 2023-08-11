//array en js
let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

let array =["Hella", "Jana", "Dianna", "Svetlana"]

let dSueldo=1000;
let dSueldoNeto=1
//operador ternario
let dDescuento=(dSueldo>=1000 && dSueldo<2000)?dSueldo*0.1:dSueldo*0.2;
dSueldoNeto = dSueldo - dDescuento;
console.log(dSueldoNeto);
for(let i=0;i<array.length;i++){
    console.log(array[i])
}
