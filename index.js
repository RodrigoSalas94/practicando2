const Animal = require('./animal')
const datos = require('./datos')

const animal1 = new Animal(11, 'grande', 'perro')
const animal2 = new Animal(5, 'pequeño', 'gato')

const libro = []

datos.agregarDatosALibro(libro, animal1)
datos.agregarDatosALibro(libro, animal2)

console.log('Libro', libro)
