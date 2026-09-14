function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumerosAleatorios(de, ate);
        sorteados.push(numero);
    }
    alert(`Números sorteados: ${sorteados.join(", ")}`);

}

function obterNumerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // Irá gerar um número aleatório entre min e max, incluindo ambos os valores.

}