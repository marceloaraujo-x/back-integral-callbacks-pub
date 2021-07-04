const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
const tempoDeJogada = 10000 / jogadores.length;
jogadores.reverse();
function imprimirNome() {
    if (jogadores.length === 0) {
        console.log("A rodada terminou!");
        clearInterval(intervalId);
    } else {
        console.log(jogadores[jogadores.length - 1]);
        jogadores.length--;
    }
}
imprimirNome();
const intervalId = setInterval(imprimirNome, tempoDeJogada);