const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novasFrutas = frutas.map((x, i) => {
    x = x.toLowerCase()
    return `${i} - ${x.replace(x[0], x[0].toUpperCase())}`
});
console.log(novasFrutas);