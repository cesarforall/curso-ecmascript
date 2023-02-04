// node-fetch es una librería que permite trabajar con peticiones a internet desde node.
// Top level await permite trabajar con await sin añadir la palabra reservada async al principio

import fetch from 'node-fetch';

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export { products };
