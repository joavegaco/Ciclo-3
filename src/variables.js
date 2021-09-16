
var nueva = "Bienvenido, Johan, a tu página. Archivo javascript";
var nueva2 = "Experimento"

//var es una variable global

console.log(nueva)
document.write(nueva)

console.log(nueva2)

//Intentaremos con variables locales o variables 'let'

if(true){
    let nueva = "Experimento2"
    console.log(nueva)
}

const server = "198.12"
console.log(server)

var numero1 = 1.4
var numero2 = 1.6

if (numero1<2 && numero2>1){
    console.log(numero2)
}

if (numero1<2 && numero2>1){
    document.write(" (" + numero2 + ")")
}

function  f_test(num1, num2, stade = false){
    result = num1*num2
    
    if (stade == false){
        console.log(result)
    }else{
        alert(result)
    }
}



