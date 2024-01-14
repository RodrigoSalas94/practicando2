// un objeto es una entidad que agrupa datos (propiedades) y funciones (métodos) relacionados.los objetos a menudo se modelan para representar entidades del mundo real u objetos conceptuales. Esta es una de las ideas fundamentales detrás de la programación orientada a objetos (OOP), donde se busca modelar el mundo real a través de objetos y sus interacciones.
const comida = {
  sabor: 'salado',
  variedad: 'carne',
  consistencia: 'solida',
  comer: () => {
    return 'come'
  }
}

console.log(comida.sabor)
console.log(comida.comer())
