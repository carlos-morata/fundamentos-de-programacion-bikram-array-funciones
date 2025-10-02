// // 1 ARRAYS
let arrayVacio = [];

// // 2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // 3
let arrayNumerosPares = [0, 2, 4, 6, 8];

// // 4
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// // 5 FUNCIONES
function suma(numero1, numero2) {
    let suma = numero1 + numero2;
    return suma;
}
console.log(suma(15, 10));

// // 6
function potenciacion(a, b) {
    return a**b
}
console.log(potenciacion(48, 9));

// // 7
function separarPalabras (string) {
    return string.split(" ")
    
}
console.log(separarPalabras([]))

//  8
function repetirString (string, numero) {
    return string.repeat(numero)
}

//  9
function esPrimo (n) {
        if(n <= 1) {
            return false
    }
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false
        }
    }
    return true
}

// 10
function ordenarArray(arr) {
    return arr.sort(function(a, b) {
        return a - b
    })
}

// 11 
function obtenerPares (arr) {
    let pares = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            pares.push(arr[i])
        }
    }
    return pares;
}

// 12
function pintarArray (arr) {
    return "[" + arr.join(", ") + "]"
}

// 13
function arrayMapi (arr, funcion) {
    let nuevo = []
    for(let i = 0; i < arr.length; i++) {
        nuevo.push(funcion([arr[i]]))
    }
    return nuevo
}

// 14
function eliminarDuplicados (a) {
    let nuevo = []
    for(let i = 0; i < a.length; i++) {
        if(!nuevo.includes(a[i])) {
            nuevo.push(a[i])
        }
    }
    return nuevo
}

// 15 ARRAYS
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

// 16
let holaMundo = ["Hola", "Mundo"]

// 17
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"]

// 18
let arrayDeArrays = [[756, "nombre"], [225, "apellido"], [298, "direccion"]]

// 19 FUNCIONES
function multiplicacion (a, b) {
    return a * b
}

// 20
function division (a, b) {
    return a / b
}

// 21
function esPar (a) {
    if(a % 2 == 0) {
        return true
    } else {
        return false
    }
}

// 22
function suma (a, b) {
    return a + b
}
function resta (a, b) {
    return a - b
}
function multiplicacion (a, b) {
    return a * b
}
var arrayFunciones = [suma, resta, multiplicacion]

// 23
function ordenarArray2 (arr) {
    return arr.sort(function(a, b) {})
    return b - a
}

//  24
function obtenerImpares (arr) {
    let impares = []
    for(let i = 0; i <arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            impares.push(arr[i])
        }
    }
    return impares
}

// 25
function sumarArray (arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]
    }
    return suma
}

// 26
function multiplicarArray (arr) {
    let result = 1
    for(let i = 0; i < arr.length; i++) {
        result = result * arr[i]
    }
    return result
}