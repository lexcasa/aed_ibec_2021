let persona = {
    nombre: "Alex",
    edad: 29
}

console.log(persona)
console.log(persona.nombre)
console.log(persona.edad)

for (const key in persona) {
    console.log(key, persona[key])
}