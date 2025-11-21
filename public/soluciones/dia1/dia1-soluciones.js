// ============================================
// SOLUCIONES - DÍA 1
// ============================================
// Estas son soluciones de ejemplo. ¡Tu código puede ser diferente y estar correcto!

// ============================================
// EJERCICIO 1: HOLA MUNDO
// ============================================

/**
 * Función que saluda al usuario por su nombre
 * @param {string} nombre - El nombre del usuario
 * @returns {string} Mensaje de saludo personalizado
 */
function saludar(nombre) {
  return `¡Hola, ${nombre}! Bienvenido/a al taller de programación con IA`;
}

// Pruebas:
console.log(saludar("María"));
// Salida: ¡Hola, María! Bienvenido/a al taller de programación con IA

console.log(saludar("Carlos"));
// Salida: ¡Hola, Carlos! Bienvenido/a al taller de programación con IA


// ============================================
// EJERCICIO 2: CALCULADORA BÁSICA
// ============================================

/**
 * Suma dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La suma de a y b
 */
function sumar(a, b) {
  return a + b;
}

/**
 * Resta dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La resta de a - b
 */
function restar(a, b) {
  return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} El producto de a * b
 */
function multiplicar(a, b) {
  return a * b;
}

/**
 * Divide dos números con validación
 * @param {number} a - Dividendo
 * @param {number} b - Divisor
 * @returns {number|string} El cociente o un mensaje de error
 */
function dividir(a, b) {
  // Validación: evitar división por cero
  if (b === 0) {
    return "Error: No se puede dividir por cero";
  }
  return a / b;
}

// Pruebas:
console.log("\n--- CALCULADORA BÁSICA ---");
console.log("5 + 3 =", sumar(5, 3));              // 8
console.log("10 - 4 =", restar(10, 4));           // 6
console.log("6 × 7 =", multiplicar(6, 7));        // 42
console.log("15 ÷ 3 =", dividir(15, 3));          // 5
console.log("10 ÷ 0 =", dividir(10, 0));          // Error


// ============================================
// EJERCICIO 3: MANIPULACIÓN DE STRINGS
// ============================================

/**
 * Analiza un texto y retorna estadísticas
 * @param {string} texto - El texto a analizar
 * @returns {object} Objeto con estadísticas del texto
 */
function analizarTexto(texto) {
  // Contar caracteres sin espacios
  const caracteres = texto.replace(/ /g, '').length;
  
  // Contar palabras (dividir por espacios y filtrar vacíos)
  const palabras = texto.trim().split(/\s+/).length;
  
  // Convertir a mayúsculas y minúsculas
  const mayusculas = texto.toUpperCase();
  const minusculas = texto.toLowerCase();
  
  // Retornar objeto con toda la información
  return {
    caracteres: caracteres,
    palabras: palabras,
    mayusculas: mayusculas,
    minusculas: minusculas
  };
}

// Pruebas:
console.log("\n--- ANÁLISIS DE TEXTO ---");
console.log(analizarTexto("Hola Mundo"));
// {
//   caracteres: 9,
//   palabras: 2,
//   mayusculas: "HOLA MUNDO",
//   minusculas: "hola mundo"
// }

console.log(analizarTexto("JavaScript es genial"));
// {
//   caracteres: 18,
//   palabras: 3,
//   mayusculas: "JAVASCRIPT ES GENIAL",
//   minusculas: "javascript es genial"
// }


// ============================================
// EJERCICIO 4: NÚMEROS PARES E IMPARES
// ============================================

/**
 * Verifica si un número es par
 * @param {number} numero - El número a verificar
 * @returns {boolean|string} true si es par, false si es impar, o mensaje de error
 */
function esPar(numero) {
  // Validación: verificar que sea un número
  if (typeof numero !== 'number') {
    return "Error: El parámetro debe ser un número";
  }
  
  // Un número es par si el residuo de dividirlo entre 2 es 0
  return numero % 2 === 0;
}

// Pruebas:
console.log("\n--- VERIFICADOR DE PARES ---");
console.log("¿4 es par?", esPar(4));           // true
console.log("¿7 es par?", esPar(7));           // false
console.log("¿0 es par?", esPar(0));           // true
console.log("¿-6 es par?", esPar(-6));         // true
console.log("¿'hola' es par?", esPar("hola")); // Error


// ============================================
// DESAFÍO EXTRA: CONTADOR DE VOCALES
// ============================================

/**
 * Cuenta las vocales en un texto
 * @param {string} texto - El texto a analizar
 * @returns {number} Cantidad de vocales encontradas
 */
function contarVocales(texto) {
  // Convertir a minúsculas para facilitar la comparación
  const textoMinusculas = texto.toLowerCase();
  
  // Definir las vocales
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  
  // Contador de vocales
  let contador = 0;
  
  // Recorrer cada carácter del texto
  for (let i = 0; i < textoMinusculas.length; i++) {
    const caracter = textoMinusculas[i];
    
    // Si el carácter es una vocal, incrementar el contador
    if (vocales.includes(caracter)) {
      contador++;
    }
  }
  
  return contador;
}

// SOLUCIÓN ALTERNATIVA (más concisa):
function contarVocalesV2(texto) {
  // Usar expresión regular para encontrar todas las vocales
  const vocales = texto.match(/[aeiouáéíóú]/gi);
  
  // Si no hay vocales, retornar 0, sino retornar la cantidad
  return vocales ? vocales.length : 0;
}

// Pruebas:
console.log("\n--- CONTADOR DE VOCALES ---");
console.log("Vocales en 'Hola Mundo':", contarVocales("Hola Mundo"));        // 4
console.log("Vocales en 'JavaScript':", contarVocales("JavaScript"));         // 3
console.log("Vocales en 'AEIOU':", contarVocales("AEIOU"));                   // 5
console.log("Vocales en 'xyz':", contarVocales("xyz"));                       // 0

console.log("\n--- VERSIÓN ALTERNATIVA ---");
console.log("Vocales en 'Programación':", contarVocalesV2("Programación"));   // 5


// ============================================
// EXPLICACIONES ADICIONALES
// ============================================

console.log("\n\n=== CONCEPTOS APRENDIDOS ===\n");

console.log("1. FUNCIONES:");
console.log("   - Se declaran con 'function nombreFuncion(parametros)'");
console.log("   - Usan 'return' para devolver un valor");
console.log("   - Pueden recibir parámetros y retornar resultados\n");

console.log("2. VALIDACIONES:");
console.log("   - Siempre verifica los datos de entrada");
console.log("   - Usa 'typeof' para verificar tipos de datos");
console.log("   - Previene errores con condicionales\n");

console.log("3. STRINGS:");
console.log("   - .toUpperCase() convierte a mayúsculas");
console.log("   - .toLowerCase() convierte a minúsculas");
console.log("   - .length da la longitud");
console.log("   - .split() divide un string en array\n");

console.log("4. OPERADORES:");
console.log("   - % (módulo) da el residuo de una división");
console.log("   - === compara valor y tipo");
console.log("   - !== verifica que sean diferentes\n");

console.log("5. BUCLES:");
console.log("   - 'for' se usa para repetir código un número específico de veces");
console.log("   - Útil para recorrer strings y arrays\n");


// ============================================
// TIPS PARA MEJORAR
// ============================================

console.log("=== TIPS PARA MEJORAR TU CÓDIGO ===\n");

console.log("✅ Usa nombres descriptivos para funciones y variables");
console.log("✅ Agrega comentarios para explicar lógica compleja");
console.log("✅ Valida los datos de entrada");
console.log("✅ Prueba tu código con diferentes casos");
console.log("✅ Pregunta a la IA: '¿Cómo puedo mejorar este código?'\n");


// ============================================
// EJERCICIOS ADICIONALES (OPCIONAL)
// ============================================

console.log("=== EJERCICIOS ADICIONALES ===\n");

console.log("1. Modifica saludar() para que salude diferente según la hora del día");
console.log("2. Crea una función que convierta grados Celsius a Fahrenheit");
console.log("3. Crea una función que verifique si un string es un palíndromo");
console.log("4. Crea una función que encuentre el número mayor entre tres números\n");
