/**
 * 
 *  Objetivo: Desenvolver um sorteador para a rifa do Projeto Final
 *  Data: 25/11/24
 *  Autor: Gabriel, Lara, Bahia
 *  Versão: 1.0
 * 
 **/

const inputRandom = document.getElementById("random")

function sortearNumero(){
    const numeroSorteado = Math.floor(Math.random() * 100) + 1

    inputRandom.value = numeroSorteado

    console.log(`Número sorteado: ${numeroSorteado}`)
    return numeroSorteado
}

sortearNumero()
