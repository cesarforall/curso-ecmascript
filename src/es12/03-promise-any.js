// El método .any([promises]) retorna la respuesta de la primera respuesta satisfactoria de una lista de promesas

const promise1 = new Promise((resolve, reject) => reject('Rejected'));
const promise2 = new Promise((resolve, reject) => resolve('Resolved'));
const promise3 = new Promise((resolve, reject) => resolve('Resolved 2'));

Promise.any([promise1, promise2, promise3]).then(response => console.log(response));
