const frutas1 = ['maça', 'pera', 'uva', 'banana']

for(let i = 0;i < frutas1.length; i++) {
    console.log(`indice ${i} `, frutas1[i])
}

const frutas = ['Maçã', 'Pêra', 'Uva'];
const novasFrutas = frutas.map(el => el.toLowerCase());
console.log(novasFrutas); 