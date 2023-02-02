// El método matchAll de los objetos String devuelve un iterable por cada coincidencia con la expresión regular pasada como argumento

const regex = /\b(Apple)+\b/g;
const fruit = 'Banana, Kiwi, Apple, orange, Apple';

for (const match of fruit.matchAll(regex)) {
    console.log(match)
}