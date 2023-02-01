// Optional chaining es un método que evita la detención del programa al acceder a una llave no existentente dentro de un objeto.
// La primera vez que el programa no obtiene un valor retorna undefined. Si se intenta acceder a una llave de undefined se detiene el programa.
// Opcional chaining funciona poniendo el símbolo de pregunta '?' antes del punto y llave. Si no existe devolverá undefined.
// Se recomienda usar en las llaves que no se tenga la certeza de que existan para tener disponible la cadena de respuestas u otros errores de los que necesitemos tener conocimiento

const objetoDeObjetos = { objPadre: { obj: '1' }, objHijo: { obj: '2' } };
console.log(objetoDeObjetos.objSobrino);
// console.log(objetoDeObjetos.objSobrino.obj);
console.log(objetoDeObjetos.objPadre?.edad);
