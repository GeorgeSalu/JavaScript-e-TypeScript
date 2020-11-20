const pessoas = [
	{ id: 3, nome: 'luiz' },
	{ id: 2, nome: 'maria' },
	{ id: 1, nome: 'helena' },
]

const novasPessoas = new Map();
for(const pessoa of pessoas) {
	const { id } = pessoa;
	novasPessoas.set(id, {...pessoas})
}

console.log(novasPessoas)
