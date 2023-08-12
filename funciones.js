function saludar(){
    console.log("Hola mundo");
}
function saludar2(nombre){
    console.log("Hola " + nombre+" "+ 'desde la funcion saludar2');
}
function suma(num1, num2){
    return num1 + num2;
}
//llamaos a las funciones 

saludar();
saludar2("Hella")
console.log(suma(5,3));
function sum2(... args){
    //programacion funcional
    return args.reduce((a,b)=> a+b);
    //programacion imperativa recorremos el array con un foreach
    /*let sum = 0;
    for(let n of args){
        sum += n;
    }
    return sum;
    */
}
console.log(sum2(1,2,3,4,5,6,7,8,9,10));