// El tipo de dato primitivo Number maneja un número máximo de números. Si nos manejamos fuera del rango con 'n' se pueden obtener resultados erróneos.

const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991

// Para manejar números fuera del rango mínimo y máximo con resultados correctos de usa BigInt.

// Antes de es11 se usaban los números grandes con la 'n' al final
const bigNumber = 8479844976498749847n;
console.log(bigNumber);

// Es11 añade el dato primitivo bigint para manejar los enteros grandes
const bigInt = BigInt(8479844976498749847);
console.log(bigInt);