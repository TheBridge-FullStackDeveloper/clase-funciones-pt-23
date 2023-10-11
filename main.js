function sum(a, b) {
  return a + b;
}

// console.log(sum(1, 2));

function saludar() {
  return "Hola";
}
// console.log(saludar());

function greet(greeting = "Hello", name, pepito) {
  if (!name) {
    return greeting;
  } else {
    return `${greeting} ${name} ${pepito}`;
  }
}
console.log(greet("Hola", "Rubén", "Lo que sea, por probar")); // Hola Rubén
console.log(greet(undefined, "Rubén")); // Hello Rubén
console.log(greet()); // Hello

// let name = prompt("Introduce tu nombre")
// console.log(name)

function calculadora() {
  let num1 = prompt("Introduce el 1º número.");
  let signo = prompt(
    "Introduce un signo aritmético entres los siguientes:\n'+' --> Suma\n'-' --> Resta\n'*'--> Multiplicación\n'/' --> División\n'^' --> Potencia\n'%' --> Módulo"
  );

  let num2 = prompt("Introduce el 2º número.");

  //convierto los numeros que estan en string a tipo number
  num1 = +num1;
  num2 = +num2;

  switch (signo) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "^":
      resultado = num1 ** num2;
      break;
    case "%":
      resultado = num1 % num2;
      break;

    default:
      break;
  }

  return `El resultado de la operación ${signo} ${num1} y ${num2} es ${resultado}`;
}

// console.log(calculadora())

// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'

function convierteString(num) {
  // aquí tu código
  if (typeof num == "number") {
    return num.toString();
  } else {
    return "Debo ser ejecutada con un número";
  }
}

// console.log(convierteString(7)); // el 7 en string
// console.log(convierteString("Hola")); //'Debo ser ejecutada con un número'
// console.log(convierteString(true)); //'Debo ser ejecutada con un número'
// console.log(convierteString("7")); //'Debo ser ejecutada con un número'

// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar.

function esPar(num) {
  // aquí tu código
  if (typeof num !== "number") {
    return "Debo ser ejecutado con un número";
  } else if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(7)); //false
console.log(esPar(2)); //true
console.log(esPar("hola")); //true
