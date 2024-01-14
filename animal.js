// una clase es una plantilla para crear objetos. Es una forma de definir un tipo de objeto y especificar cómo se deben construir y comportar los objetos de ese tipo.
class Animal {
  constructor (edad, tamaño, tipo) {
    this.edad = edad
    this.tamaño = tamaño
    this.tipo = tipo
  }

  obtenerInformacion () {
    return `${this.edad}, ${this.tamaño}, ${this.tipo} `
  }
}
module.exports = Animal
