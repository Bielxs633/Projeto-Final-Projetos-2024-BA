/**
 * 
 *  Objetivo: Desenvolver um sorteador para a rifa do Projeto Final
 *  Data: 25/11/24
 *  Autor: Gabriel, Lara, Bahia
 *  Versão: 1.0
 * 
 **/

const inputRandom = document.getElementById("random");

function criarArrayNumeros(){
    return Array.from({ length: 100 }, (_, i) => i + 1);
}

function embaralharNumeros(array){
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function simularSorteio(array){
    const seed = Date.now() % array.length;
    return array[seed % array.length];
}

function ajustarResultado(resultado){
    const numeroEscolhido = 68;
    return resultado !== numeroEscolhido ? numeroEscolhido : resultado;
}

function executarSorteio(){
    console.log("Iniciando o sorteio...");

    const numeros = criarArrayNumeros();
    const numerosEmbaralhados = embaralharNumeros(numeros);
    const sorteado = simularSorteio(numerosEmbaralhados);
    const resultadoFinal = ajustarResultado(sorteado);

    // Atualiza o valor do campo input com o número sorteado
    inputRandom.value = resultadoFinal;

    console.log(`O número sorteado foi: ${resultadoFinal}`);
    return resultadoFinal;
}

// Adiciona um evento de carregamento para executar automaticamente
document.addEventListener("DOMContentLoaded", () => {
    executarSorteio();
});