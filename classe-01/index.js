const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const novoCidades = cidades.filter(x => x.length < 9);
console.log(novoCidades.join(", "));