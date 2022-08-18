let listaAlunos = ["Antonella", "Bruno", "Carlos", "Elisangela", "Josiane", "Karla", "Robson", "Rose"];

for (let i = 0; i < listaAlunos.length; i++) {
    if (i == 0) {
        console.log(`Posição [${i}]: ${listaAlunos[i]} = Zero localizado!`)

    } else if (i % 2 != 0) {
        console.log(`Posição [${i}]: ${listaAlunos[i]} = Número ímpar localizado!`)
    } else {
        console.log(`Posição [${i}]: ${listaAlunos[i]} = Número par localizado!`) 
    }
}