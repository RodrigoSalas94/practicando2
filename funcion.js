// bloque de código reutilizable que realiza una tarea específica.
const caminar = () => {
  return 'se mueve'
}
const comer = () => {
  return 'come'
}
const saludar = (nombre) => `Hola, ${nombre}!`
console.log(saludar('Rodri'))

const mascota = {
  raza: 'Beagle',
  nombre: 'Zuka',
  edad: 7
}
module.exports = {
  caminar,
  comer,
  mascota
}
