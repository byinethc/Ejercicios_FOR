/** Inicio Ejercicio 1 */
// Crea un programa que imprima en consola los números impares del 1 al 50.

// Itera del 1 al 50
for (let i = 1; i <= 50; i++) {
    // Verifica si el número es impar
    if (i % 2 !== 0) {
      console.log(i); // Imprime el número impar
    }
  }

 /** Fin Ejercicio 1*/

/** Inicio Ejercicio 2 */
// Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario


/** Fin Ejercicio 2*/

/** Inicio Ejercicio 3 */
// Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let i = 0; i < arreglo.length; i++) {
  if (typeof arreglo[i] === "number") {
    console.log(arreglo[i]);
  }
}

/** Fin Ejercicio 3*/