
// this is a js file
// Franciele Dorr Dos Santos

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)


const frase = prompt("subi num onibus em marrocos")
console.log(frase)

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
console.log(frase)

const nome = prompt("QUAL O SEU NOME?")
console.log(nome)
const email = prompt("QUAL SEU EMAIL?")
console.log(email)

console.log("O usuario", email, "foi cadastrado com sucesso.Seja bem-vinda(o),", nome)


const listaDeComidas = ["arroz", "feijão", "pizza", "sopa", "batataFrita"]
console.log(listaDeComidas)
