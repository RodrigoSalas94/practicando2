const mayorEdad = (edad) => {
  if (edad < 18) {
    return 'Esta persona es menor de edad'
  } else {
    return ' Esta persona es mayor de edad'
  }
}

const persona1 = 25
const persona2 = "15"
const persona3 = true
console.log(mayorEdad(persona1))
console.log(mayorEdad(persona2))
console.log(mayorEdad(persona3))
