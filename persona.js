const { caminar, comer, mascota } = require('./funcion')

const hombre = {
  nombre: 'Rodri',
  edad: 29,
  caminar,
  mascota,
  comer
}
console.log(hombre.caminar())
console.log(hombre.nombre)
console.log(hombre.mascota)
console.log(hombre.comer())
