// ============================================
// DÍA 2: LÓGICA DE PROGRAMACIÓN
// Estructuras de Control y Programas Interactivos
// ============================================

// ============================================
// EJERCICIO 1: CALCULADORA COMPLETA
// ============================================
// Objetivo: Crear una calculadora con menú de opciones usando estructuras de control
//
// PROMPT SUGERIDO:
// "Crea una calculadora en JavaScript que:
// 1. Muestre un menú con opciones (sumar, restar, multiplicar, dividir, salir)
// 2. Pida dos números al usuario
// 3. Realice la operación seleccionada
// 4. Muestre el resultado
// 5. Repita el proceso hasta que el usuario elija salir
// Usa readline-sync para entrada de usuario en consola"

// TODO: Escribe tu código aquí
// Pista: Necesitarás usar if/else o switch, y un bucle while




// ============================================
// EJERCICIO 2: CONVERSOR DE TEMPERATURAS
// ============================================
// Objetivo: Convertir entre Celsius, Fahrenheit y Kelvin
//
// PROMPT SUGERIDO:
// "Crea un programa conversor de temperaturas que:
// 1. Muestre un menú con opciones:
//    - Celsius a Fahrenheit
//    - Celsius a Kelvin
//    - Fahrenheit a Celsius
//    - Fahrenheit a Kelvin
//    - Kelvin a Celsius
//    - Kelvin a Fahrenheit
// 2. Pida la temperatura a convertir
// 3. Realice la conversión con las fórmulas correctas
// 4. Muestre el resultado formateado
// Incluye validación de temperaturas imposibles (ej: menos de -273.15°C)"

// FÓRMULAS:
// Celsius a Fahrenheit: (C × 9/5) + 32
// Celsius a Kelvin: C + 273.15
// Fahrenheit a Celsius: (F - 32) × 5/9
// Fahrenheit a Kelvin: (F - 32) × 5/9 + 273.15
// Kelvin a Celsius: K - 273.15
// Kelvin a Fahrenheit: (K - 273.15) × 9/5 + 32

// TODO: Escribe tu código aquí




// ============================================
// EJERCICIO 3: CONVERSOR DE UNIDADES DE LONGITUD
// ============================================
// Objetivo: Convertir entre metros, kilómetros, millas y pies
//
// PROMPT SUGERIDO:
// "Crea un conversor de unidades de longitud que permita convertir entre:
// - Metros, Kilómetros, Millas, Pies
// Debe mostrar un menú, pedir la cantidad y realizar la conversión.
// Usa estas equivalencias:
// 1 km = 1000 m
// 1 milla = 1609.34 m
// 1 pie = 0.3048 m"

// TODO: Escribe tu código aquí




// ============================================
// EJERCICIO 4: TABLA DE MULTIPLICAR
// ============================================
// Objetivo: Generar tablas de multiplicar usando bucles for
//
// PROMPT SUGERIDO:
// "Crea un programa que:
// 1. Pida al usuario un número del 1 al 10
// 2. Genere y muestre la tabla de multiplicar de ese número
// 3. Formato: '5 x 1 = 5', '5 x 2 = 10', etc.
// 4. Pregunte si quiere ver otra tabla
// Usa un bucle for para generar la tabla"

// TODO: Escribe tu código aquí




// ============================================
// EJERCICIO 5: ADIVINA EL NÚMERO
// ============================================
// Objetivo: Crear un juego usando bucles while y condicionales
//
// PROMPT SUGERIDO:
// "Crea un juego 'Adivina el Número' que:
// 1. Genere un número aleatorio entre 1 y 100
// 2. Pida al usuario que adivine
// 3. Dé pistas: 'muy alto', 'muy bajo', o '¡correcto!'
// 4. Cuente los intentos
// 5. Al acertar, muestre cuántos intentos tomó
// 6. Pregunte si quiere jugar de nuevo
// Usa Math.random() para generar el número"

// TODO: Escribe tu código aquí




// ============================================
// DESAFÍO EN PAREJAS: MENÚ INTERACTIVO
// ============================================
// Objetivo: Crear un sistema de menú completo que integre varios programas
//
// PROMPT SUGERIDO:
// "Crea un programa con un menú principal que incluya:
// 1. Calculadora
// 2. Conversor de temperaturas
// 3. Conversor de longitudes
// 4. Tabla de multiplicar
// 5. Juego: Adivina el número
// 6. Salir
//
// El programa debe:
// - Mostrar el menú en un bucle
// - Ejecutar la opción seleccionada
// - Regresar al menú después de cada operación
// - Tener validación de opciones inválidas
// - Mostrar mensajes claros y formateados"

// TODO: Escribe tu código aquí (trabaja con un compañero)




// ============================================
// EJERCICIO BONUS: CONTADOR DE NÚMEROS PRIMOS
// ============================================
// Objetivo: Determinar si un número es primo usando bucles anidados
//
// PROMPT SUGERIDO:
// "Crea una función esPrimo(numero) que determine si un número es primo.
// Luego crea un programa que:
// 1. Pida un rango (número inicial y final)
// 2. Encuentre todos los números primos en ese rango
// 3. Los muestre en pantalla
// 4. Cuente cuántos primos hay
// Un número primo solo es divisible por 1 y por sí mismo"

// TODO: Escribe tu código aquí




// ============================================
// TIPS PARA ESTRUCTURAS DE CONTROL
// ============================================

/*
CONDICIONALES (if/else):
- Usa 'if' para tomar decisiones
- 'else if' para múltiples condiciones
- 'else' para el caso por defecto

Ejemplo:
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

SWITCH:
- Útil cuando tienes muchas opciones
- Más limpio que múltiples if/else

Ejemplo:
switch (opcion) {
  case 1:
    console.log("Opción 1");
    break;
  case 2:
    console.log("Opción 2");
    break;
  default:
    console.log("Opción inválida");
}

BUCLE WHILE:
- Se repite mientras una condición sea verdadera
- Útil cuando no sabes cuántas veces repetir

Ejemplo:
let continuar = true;
while (continuar) {
  // código
  continuar = preguntarSiContinuar();
}

BUCLE FOR:
- Se repite un número específico de veces
- Útil para iterar sobre rangos

Ejemplo:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
*/

// ============================================
// PROMPTS ÚTILES PARA LA IA
// ============================================

/*
1. "Explica qué hace este bucle línea por línea"
2. "¿Cómo puedo validar que el usuario ingrese un número?"
3. "Muéstrame otra forma de escribir este if/else"
4. "¿Qué es mejor usar aquí: while o for?"
5. "Agrega manejo de errores a este código"
6. "Formatea la salida para que se vea más profesional"
*/

// ============================================
// NOTAS IMPORTANTES
// ============================================

/*
PARA ENTRADA DE USUARIO EN CONSOLA:
Si quieres pedir datos al usuario, necesitas instalar readline-sync:

En la terminal:
npm install readline-sync

En tu código:
const readline = require('readline-sync');
const nombre = readline.question('¿Cuál es tu nombre? ');

ALTERNATIVA (sin instalar nada):
Puedes usar valores predefinidos para probar:
const numero1 = 5;
const numero2 = 3;
*/
